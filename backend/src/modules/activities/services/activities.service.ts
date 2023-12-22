import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'

import { UserDocument } from '../../user/schemas/user.schema'
import { ActivityDocument } from '../schemas/activity.schema'
import { ActivityDetails, CreateActivityRequest } from '../types/activities.type'

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel('Activity') private readonly activityModel: Model<ActivityDocument>,
    @InjectModel('User') private readonly userModel: Model<UserDocument>
  ) {}

  async findAll(): Promise<ActivityDocument[]> {
    const activities = await this.activityModel.find().exec()

    return activities
  }

  async findById(id: string): Promise<ActivityDetails | null> {
    const activity = await this.activityModel.findById(id).exec()

    if (!activity) {
      return null
    }

    const { _id, name, city, description, price, imageUrl, category, location } = activity

    return {
      _id,
      name,
      city,
      description,
      price,
      imageUrl,
      category,
      location,
    }
  }

  async findByCategory({
    categoryId,
    searchTerms,
    priceRange,
  }: {
    categoryId: string
    searchTerms?: string
    priceRange?: string
  }): Promise<ActivityDocument[]> {
    const activities = await this.activityModel
      .find({
        $and: [
          {
            category: categoryId,
          },
          searchTerms
            ? {
                $or: [
                  {
                    city: { $regex: new RegExp(searchTerms, 'i') },
                  },
                ],
              }
            : {},
          priceRange
            ? {
                price: { $lte: priceRange },
              }
            : {},
        ],
      })
      .exec()

    return activities
  }

  async findByLocation({
    locationId,
    activityName,
    priceRange,
  }: {
    locationId: string
    activityName?: string
    priceRange?: string
  }): Promise<ActivityDocument[]> {
    const activities = await this.activityModel
      .find({
        $and: [
          {
            location: locationId,
          },
          activityName
            ? {
                category: activityName,
              }
            : {},
          priceRange
            ? {
                price: { $lte: priceRange },
              }
            : {},
        ],
      })
      .exec()

    return activities
  }

  async findByUser({ userId }: { userId: string }): Promise<ActivityDocument[]> {
    const activities = await this.activityModel
      .find({
        user: userId,
      })
      .sort([['_id', -1]])
      .exec()

    return activities
  }

  async create({
    activity,
    userId,
  }: {
    activity: CreateActivityRequest
    userId: string
  }): Promise<ActivityDocument> {
    const newactivity = new this.activityModel({ ...activity, user: userId })

    const activityDocument = await newactivity.save()

    const user = await this.userModel.findById(new Types.ObjectId(userId)).exec()

    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND')
    }
    user.activities.push(newactivity)
    user.save()

    return activityDocument
  }
}

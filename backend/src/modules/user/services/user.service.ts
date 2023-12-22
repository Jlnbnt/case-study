import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { UserDocument } from '../schemas/user.schema'
import { UserDetails } from '../types/user.type'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}

  getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatarUrl: user.avatarUrl,
    }
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email }).exec()

    return user
  }

  async findById(id: string): Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec()

    if (!user) {
      return null
    }

    return this.getUserDetails(user)
  }

  async create({
    avatarUrl,
    email,
    firstName,
    hashedPassword,
    lastName,
  }: {
    firstName: string
    lastName: string
    email: string
    avatarUrl: string
    hashedPassword: string
  }): Promise<UserDocument> {
    const newUser = new this.userModel({
      firstName,
      lastName,
      email,
      avatarUrl,
      password: hashedPassword,
    })

    const userDocument = await newUser.save()

    return userDocument
  }
}

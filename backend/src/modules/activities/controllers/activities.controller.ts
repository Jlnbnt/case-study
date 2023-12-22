import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'

import { ActivityDocument } from '../schemas/activity.schema'
import { ActivitiesService } from '../services/activities.service'
import { ActivityDetails, CreateActivityRequest } from '../types/activities.type'

@Controller('activities')
export class ActivitiesController {
  constructor(private activityService: ActivitiesService) {}

  @Post(':id')
  async createActivity(
    @Param('id') id: string,
    @Body() body: CreateActivityRequest
  ): Promise<ActivityDocument> {
    const createdActivity = await this.activityService.create({ activity: body, userId: id })

    return createdActivity
  }

  @Get('/')
  async listActivity(): Promise<ActivityDocument[]> {
    const activity = await this.activityService.findAll()
    return activity
  }

  @Get('category/:id')
  async listByCategory(
    @Param('id') id: string,
    @Query() query: { searchTerms: string; priceRange: string }
  ) {
    const activity = await this.activityService.findByCategory({
      categoryId: id,
      searchTerms: query.searchTerms,
      priceRange: query.priceRange,
    })
    return activity
  }

  @Get('location/:id')
  async listByLocation(
    @Param('id') id: string,
    @Query() query: { activityName: string; priceRange: string }
  ) {
    const activity = await this.activityService.findByLocation({
      locationId: id,
      activityName: query.activityName,
      priceRange: query.priceRange,
    })
    return activity
  }

  @Get('user/:id')
  async listByUser(@Param('id') id: string) {
    const activity = await this.activityService.findByUser({
      userId: id,
    })
    return activity
  }

  @Get(':id')
  async getActivity(@Param('id') id: string): Promise<ActivityDetails | null> {
    const activity = await this.activityService.findById(id)

    return activity
  }
}

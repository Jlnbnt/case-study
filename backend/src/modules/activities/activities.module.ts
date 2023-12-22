import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ActivitiesController } from './controllers/activities.controller'
import { ActivitySchema } from './schemas/activity.schema'
import { ActivitiesService } from './services/activities.service'
import { UserSchema } from '../user/schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Activity', schema: ActivitySchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  exports: [ActivitiesService],
})
export class ActivitiesModule {}

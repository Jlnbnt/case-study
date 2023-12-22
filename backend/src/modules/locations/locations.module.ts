import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { LocationsController } from './controllers/locations.controller'
import { LocationSchema } from './schemas/location.schema'
import { LocationsService } from './services/locations.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Location', schema: LocationSchema }])],
  controllers: [LocationsController],
  providers: [LocationsService],
  exports: [LocationsService],
})
export class LocationsModule {}

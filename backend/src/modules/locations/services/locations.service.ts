import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { LocationDocument } from '../schemas/location.schema'

@Injectable()
export class LocationsService {
  constructor(@InjectModel('Location') private readonly locationModel: Model<LocationDocument>) {}

  async findAll(): Promise<LocationDocument[]> {
    const locations = await this.locationModel.find().exec()

    return locations
  }
}

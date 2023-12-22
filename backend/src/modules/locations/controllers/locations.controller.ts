import { Controller, Get } from '@nestjs/common'

import { LocationDocument } from '../schemas/location.schema'
import { LocationsService } from '../services/locations.service'

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Get()
  async listLocation(): Promise<LocationDocument[]> {
    const locations = await this.locationService.findAll()

    return locations
  }
}

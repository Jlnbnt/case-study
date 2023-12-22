import { Controller, Get, Param } from '@nestjs/common'

import { UserService } from '../services/user.service'
import { UserDetails } from '../types/user.type'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    const user = this.userService.findById(id)

    return user
  }
}

import { Body, Controller, Post } from '@nestjs/common'

import { UserDetails, UserLoginRequest, UserRegisterRequest } from '../../user/types/user.type'
import { AuthService } from '../services/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(
    @Body() user: UserRegisterRequest
  ): Promise<{ token: string; user: UserDetails } | null> {
    return this.authService.register(user)
  }

  @Post('login')
  login(@Body() user: UserLoginRequest): Promise<{ token: string } | null> {
    return this.authService.login(user)
  }

  @Post('verify-jwt')
  verifyJwt(@Body() payload: { token: string }) {
    return this.authService.verifyJwt(payload.token)
  }
}

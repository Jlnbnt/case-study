import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { AuthController } from './controllers/auth.controller'
import { JwtGuard } from './guards/jwt.guard'
import { JwtStrategy } from './guards/jwt.strategy'
import { AuthService } from './services/auth.service'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'secret',
        signOptions: { expiresIn: '3600s' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtGuard, JwtStrategy],
})
export class AuthModule {}

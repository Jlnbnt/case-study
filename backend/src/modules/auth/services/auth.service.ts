import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'

import { UserService } from '../../user/services/user.service'
import { UserDetails, UserLoginRequest, UserRegisterRequest } from '../../user/types/user.type'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
  }

  async register({
    firstName,
    lastName,
    password,
    email,
    avatarUrl,
  }: UserRegisterRequest): Promise<{ token: string; user: UserDetails } | null> {
    const existingUser = await this.userService.findByEmail(email)

    if (existingUser) {
      throw new ConflictException('EMAIL_IS_ALREADY_TAKEN')
    }

    const hashedPassword = await this.hashPassword(password)

    const newUser = await this.userService.create({
      firstName,
      lastName,
      email,
      hashedPassword,
      avatarUrl,
    })

    const signedJwt = await this.jwtService.signAsync({ email, password })

    return { user: this.userService.getUserDetails(newUser), token: signedJwt }
  }

  compareHash(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword)
  }

  async validateUser({ email, password }: UserLoginRequest): Promise<UserDetails | null> {
    const user = await this.userService.findByEmail(email)

    if (!user || !this.compareHash(password, user.password)) {
      return null
    }

    return this.userService.getUserDetails(user)
  }

  async login({
    email,
    password,
  }: UserLoginRequest): Promise<{ token: string; user: UserDetails } | null> {
    const validatedUser = await this.validateUser({ email, password })

    if (!validatedUser) {
      throw new UnauthorizedException('INVALID_CREDENTIALS')
    }

    const signedJwt = await this.jwtService.signAsync({ email, password })
    return { token: signedJwt, user: validatedUser }
  }

  async verifyJwt(jwt: string): Promise<{ token: string; user: UserDetails } | null> {
    try {
      const { exp, email } = await this.jwtService.verifyAsync(jwt)

      if (new Date(exp).getTime() > Date.now() + 24 * 3600) {
        throw new UnauthorizedException('INVALID_JWT')
      }

      const user = await this.userService.findByEmail(email)

      if (!user) {
        return null
      }

      return {
        user: this.userService.getUserDetails(user),
        token: jwt,
      }
    } catch (error) {
      return null
    }
  }
}

import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  getHello() {
    return {
      appName: 'case-study-backend',
      version: process.env.npm_package_version,
    }
  }
}

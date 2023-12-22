import { NestFactory } from '@nestjs/core'

import { AppModule } from './modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true, logger: ['warn', 'error'] })

  app.enableCors()

  await app.listen(3000)
}

bootstrap()

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { ActivitiesModule } from './activities/activities.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { CategoriesModule } from './categories/categories.module'
import { LocationsModule } from './locations/locations.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/case-study-db'),
    AuthModule,
    UserModule,
    ActivitiesModule,
    CategoriesModule,
    LocationsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

import { Activity } from '../../activities/schemas/activity.schema'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ require: true })
  firstName!: string

  @Prop({ require: true })
  lastName!: string

  @Prop({ require: true, unique: true })
  email!: string

  @Prop({ require: true })
  password!: string

  @Prop()
  avatarUrl!: string

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Category' }] })
  activities!: Activity[]
}

export const UserSchema = SchemaFactory.createForClass(User)

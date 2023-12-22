import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

import { Category } from '../../categories/schemas/category.schema'
import { Location } from '../../locations/schemas/location.schema'
import { User } from '../../user/schemas/user.schema'

export type ActivityDocument = Activity & Document

@Schema()
export class Activity {
  @Prop({ require: true })
  name!: string

  @Prop({ require: true })
  city!: string

  @Prop({ require: true })
  description!: string

  @Prop({ require: true })
  price!: number

  @Prop({ required: true })
  imageUrl!: string

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category!: Category

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Location' })
  location!: Location

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user!: User
}

export const ActivitySchema = SchemaFactory.createForClass(Activity)

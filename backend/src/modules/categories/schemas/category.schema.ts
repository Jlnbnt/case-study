import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

export type CategoryDocument = Category & Document

@Schema()
export class Category {
  @Prop({ require: true })
  _id!: Types.ObjectId

  @Prop({ require: true })
  name!: string

  @Prop({ require: true })
  description!: string

  @Prop({ required: true })
  imageUrl!: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)

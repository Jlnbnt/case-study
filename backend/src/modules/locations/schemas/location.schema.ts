import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

export type LocationDocument = Location & Document

@Schema()
export class Location {
  @Prop({ require: true })
  _id!: Types.ObjectId

  @Prop({ require: true })
  name!: string

  @Prop({ require: true })
  description!: string

  @Prop({ required: true })
  imageUrl!: string
}

export const LocationSchema = SchemaFactory.createForClass(Location)

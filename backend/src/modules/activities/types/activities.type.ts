import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { Types } from 'mongoose'

import { Category } from '../../categories/schemas/category.schema'
import { Location } from '../../locations/schemas/location.schema'

export interface ActivityDetails {
  _id: Types.ObjectId
  city: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: Category
  location: Location
}

export class CreateActivityRequest {
  @IsNotEmpty()
  @IsString()
  city!: string

  @IsNotEmpty()
  @IsString()
  type!: string

  @IsNotEmpty()
  @IsNumber()
  price!: number

  @IsNotEmpty()
  @IsString()
  imageUrl!: string

  @IsNotEmpty()
  @IsString()
  description!: string
}

import { Types } from 'mongoose'

export interface CategoryDetails {
  _id: Types.ObjectId
  name: string
  description: string
  imageUrl: string
}

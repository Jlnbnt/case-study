import { Types } from 'mongoose'

export interface LocationDetails {
  _id: Types.ObjectId
  name: string
  description: string
  imageUrl: string
}

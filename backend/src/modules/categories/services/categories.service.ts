import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CategoryDocument } from '../schemas/category.schema'

@Injectable()
export class CategoriesService {
  constructor(@InjectModel('Category') private readonly categoryModel: Model<CategoryDocument>) {}

  async findAll(): Promise<CategoryDocument[]> {
    const categories = await this.categoryModel.find().exec()

    return categories
  }

  async autocomplete() {
    const categories = await this.categoryModel.find().select('name').exec()

    return categories
  }
}

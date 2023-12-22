import { Controller, Get } from '@nestjs/common'

import { CategoryDocument } from '../schemas/category.schema'
import { CategoriesService } from '../services/categories.service'

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async listCategory(): Promise<CategoryDocument[]> {
    const categories = await this.categoriesService.findAll()

    return categories
  }

  @Get('autocomplete')
  async autocomplete() {
    const categories = await this.categoriesService.autocomplete()

    return categories
  }
}

import * as mongoose from 'mongoose'

import { activitiesMockData } from './constants/activities-mock-data'
import { categoriesMockData } from './constants/categories-mock-data'
import { locationsMockData } from './constants/locations.mock-data'
import { usersMockData } from './constants/users-mock-data'
import { ActivitySchema } from '../src/modules/activities/schemas/activity.schema'
import { CategorySchema } from '../src/modules/categories/schemas/category.schema'
import { LocationSchema } from '../src/modules/locations/schemas/location.schema'
import { UserSchema } from '../src/modules/user/schemas/user.schema'

mongoose.connect('mongodb://localhost:27017/case-study-db')

const User = mongoose.model('User', UserSchema)
const Activity = mongoose.model('activity', ActivitySchema)
const Category = mongoose.model('category', CategorySchema)
const Location = mongoose.model('location', LocationSchema)

async function seedDatabase() {
  try {
    await User.deleteMany({})
    await Activity.deleteMany({})
    await Category.deleteMany({})
    await Location.deleteMany({})

    await User.insertMany(usersMockData)
    await Activity.insertMany(activitiesMockData)
    await Category.insertMany(categoriesMockData)
    await Location.insertMany(locationsMockData)
  } catch (error) {
    console.error('SEEDING_ERROR', error)
  } finally {
    mongoose.disconnect()
  }
}

seedDatabase()

import { Types } from 'mongoose'

import { UserRegisterRequest } from '../../src/modules/user/types/user.type'

export const usersMockData: (UserRegisterRequest & { _id: Types.ObjectId })[] = [
  {
    _id: new Types.ObjectId(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: '$2a$10$ltDsyPmFPoZ4Mcwxj3jx0OWHs8Pbfr8zCvdbLnIpnKc9fq3zFbqh2',
    avatarUrl: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg',
  },
]

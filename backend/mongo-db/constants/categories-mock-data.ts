import { Types } from 'mongoose'

import { CategoryDetails } from '../../src/modules/categories/types/categories.type'

export const categoriesMockData: CategoryDetails[] = [
  {
    _id: new Types.ObjectId(),
    description: 'Découvrez les meilleures pistes de randonnée entre deux sessions de travail',
    imageUrl:
      'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'hiking',
  },
  {
    _id: new Types.ObjectId(),
    description: 'Pratiquez le yoga pour trouver l’équilibre parfait entre travail et bien-être',
    imageUrl:
      'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'yoga',
  },
  {
    _id: new Types.ObjectId(),
    description: 'Prenez une vague entre deux visioconférences, l’idéal télétravail',
    imageUrl:
      'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'surf',
  },
  {
    _id: new Types.ObjectId(),
    description: 'Pédalez au grand air pour trouver l’inspiration professionnelle',
    imageUrl:
      'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'cycle',
  },
  {
    _id: new Types.ObjectId(),
    description: 'Grimpez seul ou accompagné pour vous ressourcer en toute liberté',
    imageUrl:
      'https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'climb',
  },
  {
    _id: new Types.ObjectId(),
    description: 'Lancez-vous sur les sentiers après une journée d’activité',
    imageUrl:
      'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'trail',
  },
]

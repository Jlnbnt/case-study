import { Types } from 'mongoose'

import { categoriesMockData } from './categories-mock-data'
import { locationsMockData } from './locations.mock-data'
import { ActivityDetails } from '../../src/modules/activities/types/activities.type'

export const activitiesMockData: ActivityDetails[] = [
  {
    _id: new Types.ObjectId(),
    city: 'Los Angeles',
    name: 'Randonnée Bien-être en Montagne',
    description: 'Partez pour une expérience rafraîchissante de randonnée en montagne !',
    price: 15,
    imageUrl:
      'https://images.pexels.com/photos/2433291/pexels-photo-2433291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[0]!,
    location: locationsMockData[0]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Denver',
    name: 'Aventure sur le Sentier des Fleurs Sauvages',
    description: 'Découvrez la beauté des fleurs sauvages lors de cette randonnée pittoresque !',
    price: 12,
    imageUrl:
      'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[0]!,
    location: locationsMockData[1]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'San Francisco',
    name: 'Retraite Yoga au Coucher du Soleil',
    description: 'Détendez-vous et ressourcez-vous avec du yoga sous le ciel du soir !',
    price: 18,
    imageUrl:
      'https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[1]!,
    location: locationsMockData[2]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'New York City',
    name: 'Atelier Urban Zen Yoga',
    description: "Plongez dans une expérience zen au cœur de l'agitation de la ville !",
    price: 20,
    imageUrl: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg',
    category: categoriesMockData[1]!,
    location: locationsMockData[3]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Malibu',
    name: "Camp d'Aventure de Surf",
    description: "Attrapez les vagues et surfez lors d'un camp palpitant !",
    price: 25,
    imageUrl:
      'https://images.pexels.com/photos/1549196/pexels-photo-1549196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[2]!,
    location: locationsMockData[4]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'San Diego',
    name: 'Cours de Surf en Bord de Mer',
    description: 'Apprenez à surfer avec des instructeurs experts sur les plages ensoleillées !',
    price: 30,
    imageUrl:
      'https://images.pexels.com/photos/6299936/pexels-photo-6299936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[2]!,
    location: locationsMockData[5]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Portland',
    name: 'Tour à Vélo à la Campagne',
    description:
      "Pédalez à travers des paysages champêtres pittoresques lors d'une excursion à vélo !",
    price: 22,
    imageUrl:
      'https://images.pexels.com/photos/15101987/pexels-photo-15101987/free-photo-of-man-riding-a-road-bike.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[3]!,
    location: locationsMockData[0]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Chicago',
    name: 'Défi Cycliste en Milieu Urbain',
    description: 'Relevez le défi cycliste au cœur de la ville !',
    price: 18,
    imageUrl:
      'https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[3]!,
    location: locationsMockData[1]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Denver',
    name: "Expédition d'Escalade",
    description: "Conquérez de nouvelles hauteurs avec une passionnante expédition d'escalade !",
    price: 28,
    imageUrl:
      'https://images.pexels.com/photos/8454456/pexels-photo-8454456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[4]!,
    location: locationsMockData[2]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Phoenix',
    name: "Atelier d'Escalade en Salle",
    description: "Apprenez les techniques de l'escalade en salle lors d'un atelier guidé !",
    price: 15,
    imageUrl:
      'https://images.pexels.com/photos/449609/pexels-photo-449609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[4]!,
    location: locationsMockData[3]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Paris',
    name: 'Semi-Marathon de Paris',
    description: 'Participez au pittoresque semi-marathon à travers les rues de Paris !',
    price: 25,
    imageUrl:
      'https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[5]!,
    location: locationsMockData[4]!,
  },
  {
    _id: new Types.ObjectId(),
    city: 'Barcelone',
    name: 'Course Côtière Méditerranéenne',
    description: "Découvrez la beauté de la Méditerranée lors d'une aventure de course côtière !",
    price: 18,
    imageUrl:
      'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: categoriesMockData[5]!,
    location: locationsMockData[5]!,
  },
]

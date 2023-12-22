import { Types } from 'mongoose'

import { LocationDetails } from '../../src/modules/locations/types/locations.type'

export const locationsMockData: LocationDetails[] = [
  {
    _id: new Types.ObjectId(),
    description:
      'Paris, capitale de la France, est une grande ville européenne et un centre mondial de l’art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré.',
    imageUrl:
      'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Paris',
  },
  {
    _id: new Types.ObjectId(),
    description:
      'Entre Rhône et Saône, Lyon, idéalement située en France et en Europe, est une ville riche de trésors architecturaux, culturels et gastronomiques ! Nouveau·elle résident·e, touriste, ou professionnel·le implantant son activité, vous apprécierez la qualité de vie, le dynamisme et la chaleur des habitant·e·s de Lyon.',
    imageUrl:
      'https://images.pexels.com/photos/19475845/pexels-photo-19475845/free-photo-of-botanical-garden-in-lyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Lyon',
  },
  {
    _id: new Types.ObjectId(),
    description:
      "Bordeaux, perle de l'Aquitaine, est réputée pour ses vignobles de renommée mondiale et son architecture élégante. Nichée sur les rives de la Garonne, la ville offre des places animées, des quais pittoresques et des monuments historiques tels que la Place de la Bourse et le miroir d'eau. Une destination incontournable pour les amateurs de vin et d'histoire.",
    imageUrl:
      'https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Bordeaux',
  },
  {
    _id: new Types.ObjectId(),
    description:
      "Nice, située sur la Côte d'Azur, séduit par son charme méditerranéen, ses plages ensoleillées et sa Promenade des Anglais emblématique. La vieille ville, avec ses ruelles étroites et ses marchés colorés, offre une expérience authentique. Nice est également appréciée pour ses musées, ses jardins luxuriants, et son ambiance artistique.",
    imageUrl: 'https://images.pexels.com/photos/3016350/pexels-photo-3016350.jpeg',
    name: 'Nice',
  },
  {
    _id: new Types.ObjectId(),
    description:
      "Toulouse, surnommée la 'Ville Rose' en raison de la couleur distinctive de ses briques, est un joyau du sud-ouest de la France. Cité de l'aéronautique et de l'espace, elle abrite le siège d'Airbus et la Cité de l'Espace. Outre son patrimoine aérospatial, Toulouse séduit par ses rues animées du Capitole, son canal du Midi classé au patrimoine mondial et sa cuisine délicieuse, mettant en avant le cassoulet et les saucisses de Toulouse.",
    imageUrl:
      'https://images.pexels.com/photos/4937197/pexels-photo-4937197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Toulouse',
  },
  {
    _id: new Types.ObjectId(),
    description:
      "Montpellier, joyau du sud de la France, séduit par son mélange unique de modernité et de charme médiéval. La place de la Comédie, cœur animé de la ville, est entourée de cafés et de boutiques. Montpellier est également connue pour sa vieille ville pittoresque, sa place royale du Peyrou avec son arc de triomphe, et ses jardins botaniques. La présence de l'une des plus anciennes universités d'Europe confère à la ville une ambiance jeune et dynamique.",
    imageUrl:
      'https://images.pexels.com/photos/10273650/pexels-photo-10273650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Montpellier',
  },
]

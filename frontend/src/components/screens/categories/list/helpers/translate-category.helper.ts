export const translateCategory = (name: string) => {
  switch (name) {
    case 'hiking':
      return 'Randonnée'

    case 'yoga':
      return 'Yoga'

    case 'surf':
      return 'Surf'

    case 'cycle':
      return 'Vélo'

    case 'climb':
      return 'Escalade'

    case 'trail':
      return 'Trail'

    default:
      return name
  }
}

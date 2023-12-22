import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@mui/material'

import { Location } from '../ListLocationScreen'

export const LocationCard = ({ location }: { location: Location }) => {
  const { _id, description, imageUrl, name } = location

  return (
    <>
      <Link href={`/activities/location/${name}/${_id}`} passHref>
        <Image
          priority
          style={{ borderRadius: 5, cursor: 'pointer' }}
          height={350}
          width={307}
          objectFit="cover"
          unoptimized
          alt={_id}
          src={imageUrl}
        />
      </Link>
      <Typography sx={{ mt: 2.75 }}>{name}</Typography>
      <Typography
        sx={{
          mb: 2.75,
          mt: 0.75,
          color: '#1B1B1D',
          opacity: '50%',
        }}
      >
        {description}
      </Typography>
    </>
  )
}

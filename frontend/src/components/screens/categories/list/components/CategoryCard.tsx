import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@mui/material'

import { translateCategory } from '../helpers/translate-category.helper'
import { Category } from '../ListCategoriesScreen'

export const CategoryCard = ({ category }: { category: Category }) => {
  const { _id, description, imageUrl, name } = category

  return (
    <>
      <Link href={`/activities/category/${name}/${_id}`} passHref>
        <Image
          priority
          style={{ borderRadius: 5, cursor: 'pointer' }}
          height={229}
          width={307}
          objectFit="cover"
          unoptimized
          alt={_id}
          src={imageUrl}
        />
      </Link>
      <Typography sx={{ mt: 2.75 }}>{translateCategory(name)}</Typography>
      <Typography
        sx={{
          mb: 2.75,
          mt: 0.75,
          maxWidth: 307,
          color: '#1B1B1D',
          opacity: '50%',
        }}
      >
        {description}
      </Typography>
    </>
  )
}

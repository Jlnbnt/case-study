import Image from 'next/image'
import { useState } from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'
import { colors } from '@/styles/theme/options/colors.option'

import { Button, Typography } from '@mui/material'

import { Activity } from '../../list/ListCategoryActivitiesScreen'
import { ActivityDetailDialog } from '../category/components/ActivityDetailDialog'

export const ActivityRow = ({ activity }: { activity: Activity }) => {
  const { city, description, name, price, _id, imageUrl } = activity

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOnOpen = () => {
    setIsDialogOpen(true)
  }
  return (
    <>
      <FlexBox spaced fullWidth>
        <FlexBox start sx={{ gap: 4 }}>
          <Image
            priority
            height={163}
            width={225}
            objectFit="cover"
            unoptimized
            alt={_id}
            src={imageUrl}
          />

          <FlexBox column spaced start sx={{ height: 163 }}>
            <Typography>{city}</Typography>
            <Typography>{name}</Typography>
            <Typography>{description}</Typography>
            <Typography>{price}€</Typography>
          </FlexBox>
        </FlexBox>

        <Button
          color="secondary"
          sx={{
            borderRadius: 10,
            px: 4,
            py: 2,
            width: 128,
            height: 47,
            background: colors.white,
            border: '1px solid #ADADAD',
          }}
          onClick={handleOnOpen}
        >
          Voir plus
        </Button>
      </FlexBox>

      <ActivityDetailDialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        activity={activity}
      />
    </>
  )
}

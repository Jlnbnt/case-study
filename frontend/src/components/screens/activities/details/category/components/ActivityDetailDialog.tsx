import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'
import { colors } from '@/styles/theme/options/colors.option'

import { Close } from '@mui/icons-material'
import { Dialog, IconButton, Typography } from '@mui/material'

import { Activity } from '../../../list/ListCategoryActivitiesScreen'

interface ActivityDetailDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  activity: Activity
}

export const ActivityDetailDialog = ({
  open,
  setOpen,
  activity,
}: ActivityDetailDialogProps) => {
  const { imageUrl, _id, city, description, name, price } = activity

  const handleOnClose = () => {
    setOpen(false)
  }
  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      PaperProps={{ sx: { minWidth: 538, minHeight: 536 } }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <Image
        priority
        height={184}
        width={536}
        objectFit="cover"
        unoptimized
        alt={_id}
        src={imageUrl}
      />

      <IconButton
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          background: colors.white,
          p: 0.2,
        }}
        onClick={handleOnClose}
      >
        <Close fontSize="small" />
      </IconButton>

      <FlexBox column start sx={{ p: 5.25, gap: 2 }}>
        <Typography>{city}</Typography>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{price}€</Typography>
      </FlexBox>
    </Dialog>
  )
}

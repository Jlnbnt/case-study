import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'
import { ControlledTextField } from '@/components/shared/inputs/ControlledTextField'
import { useAppSelector } from '@/redux/useRedux.hook'
import { colors } from '@/styles/theme/options/colors.option'

import { Close, Euro } from '@mui/icons-material'
import {
  Autocomplete,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { CategoryAutocomplete } from '../../activities/list/ListLocationActivitiesScreen'
import { translateCategory } from '../../categories/list/helpers/translate-category.helper'
import {
  CreateActivity,
  CreateActivitySchema,
} from '../schemas/CreateActivity.schema'

interface CreateActivityDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setMutate: Dispatch<SetStateAction<boolean>>
}
export const CreateActivityDialog = ({
  open,
  setOpen,
  setMutate,
}: CreateActivityDialogProps) => {
  const { user } = useAppSelector((state) => state.auth)

  const [activityOptions, setActivityOptions] = useState<
    CategoryAutocomplete[]
  >([])

  const getActivityAutocomplete = async () => {
    const response = await fetch(
      `http://localhost:3000/categories/autocomplete`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.ok) {
      return
    }

    const data: { _id: string; name: string }[] = await response.json()

    setActivityOptions(data)
  }

  const { control, handleSubmit, reset } = useForm<CreateActivity>({
    resolver: zodResolver(CreateActivitySchema),
    defaultValues: {
      category: '',
      city: '',
      price: 0,
      description: '',
      imageUrl:
        'https://images.pexels.com/photos/3844786/pexels-photo-3844786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  })

  const onSubmit = async (formData: CreateActivity) => {
    try {
      const response = await fetch(
        user?.id ? `http://localhost:3000/activities/${user.id}` : '',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      if (!response.ok) {
        return
      }

      handleOnClose()
      setMutate(true)
      return
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnClose = () => {
    setOpen(false)
    reset()
  }

  useEffect(() => {
    ;(async () => await getActivityAutocomplete())()
  }, [])

  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      PaperProps={{ sx: { minWidth: 538 } }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <FlexBox spaced sx={{ pt: 5.25, px: 5.25 }}>
        <DialogTitle sx={{ p: 0, fontWeight: 500 }}>
          Créer une activité
        </DialogTitle>
        <IconButton onClick={handleOnClose}>
          <Close />
        </IconButton>
      </FlexBox>

      <FlexBox column start sx={{ p: 5.25, gap: 2 }}>
        <Typography>Catégorie</Typography>
        <Controller
          name="category"
          control={control}
          render={({ field, fieldState: { error } }) => {
            const { onChange, value } = field

            return (
              <Autocomplete
                fullWidth
                value={
                  value
                    ? activityOptions.find((option) => {
                        return value === option._id
                      }) ?? null
                    : null
                }
                options={activityOptions}
                onChange={(e: SyntheticEvent<Element, Event>, newValue) => {
                  onChange(newValue ? newValue._id : '')
                }}
                getOptionLabel={(option) => {
                  return translateCategory(option.name)
                }}
                noOptionsText="Aucun résultat."
                clearText=""
                openText=""
                renderInput={(params) => (
                  <TextField
                    label="Type de l'activité"
                    error={Boolean(error)}
                    helperText={error ? error.message : ''}
                    {...params}
                  />
                )}
              />
            )
          }}
        />

        <Typography>Ville</Typography>
        <ControlledTextField
          control={control}
          name="city"
          label="Lieux de l'activité"
        />

        <Typography>Prix</Typography>
        <ControlledTextField
          control={control}
          name="price"
          label="Prix de l'activité"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Euro fontSize="small" sx={{ color: '#ADADAD' }} />
              </InputAdornment>
            ),
          }}
        />

        <Typography>Description</Typography>
        <ControlledTextField
          control={control}
          name="description"
          label="Description de l'activité"
          inputProps={{ maxLength: 150 }}
          placeholder="Caractères maximum : 150"
          multiline
          rows={4}
        />

        <Typography>Image</Typography>
        <ControlledTextField
          control={control}
          name="imageUrl"
          label="Image de l'activité"
        />
      </FlexBox>

      <Divider sx={{ p: 0, m: 0 }} />

      <FlexBox centered sx={{ p: 5.25, gap: 2 }}>
        <Button
          sx={{
            color: colors.white,
            width: 200,
            height: 47,
            background: '#ADADAD',
          }}
          onClick={handleOnClose}
        >
          Annuler
        </Button>
        <Button
          sx={{
            color: colors.white,
            width: 200,
            height: 47,
            background: '#0CBC8B',
          }}
          onClick={handleSubmit(onSubmit)}
        >
          S&apos;inscrire
        </Button>
      </FlexBox>
    </Dialog>
  )
}

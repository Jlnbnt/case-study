import { Dispatch, SetStateAction, useState } from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'
import { ControlledTextField } from '@/components/shared/inputs/ControlledTextField'
import { logIn } from '@/redux/slices/auth.slice'
import { colors } from '@/styles/theme/options/colors.option'
import { VoidReturn } from '@/types/VoidReturn.type'
import { errorToast, successToast } from '@/utils/toasts.utils'

import { Close, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Register, RegisterSchema } from './schemas/Register.schema'

interface RegisterDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onSwitchDialog: VoidReturn
}
export const RegisterDialog = ({
  open,
  setOpen,
  onSwitchDialog,
}: RegisterDialogProps) => {
  const dispatch = useDispatch()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleOnToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const { control, handleSubmit, reset } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      lastName: '',
      firstName: '',
      password: '',
    },
  })

  const onSubmit = async (formData: Register) => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        errorToast(data)

        return
      }

      dispatch(logIn(data))

      handleOnClose()

      successToast('Hi !')
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnClose = () => {
    setOpen(false)
    reset()
  }
  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      PaperProps={{ sx: { minWidth: 538 } }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <FlexBox spaced sx={{ pt: 5.25, px: 5.25 }}>
        <DialogTitle sx={{ p: 0, fontWeight: 500 }}>Inscription</DialogTitle>
        <IconButton onClick={handleOnClose}>
          <Close />
        </IconButton>
      </FlexBox>

      <FlexBox column start sx={{ p: 5.25, gap: 2 }}>
        <Typography>Prénom</Typography>
        <ControlledTextField
          control={control}
          name="firstName"
          label="Prénom"
        />

        <Typography>Nom</Typography>
        <ControlledTextField control={control} name="lastName" label="Nom" />

        <Typography>Email</Typography>
        <ControlledTextField control={control} name="email" label="Email" />

        <Typography sx={{ pt: 2.5 }}>Mot de passe</Typography>
        <ControlledTextField
          control={control}
          name="password"
          type={isPasswordVisible ? 'text' : 'password'}
          label="Mot de passe"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleOnToggleVisibility}>
                  {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBox>

      <Divider sx={{ p: 0, m: 0 }} />

      <FlexBox spaced sx={{ p: 5.25 }}>
        <Button
          onClick={() => {
            onSwitchDialog(), reset()
          }}
          variant="text"
        >
          <Typography
            sx={{
              fontSize: 12,
              textAlign: 'start',
              lineHeight: 1.25,
              textDecoration: 'underline',
            }}
          >
            Vous avez déjà un compte ?<br /> Se connecter
          </Typography>
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

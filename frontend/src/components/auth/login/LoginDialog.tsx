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

import { Login, LoginSchema } from './schemas/Login.schema'

interface LoginDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onSwitchDialog: VoidReturn
}
export const LoginDialog = ({
  open,
  setOpen,
  onSwitchDialog,
}: LoginDialogProps) => {
  const dispatch = useDispatch()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleOnToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const { control, handleSubmit, reset } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'john.doe@example.com',
      password: 'password',
    },
  })

  const onSubmit = async (formData: Login) => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
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
        <DialogTitle sx={{ p: 0, fontWeight: 500 }}>Connexion</DialogTitle>
        <IconButton onClick={handleOnClose}>
          <Close />
        </IconButton>
      </FlexBox>

      <FlexBox column start sx={{ p: 5.25, gap: 2 }}>
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
            Pas encore de compte ?<br /> S&apos;inscrire
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
          Se connecter
        </Button>
      </FlexBox>
    </Dialog>
  )
}

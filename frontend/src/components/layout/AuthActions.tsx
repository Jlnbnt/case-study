import { useRouter } from 'next/router'
import { MouseEvent, useState } from 'react'

import { logOut } from '@/redux/slices/auth.slice'
import { useAppSelector } from '@/redux/useRedux.hook'
import { colors } from '@/styles/theme/options/colors.option'

import { Person } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemButton,
  ListItemText,
  Menu,
} from '@mui/material'

import { useDispatch } from 'react-redux'

import { LoginDialog } from '../auth/login/LoginDialog'
import { RegisterDialog } from '../auth/register/RegisterDialog'

export const AuthActions = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { isLoggedIn, user } = useAppSelector((state) => state.auth)

  const [menuAnchorElement, setMenuAnchorElement] =
    useState<HTMLButtonElement>()

  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false)
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>): void => {
    setMenuAnchorElement(e.currentTarget)
  }

  const handleCloseMenu = (): void => {
    setMenuAnchorElement(undefined)
  }

  const handleLogout = (): void => {
    handleCloseMenu()
    dispatch(logOut())
    router.push('/')
  }

  return (
    <>
      <IconButton
        sx={{ background: colors.white, p: 0.4 }}
        onClick={handleOpenMenu}
      >
        {user?.avatarUrl ? (
          <Avatar src={user.avatarUrl} alt="sdf" />
        ) : (
          <Avatar>
            <Person />
          </Avatar>
        )}
      </IconButton>

      <Menu
        anchorEl={menuAnchorElement}
        open={Boolean(menuAnchorElement)}
        onClose={handleCloseMenu}
        sx={{
          position: 'absolute',
          top: 16,
          '& .MuiMenu-list': { p: 0 },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        elevation={1}
        slotProps={{
          paper: { sx: { minWidth: 242 } },
        }}
      >
        {!isLoggedIn ? (
          <Box>
            <ListItemButton
              onClick={() => {
                handleCloseMenu()
                setIsRegisterDialogOpen(true)
              }}
              sx={{ height: 64 }}
            >
              <ListItemText>Inscription</ListItemText>
            </ListItemButton>

            <Divider />

            <ListItemButton
              onClick={() => {
                handleCloseMenu()
                setIsLoginDialogOpen(true)
              }}
              sx={{ height: 64 }}
            >
              <ListItemText>Connexion</ListItemText>
            </ListItemButton>
          </Box>
        ) : (
          <ListItemButton onClick={handleLogout} sx={{ height: 64 }}>
            <ListItemText>Déconnexion</ListItemText>
          </ListItemButton>
        )}
      </Menu>

      <RegisterDialog
        onSwitchDialog={() => {
          setIsRegisterDialogOpen(false)
          setIsLoginDialogOpen(true)
        }}
        setOpen={setIsRegisterDialogOpen}
        open={isRegisterDialogOpen}
      />

      <LoginDialog
        onSwitchDialog={() => {
          setIsLoginDialogOpen(false)
          setIsRegisterDialogOpen(true)
        }}
        setOpen={setIsLoginDialogOpen}
        open={isLoginDialogOpen}
      />
    </>
  )
}

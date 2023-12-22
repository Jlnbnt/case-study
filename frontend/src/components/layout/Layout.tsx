import Link from 'next/link'
import { ReactNode, useEffect } from 'react'

import { logIn, logOut, stopLoading } from '@/redux/slices/auth.slice'
import store from '@/redux/store.redux'
import { useAppSelector } from '@/redux/useRedux.hook'
import { MuiThemeProvider } from '@/styles/theme/context/MuiThemeContext'
import { APP_BAR_HEIGHT } from '@/styles/theme/options/constants.option'

import { Face } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

import { useDispatch } from 'react-redux'

import { AuthActions } from './AuthActions'
import { FlexBox } from '../shared/containers/FlexBox'
import { FullPageLoader } from '../shared/loaders/FullPageLoader'
import { GlobalToaster } from '../toaster/GlobalToaster'

interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch()

  const { isLoading, isLoggedIn } = useAppSelector((state) => state.auth)

  async function verifyToken() {
    const token = window.localStorage.getItem('token')

    if (!token) {
      store.dispatch(logOut())
    }

    try {
      const response = await fetch('http://localhost:3000/auth/verify-jwt', {
        method: 'POST',
        body: JSON.stringify({ token }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        dispatch(stopLoading())

        return null
      }

      store.dispatch(logIn(data))
    } catch (err) {
      store.dispatch(logOut())
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        await verifyToken()
      } catch (err) {
        dispatch(stopLoading())
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <MuiThemeProvider>
          <AppBar
            sx={{
              background: 'linear-gradient(to right, #0CBC8B, #289D7D);',
              px: 25.75,
            }}
          >
            <GlobalToaster />

            <Toolbar disableGutters>
              <Link href="/" passHref>
                <Button variant="text" color="secondary">
                  <Face sx={{ fontSize: 40, mr: 1.625 }} />
                  <Typography fontSize={20} fontWeight={500}>
                    Candidator
                  </Typography>
                </Button>
              </Link>
              <FlexBox fullWidth justifyEnd gap={7.75}>
                <FlexBox gap={3.625}>
                  <Link href="/" passHref>
                    <Button variant="text" color="secondary">
                      Découvrez des activités
                    </Button>
                  </Link>
                  <Link href="/locations" passHref>
                    <Button variant="text" color="secondary">
                      Explorer
                    </Button>
                  </Link>
                  {isLoggedIn ? (
                    <Link href="/user" passHref>
                      <Button variant="text" color="secondary">
                        Mes activités
                      </Button>
                    </Link>
                  ) : (
                    <></>
                  )}
                </FlexBox>
                <AuthActions />
              </FlexBox>
            </Toolbar>
          </AppBar>
          <FlexBox
            column
            start
            sx={{
              pt: `calc((${APP_BAR_HEIGHT} * 2))`,
              px: 25.75,
            }}
          >
            {children}
          </FlexBox>
        </MuiThemeProvider>
      )}
    </>
  )
}

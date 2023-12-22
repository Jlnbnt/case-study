import React, { FC, PropsWithChildren } from 'react'

import { CssBaseline } from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { componentsConfig } from '../options/components.option'
import { lightPaletteConfig } from '../options/palette.option'

export const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme({
    palette: lightPaletteConfig,
    components: componentsConfig,
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

import { ThemeOptions } from '@mui/material/styles'

import { APP_BAR_HEIGHT } from './constants.option'

export const componentsConfig: ThemeOptions['components'] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        height: APP_BAR_HEIGHT,
        position: 'fixed',
        justifyContent: 'center',
      },
    },
    defaultProps: {
      elevation: 0,
      position: 'fixed',
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
      },
    },
    defaultProps: {
      disableElevation: true,
      variant: 'contained',
    },
  },
}

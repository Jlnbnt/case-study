import { Box, BoxProps } from '@mui/material'

import { APP_BAR_HEIGHT } from '../../../styles/theme/options/constants.option'

interface FlexBoxProps extends BoxProps {
  spaced?: boolean
  column?: boolean
  centered?: boolean
  normal?: boolean
  start?: boolean
  end?: boolean
  justifyEnd?: boolean
  fullPage?: boolean
  fullWidth?: boolean
}
export const FlexBox = ({
  children,
  sx,
  spaced,
  centered,
  normal,
  column,
  start,
  end,
  justifyEnd,
  fullPage,
  fullWidth,
  ...props
}: FlexBoxProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: start
          ? 'flex-start'
          : end
          ? 'flex-end'
          : normal
          ? 'normal'
          : 'center',
        justifyContent: spaced
          ? 'space-between'
          : centered
          ? 'center'
          : justifyEnd
          ? 'flex-end'
          : 'normal',
        flexDirection: column ? 'column' : 'row',
        ...(fullPage && {
          height: `calc(100vh - ${APP_BAR_HEIGHT})`,
          width: '100%',
        }),
        ...(fullWidth && {
          width: '100%',
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

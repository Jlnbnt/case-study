import { Close } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

import toast, { ToastBar, Toaster } from 'react-hot-toast'

export const GlobalToaster = (): JSX.Element => {
  return (
    <Toaster
      toastOptions={{
        duration: 3000,
        loading: { duration: Infinity },
        style: {
          borderRadius: 5,
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              <Box component="span" sx={{ m: 1 }}>
                {icon}
              </Box>

              <Typography component="div">{message}</Typography>

              {t.type !== 'loading' && (
                <IconButton onClick={() => toast.dismiss(t.id)}>
                  <Close />
                </IconButton>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
}

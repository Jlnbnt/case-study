import Link from 'next/link'
import React from 'react'

import { ArrowBack } from '@mui/icons-material'
import { Alert, Box, Button, Typography } from '@mui/material'

export default function NotFoundPage(): JSX.Element {
  return (
    <Box>
      <Typography variant="h3">Page introuvable</Typography>
      <Alert severity="error" sx={{ my: 3 }}>
        Il semblerait que la page demandée n&apos;existe pas.
      </Alert>
      <Link href="/" passHref>
        <Button startIcon={<ArrowBack />}>Retour</Button>
      </Link>
    </Box>
  )
}

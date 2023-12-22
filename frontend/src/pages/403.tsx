import Link from 'next/link'
import React from 'react'

import { ArrowBack } from '@mui/icons-material'
import { Alert, Box, Button, Typography } from '@mui/material'

export default function UnauthorizedPage(): JSX.Element {
  return (
    <Box>
      <Typography variant="h3">Non autorisé</Typography>
      <Alert severity="error" sx={{ my: 3 }}>
        Vous devez être connecté pour acceder à cette page.
      </Alert>
      <Link href="/" passHref>
        <Button startIcon={<ArrowBack />}>Retour</Button>
      </Link>
    </Box>
  )
}

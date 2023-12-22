import { useEffect, useState } from 'react'

import { Alert, Grid, Typography } from '@mui/material'

import { LocationCard } from './components/LocationCard'

export interface Location {
  _id: string
  name: string
  description: string
  imageUrl: string
}

export const ListLocationsScreen = () => {
  const [locations, setLocations] = useState<Location[] | null>(null)

  const getLocations = async () => {
    const response = await fetch('http://localhost:3000/locations', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return
    }

    const data: Location[] = await response.json()
    setLocations(data)
  }

  useEffect(() => {
    ;(async () => await getLocations())()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!locations ? (
        <Alert sx={{ width: '100%' }} severity="error" color="error">
          Erreur lors du chargement des villes.
        </Alert>
      ) : locations.length === 0 ? (
        <Alert sx={{ width: '100%' }} severity="warning">
          Aucune ville trouvée.
        </Alert>
      ) : (
        <>
          <Typography variant="h6" sx={{ mb: 6 }}>
            Trouvez une activité dans votre ville
          </Typography>

          <Grid container spacing={6}>
            {locations.map((location) => (
              <Grid
                key={location._id}
                item
                xs={12}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <LocationCard location={location} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  )
}

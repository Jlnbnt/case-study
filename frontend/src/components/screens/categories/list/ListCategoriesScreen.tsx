import { useEffect, useState } from 'react'

import { Alert, Grid, Typography } from '@mui/material'

import { CategoryCard } from './components/CategoryCard'

export interface Category {
  _id: string
  name: string
  description: string
  imageUrl: string
}

export const ListCategoriesScreen = () => {
  const [categories, setCategories] = useState<Category[] | null>(null)

  const getCategories = async () => {
    const response = await fetch('http://localhost:3000/categories', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return
    }

    const data: Category[] = await response.json()
    setCategories(data)
  }

  useEffect(() => {
    ;(async () => await getCategories())()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!categories ? (
        <Alert sx={{ width: '100%' }} severity="error" color="error">
          Erreur lors du chargement des catégories.
        </Alert>
      ) : categories.length === 0 ? (
        <Alert sx={{ width: '100%' }} severity="warning">
          Aucune catégorie trouvée.
        </Alert>
      ) : (
        <>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Découvrez des activités
          </Typography>

          <Grid container spacing={6}>
            {categories.map((category) => (
              <Grid
                key={category._id}
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CategoryCard category={category} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  )
}

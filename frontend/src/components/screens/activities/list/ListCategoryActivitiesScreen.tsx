import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'
import useDebounce from '@/utils/useDebounce.util'

import { NavigateBefore } from '@mui/icons-material'
import { Alert, Button, Divider, IconButton, Typography } from '@mui/material'

import { translateCategory } from '../../categories/list/helpers/translate-category.helper'
import { Category } from '../../categories/list/ListCategoriesScreen'
import { CategoryFiltersBox } from '../details/category/components/ActivitiesFiltersBox'
import { ActivityRow } from '../details/shared/ActivityRow'

export interface Activity {
  _id: string
  category: Category
  city: string
  description: string
  imageUrl: string
  name: string
  price: number
}

interface ListCategoryActivitiesScreenProps {
  id: string
  categoryName: string
}
export const ListCategoryActivitiesScreen = ({
  id,
  categoryName,
}: ListCategoryActivitiesScreenProps) => {
  const [activities, setActivities] = useState<Activity[]>([])

  const [searchTerms, setSearchTerms] = useState('')
  const debouncedSearchTerms = useDebounce(searchTerms, 500)

  const [priceRange, setPriceRange] = useState('')

  const getActivities = async () => {
    const response = await fetch(
      `http://localhost:3000/activities/category/${id}?searchTerms=${searchTerms}&priceRange=${priceRange}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.ok) {
      return
    }

    const data: Activity[] = await response.json()
    setActivities(data)
  }

  const handleOnReset = () => {
    setPriceRange('')
    setSearchTerms('')
  }
  useEffect(() => {
    ;(async () => await getActivities())()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerms, priceRange])
  return (
    <>
      {!activities ? (
        <Alert severity="error" color="error">
          Erreur lors du chargement des activités.
        </Alert>
      ) : (
        <>
          <FlexBox column fullWidth start>
            <FlexBox sx={{ mb: 8.5 }}>
              <Link href="http://localhost:3200">
                <IconButton>
                  <NavigateBefore />
                </IconButton>
              </Link>
              <Typography sx={{ fontSize: 20, fontWeight: 600, ml: 1 }}>
                {translateCategory(categoryName)}
              </Typography>
            </FlexBox>

            <FlexBox spaced fullWidth start sx={{ gap: 11.25 }}>
              <CategoryFiltersBox
                setSearchTerms={setSearchTerms}
                options={[15, 30, 50]}
                searchTerms={searchTerms}
                setPriceRange={setPriceRange}
                priceRange={priceRange}
              />

              {activities.length === 0 ? (
                <Alert severity="warning" sx={{ flex: 1 }}>
                  Aucune activité trouvée.
                  <Button
                    variant="text"
                    color="warning"
                    onClick={handleOnReset}
                  >
                    Réinitialiser les filtres
                  </Button>
                </Alert>
              ) : (
                <FlexBox column start sx={{ flex: 1, gap: 6.5 }}>
                  {activities.map((activity) => (
                    <>
                      <ActivityRow activity={activity} key={activity._id} />

                      <Divider
                        sx={{
                          height: 2,
                          background: '#ADADAD',
                          width: '100%',
                        }}
                      />
                    </>
                  ))}
                </FlexBox>
              )}
            </FlexBox>
          </FlexBox>
        </>
      )}
    </>
  )
}

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'

import { NavigateBefore } from '@mui/icons-material'
import { Alert, Button, IconButton, Typography } from '@mui/material'

import { Activity } from './ListCategoryActivitiesScreen'
import { LocationFiltersBox } from '../details/location/components/LocationFiltersBox'
import { ActivityRow } from '../details/shared/ActivityRow'

export interface CategoryAutocomplete {
  _id: string
  name: string
}
interface ListLocationActivitiesScreenProps {
  id: string
  locationName: string
}
export const ListLocationActivitiesScreen = ({
  id,
  locationName,
}: ListLocationActivitiesScreenProps) => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [activityOptions, setActivityOptions] = useState<
    CategoryAutocomplete[]
  >([])

  const [priceRange, setPriceRange] = useState('')
  const [activityName, setActivityName] = useState<{
    _id: string
    name: string
  }>({ _id: '', name: '' })

  const getActivities = async () => {
    const response = await fetch(
      `http://localhost:3000/activities/location/${id}?activityName=${activityName._id}&priceRange=${priceRange}`,
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

  const getActivityAutocomplete = async () => {
    const response = await fetch(
      `http://localhost:3000/categories/autocomplete`,
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

    const data: { _id: string; name: string }[] = await response.json()

    setActivityOptions(data)
  }

  const handleOnReset = () => {
    setPriceRange('')
    setActivityName({ _id: '', name: '' })
  }

  useEffect(() => {
    ;(async () => await getActivityAutocomplete())()
  }, [])

  useEffect(() => {
    ;(async () => await getActivities())()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activityName, priceRange])

  return (
    <>
      {!activities ? (
        <Alert severity="error" color="error">
          Erreur lors du chargement des villes.
        </Alert>
      ) : (
        <>
          <FlexBox column fullWidth start>
            <FlexBox sx={{ mb: 8.5 }}>
              <Link href="http://localhost:3200/locations">
                <IconButton>
                  <NavigateBefore />
                </IconButton>
              </Link>
              <Typography sx={{ fontSize: 20, fontWeight: 600, ml: 1 }}>
                {locationName}
              </Typography>
            </FlexBox>

            <FlexBox spaced fullWidth start sx={{ gap: 11.25 }}>
              <LocationFiltersBox
                priceRangeOptions={[15, 30, 50]}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                setActivityName={setActivityName}
                activityName={activityName}
                activityOptions={activityOptions}
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
                    <ActivityRow activity={activity} key={activity._id} />
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

import { useEffect, useState } from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'
import { useAppSelector } from '@/redux/useRedux.hook'
import { colors } from '@/styles/theme/options/colors.option'

import { AddCircleOutline, SportsHandball } from '@mui/icons-material'
import { Alert, Button, Divider, Typography } from '@mui/material'

import { CreateActivityDialog } from './components/CreateActivityDialog'
import { ActivityRow } from '../activities/details/shared/ActivityRow'
import { Activity } from '../activities/list/ListCategoryActivitiesScreen'

export const ListUserActivities = () => {
  const { user } = useAppSelector((state) => state.auth)

  const [isCreateActivityDialogOpen, setIsCreateActivityDialogOpen] =
    useState(false)

  const [userActivities, setUserActivities] = useState<Activity[] | null>(null)
  const [mutate, setMutate] = useState(false)

  const handleOnOpenDialog = () => {
    setIsCreateActivityDialogOpen(true)
  }

  const getActivities = async () => {
    const response = await fetch(
      user ? `http://localhost:3000/activities/user/${user.id}` : '',
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

    setMutate(false)
    setUserActivities(data)
  }

  useEffect(() => {
    ;(async () => await getActivities())()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutate === true])
  return (
    <>
      <Typography variant="h6" sx={{ mb: 12 }}>
        Mes activités
      </Typography>

      {!userActivities ? (
        <Alert sx={{ width: '100%' }} severity="error" color="error">
          Erreur lors du chargement des activités.
        </Alert>
      ) : userActivities.length === 0 ? (
        <FlexBox column fullPage sx={{ gap: 4 }}>
          <SportsHandball
            sx={{ fontSize: 300, color: '#1B1B1D', opacity: '25%' }}
          />
          <Typography variant="h6" sx={{ color: '#1B1B1D', opacity: '25%' }}>
            Vous n’avez pas encore créé d’activité
          </Typography>
          <Button
            startIcon={<AddCircleOutline />}
            sx={{
              color: colors.white,
              width: 200,
              height: 47,
              background: '#0CBC8B',
            }}
            onClick={handleOnOpenDialog}
          >
            Créer une activité
          </Button>
        </FlexBox>
      ) : (
        <FlexBox spaced fullWidth start sx={{ gap: 11.25, mb: 12 }}>
          {userActivities.map((activity) => (
            <>
              <ActivityRow key={activity._id} activity={activity} />

              <Divider
                sx={{
                  height: 2,
                  background: '#ADADAD',
                  width: '100%',
                }}
              />
            </>
          ))}
          <Button
            startIcon={<AddCircleOutline />}
            sx={{
              color: colors.white,
              width: 200,
              height: 47,
              background: '#0CBC8B',
            }}
            onClick={handleOnOpenDialog}
          >
            Créer une activité
          </Button>
        </FlexBox>
      )}

      <CreateActivityDialog
        setMutate={setMutate}
        open={isCreateActivityDialogOpen}
        setOpen={setIsCreateActivityDialogOpen}
      />
    </>
  )
}

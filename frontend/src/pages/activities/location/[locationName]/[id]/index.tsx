import { useRouter } from 'next/router'

import { ListLocationActivitiesScreen } from '@/components/screens/activities/list/ListLocationActivitiesScreen'
import { FullPageLoader } from '@/components/shared/loaders/FullPageLoader'

export default function ActivitiesIndexPage() {
  const router = useRouter()
  const id = router.query.id as string
  const locationName = router.query.locationName as string

  return (
    <>
      {id && locationName ? (
        <ListLocationActivitiesScreen locationName={locationName} id={id} />
      ) : (
        <FullPageLoader />
      )}
    </>
  )
}

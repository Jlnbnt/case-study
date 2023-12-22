import { useRouter } from 'next/router'

import { ListCategoryActivitiesScreen } from '@/components/screens/activities/list/ListCategoryActivitiesScreen'
import { FullPageLoader } from '@/components/shared/loaders/FullPageLoader'

export default function ActivitiesIndexPage() {
  const router = useRouter()
  const id = router.query.id as string
  const categoryName = router.query.categoryName as string

  return (
    <>
      {id && categoryName ? (
        <ListCategoryActivitiesScreen categoryName={categoryName} id={id} />
      ) : (
        <FullPageLoader />
      )}
    </>
  )
}

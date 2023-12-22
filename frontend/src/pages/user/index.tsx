import { AuthenticatedGuard } from '@/components/auth/guards/AuthenticatedGuard'
import { ListUserActivities } from '@/components/screens/user/ListUserActivities'

export default function IndexPage() {
  return (
    <AuthenticatedGuard>
      <ListUserActivities />
    </AuthenticatedGuard>
  )
}

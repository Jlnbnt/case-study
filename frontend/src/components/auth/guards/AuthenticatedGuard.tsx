import { ReactNode } from 'react'

import UnauthorizedPage from '@/pages/403'
import { useAppSelector } from '@/redux/useRedux.hook'

interface AuthenticatedGuardProps {
  children: ReactNode
}

export const AuthenticatedGuard = ({ children }: AuthenticatedGuardProps) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  return <>{isLoggedIn ? <>{children}</> : <UnauthorizedPage />}</>
}

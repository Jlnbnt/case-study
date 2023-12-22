export interface UserDetails {
  id: string
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
}

export interface UserRegisterRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  avatarUrl: string
}

export type UserLoginRequest = {
  email: string
  password: string
}

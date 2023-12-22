import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
}

interface AuthState {
  isLoggedIn: boolean
  isLoading: boolean
  user: null | User
  token: string | null
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: true,
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{
        token: string
        user: User
      }>,
    ) => {
      window.localStorage.setItem('token', action.payload.token)

      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      }
    },
    logOut: (state) => {
      window.localStorage.removeItem('token')
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: null,
      }
    },
    stopLoading: (state) => {
      return {
        ...state,
        isLoading: false,
      }
    },
  },
})

export const { logIn, logOut, stopLoading } = authSlice.actions

export default authSlice.reducer

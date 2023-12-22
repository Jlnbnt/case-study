import Toast from 'react-hot-toast'

import { HttpError } from './parse-body.util'

export const errorToast = ({ error, statusCode }: HttpError) => {
  return Toast.error(`${error} : ${statusCode}`, {
    id: String(error),
  })
}

export const successToast = (message: string) => {
  return Toast.success(message, {
    id: String(message),
  })
}

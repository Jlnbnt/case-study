import { TextField, TextFieldProps } from '@mui/material'

import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  TextFieldProps
export function ControlledTextField<T extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  ...props
}: ControlledTextFieldProps<T>) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  })
  const message = fieldState.error?.message
  return (
    <TextField
      {...field}
      error={Boolean(message)}
      helperText={message}
      fullWidth
      {...props}
    />
  )
}

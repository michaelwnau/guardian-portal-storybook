import { InputBaseProps, TextField, TextFieldProps, TextFieldVariants } from '@mui/material'
import React from 'react'
import { Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

export interface TextFormFieldProps {
  name: string
  label?: string
  variant?: TextFieldVariants
  type?: string
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<any>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  errorMessage?: string
  fullWidth?: boolean
  inputProps?: InputBaseProps['inputProps']
  InputProps?: TextFieldProps['InputProps']
  onChange?: (event: any) => void
  transformDisplayValue?: (value: string) => string
}

const TextFormField: React.FC<TextFormFieldProps> = ({
  name,
  label,
  variant,
  type,
  rules,
  errorMessage,
  onChange,
  inputProps,
  InputProps,
  transformDisplayValue,
  ...props
}: TextFormFieldProps) => {
  return (
    <>
      <Controller
        name={name}
        rules={rules}
        defaultValue={''}
        render={({
          field: { onBlur, onChange: reactHookFormOnChange, ref, ...field },
          fieldState: { invalid, error },
        }) => (
          <TextField
            name={field.name}
            inputRef={ref}
            variant={variant ? variant : 'outlined'}
            label={label}
            type={type}
            error={invalid}
            helperText={error ? error.message || errorMessage : ''}
            onChange={(ev) => {
              const {
                target: { value },
              } = ev

              reactHookFormOnChange(value)
              if (onChange) {
                onChange(value)
              }
            }}
            onBlur={onBlur}
            value={transformDisplayValue ? transformDisplayValue(field.value) : field.value || ''}
            inputProps={inputProps}
            InputProps={InputProps}
            {...props}
          />
        )}
      />
    </>
  )
}

export default TextFormField

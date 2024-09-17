import React from 'react'
import { Switch } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { PersonnelData } from '@/types'

export interface SwitchFormFieldProps {
  name: keyof PersonnelData
}

const SwitchFormField: React.FC<SwitchFormFieldProps> = ({ name }: SwitchFormFieldProps) => {
  const { setValue } = useFormContext<PersonnelData>()

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Switch
          {...field}
          checked={field.value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.checked
            field.onChange(newValue)
            setValue(name, newValue, { shouldValidate: true })
          }}
          inputProps={{
            'aria-labelledby': `${name}-label`,
          }}
        />
      )}
    />
  )
}

export default SwitchFormField

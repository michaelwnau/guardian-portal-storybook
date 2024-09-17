'use client'

import React from 'react'
import { IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { signIn } from 'next-auth/react'

const ProfileButton: React.FC = () => {
  return (
    <IconButton onClick={async () => await signIn('keycloak', { callbackUrl: '/profile' })}>
      <AccountCircleIcon />
    </IconButton>
  )
}

export default ProfileButton

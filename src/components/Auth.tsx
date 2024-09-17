'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Auth({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated' || (status === 'authenticated' && session?.error === 'RefreshAccessTokenError')) {
      router.push('/')
    }
  }, [status, session, router])

  if (status === 'loading') {
    return <div>Loading...</div> // Or your custom loading component
  }

  if (status === 'authenticated' && !session?.error) {
    return <>{children}</>
  }

  return null
}

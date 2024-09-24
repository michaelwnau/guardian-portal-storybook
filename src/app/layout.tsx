'use client'

import { Libre_Franklin } from 'next/font/google'
import ThemeProvider from '../theme/ThemeProvider'
import './globals.css'
import '@fontsource/roboto' // Defaults to weight 400
import '@fontsource/roboto/400.css' // Weight 400 with normal style
import '@fontsource/roboto/700.css' // Weight 700 with normal style

import '@fontsource/ibm-plex-mono' // Defaults to weight 400
import '@fontsource/ibm-plex-mono/400.css' // Weight 400 with normal style
import '@fontsource/ibm-plex-mono/700.css' // Weight 700 with normal style

import '@fontsource/libre-franklin/300.css'
import '@fontsource/libre-franklin/400.css'
import '@fontsource/libre-franklin/500.css'
import '@fontsource/libre-franklin/700.css'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import MetadataComponent from '@/components/Metadata'

const libreFranklin = Libre_Franklin({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <MetadataComponent />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/favicon/csite.webmanifest' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <title>Guardian One</title>
      </head>
      <body className={libreFranklin.className} style={{ background: 'black' }}>
        <ThemeProvider>
          <SessionProvider>
            <div className='content'>{children}</div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

// Metadata.tsx
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Guardian One',
  description: 'Guardian One',
  applicationName: 'Guardian One',
  keywords: 'guardian, one, your, keywords',
  authors: [{ name: 'Your Name' }],
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}

export default function MetadataComponent() {
  return null
}

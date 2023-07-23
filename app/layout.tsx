'use-client'

import StyledComponentsRegistry from './registry'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography',
  description: 'View Your Photos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body suppressHydrationWarning={true} >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

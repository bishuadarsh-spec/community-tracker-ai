import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { manrope } from './fonts'

export const metadata: Metadata = {
  title: 'CommunityTracker.ai - Empowering Communities with AI',
  description: 'Created with v0',
  generator: 'Next.js',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

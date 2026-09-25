import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arial Consulting Firm - Enterprise IT Solutions',
  description: 'Systems Admin, DevOps, DevSecOps, Notary, AI Integration, and AI Security services',
  keywords: ['DevOps', 'DevSecOps', 'Systems Admin', 'AI Security', 'Notary', 'Enterprise IT'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

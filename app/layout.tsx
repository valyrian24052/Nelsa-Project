import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nelsa LLP',
  description: 'Nelsa Projects LLP Page',
  generator: 'v',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

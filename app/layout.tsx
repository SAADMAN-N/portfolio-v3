import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Sharfuzzaman",
  description: 'Portfolio website of Sharfuzzaman Noor Sadman - Software Developer',
  icons: {
    icon: './IMG_0034-Background-Removed.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  openGraph: {
    title: "Sharfuzzaman",
    description: 'Portfolio website of Sharfuzzaman Noor Sadman - Software Developer',
    url: 'https://sharfuzzaman.com',
    siteName: "Sharf's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
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
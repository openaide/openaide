import React from 'react'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { FooterText } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  metadataBase: process.env.HOME_URL
    ? new URL(`//${process.env.HOME_URL}`)
    : undefined,
  title: {
    default: 'AI Tools',
    template: `%s - AI Tools`
  },
  description: 'Open Source AI tools.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* <main className="flex flex-col flex-1 bg-muted/50">{children}</main> */}
            {children}
            <FooterText className="py-8" />
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}

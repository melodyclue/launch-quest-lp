import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CSPostHogProvider } from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'LaunchQuest',
  description: 'LaunchQuest is a platform for launching products.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-zinc-900 grid grid-rows-[auto_1fr] min-h-screen`}
        >
          {/* <Header /> */}
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  )
}

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-zinc-100 shadow-sm">
        LaunchQuest
      </h1>
    </header>
  )
}

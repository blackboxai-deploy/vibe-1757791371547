import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello World - Simple Next.js App',
  description: 'A simple and modern Hello World application built with Next.js and Tailwind CSS',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Hello World'],
  authors: [{ name: 'Next.js Developer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased bg-gradient-to-br from-red-50 via-white to-rose-50 min-h-screen">
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
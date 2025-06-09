import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucas Tavares - Desenvolvedor',
  description: 'Portfólio de Lucas Tavares, desenvolvedor especializado em aplicações multiplataformas modernas, com foco em performance e design.',
  generator: 'Next.js + TypeScript',
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

'use client'

import './globals.css'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Shubham Kumar — Developer</title>
        <meta name="description" content="Full-Stack Developer & CS Engineering Student" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

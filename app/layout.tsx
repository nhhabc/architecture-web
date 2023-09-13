// import './globals.css'
"use client";
import baseTheme from '@/chakra-ui/theme'
import Navbar from '@/components/layout/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={baseTheme}>
          <Navbar/>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
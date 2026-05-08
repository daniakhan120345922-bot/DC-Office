import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DC Office Portal - Online Services Desk',
  description: 'Official portal for DC Office services including Dastak App, Domicile Certificates, Driving Licenses, and Citizen Facilitation Centers.',
  keywords: 'DC Office, Dastak App, Domicile Certificate, Driving License, Citizen Facilitation Center, Government Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

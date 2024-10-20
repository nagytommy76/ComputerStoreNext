import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

// Components
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
   title: 'Computer Store | Főoldal',
   description: 'Reworked version of my React based ComputerStoreMERN project with Next.js (app router)',
   authors: {
      name: 'Tamás Nagy',
      url: 'https://github.com/nagytommy76',
   },
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='hu'>
         <body>
            <Providers>
               <Navbar />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   )
}

import type { Metadata } from 'next'

// REDUX
import StoreProvider from '@/utils/redux/StoreProvider'
// THEME
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { GlobalThemeProvider } from '@/Theme/themeProvider'
import './globals.css'

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
            <AppRouterCacheProvider>
               <StoreProvider>
                  <GlobalThemeProvider>
                     <Navbar />
                     {children}
                     <Footer />
                  </GlobalThemeProvider>
               </StoreProvider>
            </AppRouterCacheProvider>
         </body>
      </html>
   )
}

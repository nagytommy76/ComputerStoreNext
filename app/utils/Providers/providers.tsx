'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import getQueryClient from './queryClient'

// REDUX
import StoreProvider from '@/reduxStore/StoreProvider'
// THEME
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { GlobalThemeProvider } from '@/Theme/themeProvider'

export default function Providers({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   // NOTE: Avoid useState when initializing the query client if you don't
   //       have a suspense boundary between this and the code that may
   //       suspend because React will throw away the client on the initial
   //       render if it suspends and there is no boundary
   const queryClient = getQueryClient()

   return (
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />
         <AppRouterCacheProvider>
            <StoreProvider>
               <GlobalThemeProvider>{children}</GlobalThemeProvider>
            </StoreProvider>
         </AppRouterCacheProvider>
      </QueryClientProvider>
   )
}

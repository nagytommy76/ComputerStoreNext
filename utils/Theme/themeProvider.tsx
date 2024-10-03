'use client'
import { ThemeProvider } from '@mui/material/styles'
import { Global, css } from '@emotion/react'
import { darkTheme /*, lightTheme */ } from './theme'
import { useAppSelector } from '@/reduxStore/hooks'

const lightGlobalTheme = {
   main: '#EEE',
   scrollbarThumbColor: '#717171',
   scrollbarThumbColorHover: '#BBB9B9',
}

const darkGlobalTheme = {
   main: '#18191a',
   scrollbarThumbColor: '#BBB9B9',
   scrollbarThumbColorHover: '#717171',
}

const globalStyleBase = (
   mainColor: string,
   scrollbarThumbColor: string,
   scrollbarThumbColorHover: string
) => {
   return {
      body: {
         backgroundColor: mainColor,
         fontFamily: 'Work Sans, sans-serif',
      },
      '&::-webkit-scrollbar': {
         width: '9px',
         transition: 'all .2s ease',
         ['@media (max-width: 768px)']: {
            width: '1px',
         },
      },
      '&::-webkit-scrollbar-track': {
         background: mainColor,
      },
      '&::-webkit-scrollbar-thumb': {
         bordeRadius: '5px',
         background: scrollbarThumbColor,
      },
      '&::-webkit-scrollbar-thumb:hover': {
         background: scrollbarThumbColorHover,
      },
   }
}
// // egyelőre any, megoldani!
const darkGlobalStyles = css(
   globalStyleBase(
      darkGlobalTheme.main,
      darkGlobalTheme.scrollbarThumbColor,
      darkGlobalTheme.scrollbarThumbColorHover
   )
)

const lgihtGlobalStyles = css(
   globalStyleBase(
      lightGlobalTheme.main,
      lightGlobalTheme.scrollbarThumbColor,
      lightGlobalTheme.scrollbarThumbColorHover
   )
)

export const GlobalThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <>
         <ThemeProvider theme={darkTheme}>
            <Global styles={isDarkTheme ? darkGlobalStyles : lgihtGlobalStyles} />
            {children}
         </ThemeProvider>
      </>
   )
}

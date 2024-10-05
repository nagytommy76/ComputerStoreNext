'use client'
import React from 'react'
import Image from 'next/image'
import { setTheme } from '@/reduxStore/slices/ThemeSlice'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks'

import { StyledToggle } from './ToggleContainer'
import Moon from './icons/moon.svg'
import Sun from './icons/sun.svg'

const Toggle: React.FC = () => {
   const dispatch = useAppDispatch()
   const currentTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const toggleTheme = () => {
      dispatch(setTheme(!currentTheme))
   }

   return (
      <StyledToggle
         lightTheme={currentTheme}
         backgroundImage={
            currentTheme
               ? 'linear-gradient(to right, #091236, #1E215D)'
               : 'linear-gradient(to left, #39598A, #79D7ED)'
         }
         borderColor={currentTheme ? '#747c94' : '#FFF'}
         onClick={toggleTheme}
      >
         <Image src={Moon} alt='moon' width={20} height={20} />
         <Image src={Sun} alt='sun' width={20} height={20} />
      </StyledToggle>
   )
}

export default Toggle

import React, { RefObject } from 'react'

import Slide from '@mui/material/Slide'
import { CartSlideContainer } from './Styles'

export default function CartSlide({
   isOpen = false,
   containerRef,
}: {
   isOpen: boolean
   containerRef: RefObject<HTMLElement>
}) {
   return (
      <Slide direction='left' in={isOpen} container={containerRef.current}>
         <CartSlideContainer>
            <h1>slide</h1>
         </CartSlideContainer>
      </Slide>
   )
}

'use client'
import { useState } from 'react'

import CartButton from './CartButton/CartButton'
import CartSlide from './CartSlide/CartSlide'

import Drawer from '@mui/material/Drawer'

export default function Cart({ children }: { children: React.ReactNode }) {
   const [isOpen, setIsOpen] = useState(false)

   const toggleDrawer = (newOpen: boolean) => () => {
      setIsOpen(newOpen)
   }

   return (
      <>
         <CartButton handleOpen={toggleDrawer} />
         <Drawer
            SlideProps={{ mountOnEnter: true, unmountOnExit: true }}
            anchor='right'
            open={isOpen}
            onClose={toggleDrawer(false)}
         >
            <CartSlide toggleDrawer={toggleDrawer}>{children}</CartSlide>
         </Drawer>
      </>
   )
}

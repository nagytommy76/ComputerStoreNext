'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { SessionProvider } from 'next-auth/react'

import CartSlide from './CartSlide/CartSlide'
import CheckoutBtn from './CartSlide/CheckoutBtn/CheckoutBtn'
const CartButton = dynamic(() => import('./CartButton/CartButton'), { ssr: false })

import Drawer from '@mui/material/Drawer'

export default function Cart() {
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
            <CartSlide toggleDrawer={toggleDrawer}>
               <SessionProvider>
                  <CheckoutBtn />
               </SessionProvider>
            </CartSlide>
         </Drawer>
      </>
   )
}

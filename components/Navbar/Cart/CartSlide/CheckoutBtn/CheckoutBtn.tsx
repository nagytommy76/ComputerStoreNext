'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { useAppSelector } from '@/reduxStore/hooks'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import TooltipContent from './TooltipContent'
import type { Dispatch, SetStateAction } from 'react'

export default function CheckoutBtn({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
   const { data: session } = useSession()
   const cartItemsLength = useAppSelector((state) => state.cart.cartItems.length)

   if (!session)
      return (
         <Tooltip title={<TooltipContent />} placement='top' arrow>
            <div>
               <Button
                  fullWidth
                  disabled={true}
                  variant='contained'
                  color='info'
                  endIcon={<KeyboardDoubleArrowRightIcon />}
               >
                  Tovább a megrendeléshez
               </Button>
            </div>
         </Tooltip>
      )

   if (session && cartItemsLength === 0) return null
   return (
      <Link href={'/checkout'} aria-label='Tovább a megrendeléshez'>
         <Button
            fullWidth
            disabled={cartItemsLength === 0}
            onClick={() => setIsOpen(false)}
            variant='contained'
            color='info'
            endIcon={<KeyboardDoubleArrowRightIcon />}
         >
            Tovább a megrendeléshez
         </Button>
      </Link>
   )
}

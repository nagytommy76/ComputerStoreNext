'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import TooltipContent from './TooltipContent'
import type { Dispatch, SetStateAction } from 'react'

export default function CheckoutBtn({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
   const { data: session } = useSession()

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

   return (
      <Link href={'/checkout'} aria-label='Tovább a megrendeléshez'>
         <Button
            fullWidth
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

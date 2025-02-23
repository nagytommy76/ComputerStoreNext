'use client'
import { useSession } from 'next-auth/react'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import TooltipContent from './TooltipContent'

export default function CheckoutBtn() {
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
      <Button fullWidth variant='contained' color='info' endIcon={<KeyboardDoubleArrowRightIcon />}>
         Tovább a megrendeléshez
      </Button>
   )
}

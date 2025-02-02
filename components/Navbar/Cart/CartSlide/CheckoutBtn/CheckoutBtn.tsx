'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

export default function CheckoutBtn() {
   const { data } = useSession()
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   useEffect(() => {
      setIsLoggedIn(data !== null)
      console.log(data !== null)
      console.log(data)
   }, [data])

   return (
      <Tooltip title={!isLoggedIn ? 'Kérlek jelentkezz be a tovább lépéshez!' : ''} placement='top' arrow>
         <span>
            <Button
               fullWidth
               disabled={!isLoggedIn}
               variant='contained'
               color='info'
               endIcon={<KeyboardDoubleArrowRightIcon />}
            >
               Tovább a megrendeléshez
            </Button>
         </span>
      </Tooltip>
   )
}

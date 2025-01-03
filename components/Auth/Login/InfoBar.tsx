'use client'
import { useState, useEffect } from 'react'

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function InfoBar({
   emailError,
   passwordError,
}: {
   emailError: string | string[] | undefined
   passwordError: string | string[] | undefined
}) {
   const [open, setOpen] = useState(false)

   useEffect(() => {
      if (emailError || passwordError) setOpen(true)
   }, [emailError, passwordError])

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
         return
      }

      setOpen(false)
   }

   return (
      <Snackbar
         open={open}
         autoHideDuration={10000}
         onClose={handleClose}
         message={`
         Jelszó: ${passwordError || ''}
         Email: ${emailError || ''}
      `}
      >
         <Alert onClose={handleClose} severity='warning' variant='filled' sx={{ width: '100%' }}>
            {`
         Jelszó: ${passwordError || ''}
         Email: ${emailError || ''}
      `}
         </Alert>
      </Snackbar>
   )
}

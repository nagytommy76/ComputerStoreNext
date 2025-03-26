import { useState } from 'react'

export default function useSnackbar() {
   const [snackbar, setSnackbar] = useState<{
      open: boolean
      message: string
      variant: 'error' | 'info' | 'success' | 'warning'
   }>({
      open: false,
      message: '',
      variant: 'success',
   })
   function closeSnackbar() {
      setSnackbar({ open: false, message: '', variant: 'success' })
   }

   return { snackbar, setSnackbar, closeSnackbar }
}

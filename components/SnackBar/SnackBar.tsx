import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function SnackBar({
   message,
   setSnackbarOpen,
   snackbarOpen,
   severity = 'success',
}: {
   message: string
   snackbarOpen: boolean
   setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>
   severity?: 'error' | 'info' | 'success' | 'warning'
}) {
   const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
         return
      }
      setSnackbarOpen(false)
   }

   return (
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity={severity} variant='outlined' sx={{ width: '100%' }}>
            {message}
         </Alert>
      </Snackbar>
   )
}

import Alert from '@mui/material/Alert'
import Grow from '@mui/material/Grow'

export default function AlertPopup({ isError, errorMsg }: { isError: boolean; errorMsg: string }) {
   return (
      <Grow in={isError}>
         <Alert severity='error'>{errorMsg}</Alert>
      </Grow>
   )
}

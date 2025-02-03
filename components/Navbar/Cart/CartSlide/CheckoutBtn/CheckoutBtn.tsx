import { auth } from '@NextAuth'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

const TooltipContent = () => {
   return (
      <>
         <Typography gutterBottom variant='caption' textAlign='center'>
            Kérlek jelentkezz be a tovább lépéshez!
         </Typography>
         <Button fullWidth variant='text' color='primary'>
            Vagy regisztrálj!
         </Button>
      </>
   )
}

export default async function CheckoutBtn() {
   const session = await auth()
   if (!session)
      return (
         <Tooltip title={<TooltipContent />} placement='top' arrow>
            <span>
               <Button
                  fullWidth
                  disabled={true}
                  variant='contained'
                  color='info'
                  endIcon={<KeyboardDoubleArrowRightIcon />}
               >
                  Tovább a megrendeléshez
               </Button>
            </span>
         </Tooltip>
      )

   return (
      <Button fullWidth variant='contained' color='info' endIcon={<KeyboardDoubleArrowRightIcon />}>
         Tovább a megrendeléshez
      </Button>
   )
}

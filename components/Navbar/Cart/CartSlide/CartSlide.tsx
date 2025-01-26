import { CartSlideContainer, CartBodySection } from './Styles'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'

import CartCard from '../CartCard/CartCard'
export default function CartSlide({ toggleDrawer }: { toggleDrawer: (newOpen: boolean) => () => void }) {
   return (
      <CartSlideContainer role='presentation'>
         <IconButton
            sx={{ position: 'absolute', top: 0, right: 0 }}
            size='large'
            color='warning'
            onClick={toggleDrawer(false)}
         >
            <CloseIcon fontSize='inherit' />
         </IconButton>
         <Typography variant='h4' align='center'>
            Kosár
         </Typography>
         <CartBodySection>
            <CartCard />
         </CartBodySection>
      </CartSlideContainer>
   )
}

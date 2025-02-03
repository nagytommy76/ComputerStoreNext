'use client'
import { useAppSelector } from '@/reduxStore/hooks'

import { CartSlideContainer, CartBodySection, CartFooterSection } from './Styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import CloseIcon from '@mui/icons-material/Close'
import CartCard from '../CartCard/CartCard'

export default function CartSlide({
   toggleDrawer,
   children,
}: {
   toggleDrawer: (newOpen: boolean) => () => void
   children: React.ReactNode
}) {
   const { cartItems, totalPrice } = useAppSelector((state) => state.cart)

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
         <Typography variant='h4' align='center' marginBottom={'2rem'}>
            Kosár
         </Typography>
         <CartBodySection>
            {cartItems.map((singleCartItem) => (
               <CartCard singleCartItem={singleCartItem} key={singleCartItem.itemId} />
            ))}
         </CartBodySection>
         <CartFooterSection>
            <Typography variant='h6' align='left' marginBottom={'2rem'}>
               Összesen: {totalPrice.toLocaleString()} Ft
            </Typography>
            {children}
         </CartFooterSection>
      </CartSlideContainer>
   )
}

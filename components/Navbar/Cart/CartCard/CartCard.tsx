import Image from 'next/image'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { CartCardStyle, CardActionsStyle } from './Styles'
import type { CartItemsType } from '@/types/userTypes'

import QuantitySelector from './QuantitySelector/QuantitySelector'
import DeleteButton from './DeleteBtn/DeleteButton'

export default function CartCard({ singleCartItem }: { singleCartItem: CartItemsType }) {
   return (
      <CartCardStyle elevation={0}>
         <DeleteButton itemId={singleCartItem.itemId} />
         <Image src={singleCartItem.displayImage} alt={singleCartItem.displayName} width={150} height={150} />
         <CardContent sx={{}}>
            <Typography gutterBottom variant='body2'>
               {singleCartItem.displayName}
            </Typography>
            <CardActionsStyle>
               <QuantitySelector id={singleCartItem.itemId} quaintity={singleCartItem.quantity} />
               <Typography gutterBottom variant='caption'>
                  {(singleCartItem.price * singleCartItem.quantity).toLocaleString()} Ft
               </Typography>
            </CardActionsStyle>
         </CardContent>
      </CartCardStyle>
   )
}

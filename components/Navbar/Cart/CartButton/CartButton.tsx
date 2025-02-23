import { useAppSelector } from '@/reduxStore/hooks'

import { StyledIconCartButton, StyledCartIcon } from './Styles'
import Badge from '@mui/material/Badge'

export default function CartButton({ handleOpen }: { handleOpen: (newOpen: boolean) => () => void }) {
   const totalCartQty = useAppSelector((state) => state.cart.totalQuantity)
   return (
      <StyledIconCartButton onClick={handleOpen(true)} disableTouchRipple>
         <Badge badgeContent={totalCartQty} color='error'>
            <StyledCartIcon />
         </Badge>
      </StyledIconCartButton>
   )
}

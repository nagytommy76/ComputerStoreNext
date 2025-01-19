import { StyledIconCartButton } from './Styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function CartButton() {
   return (
      <StyledIconCartButton disableTouchRipple size='large'>
         <ShoppingCartIcon fontSize='inherit' />
      </StyledIconCartButton>
   )
}

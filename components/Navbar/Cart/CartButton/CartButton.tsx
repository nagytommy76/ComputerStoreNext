import { StyledIconCartButton } from './Styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function CartButton({ handleOpen }: { handleOpen: () => void }) {
   return (
      <StyledIconCartButton onClick={handleOpen} disableTouchRipple size='large'>
         <ShoppingCartIcon fontSize='inherit' />
      </StyledIconCartButton>
   )
}

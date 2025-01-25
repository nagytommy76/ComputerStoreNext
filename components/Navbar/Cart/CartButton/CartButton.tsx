import { StyledIconCartButton, StyledCartIcon } from './Styles'

export default function CartButton({ handleOpen }: { handleOpen: () => void }) {
   return (
      <StyledIconCartButton onClick={handleOpen} disableTouchRipple>
         <StyledCartIcon />
      </StyledIconCartButton>
   )
}

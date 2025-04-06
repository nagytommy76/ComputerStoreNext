import { useAppSelector } from '@/reduxStore/hooks'

import { FooterSection, PriceSection } from '../Styles'

export default function PriceFooter() {
   const totalPrice = useAppSelector((state) => state.cart.totalPrice)
   return (
      <FooterSection>
         <PriceSection variant='h6' color='primary'>
            Összesen: {totalPrice.toLocaleString()} Ft
         </PriceSection>
      </FooterSection>
   )
}

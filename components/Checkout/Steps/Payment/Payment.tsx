import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { StyledPaper, Container } from '../Style'

export default function Payment() {
   const {
      checkoutReducer: { paymentMethod },
      checkoutDispatch,
   } = useContext(CheckoutContext)

   function setPaymentMethod(method: 'cashOnDelivery' | 'card') {
      checkoutDispatch({ type: 'SET_PAYMENT_METHOD', payload: method })
   }

   return (
      <Container>
         <FormControl component='fieldset' sx={{ width: '85%' }}>
            <FormLabel component='legend' sx={{ marginBottom: '.4rem' }}>
               Fizetési mód megadása
            </FormLabel>
            <RadioGroup
               aria-label='paymentOptions'
               defaultValue='cashOnDelivery'
               name='paymentRadioGroup'
               value={paymentMethod}
               onChange={(event) => setPaymentMethod(event.target.value as 'cashOnDelivery' | 'card')}
            >
               <StyledPaper>
                  <FormControlLabel
                     value='cashOnDelivery'
                     control={<Radio />}
                     label='Fizetés utánvéttel (390 Ft)'
                  />
               </StyledPaper>
               <StyledPaper>
                  <FormControlLabel
                     value='card'
                     control={<Radio />}
                     label='Fizetés bankkártyával (ingyenes)'
                  />
               </StyledPaper>
            </RadioGroup>
         </FormControl>
      </Container>
   )
}

import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { StyledPaper, PickUpContainer } from './Style'

export default function PickUp() {
   const {
      checkoutReducer: { pickUpOption },
      checkoutDispatch,
   } = useContext(CheckoutContext)

   const setPickUp = (option: 'inStore' | 'toHomeGLS' | 'foxPost') => {
      checkoutDispatch({ type: 'SET_PICKUP_OPTION', payload: option })
   }

   return (
      <PickUpContainer>
         <FormControl component='fieldset' sx={{ width: '85%' }}>
            <FormLabel component='legend' sx={{ marginBottom: '.4rem' }}>
               Szállítási lehetőségek
            </FormLabel>
            <RadioGroup
               aria-label='pickUpOptions'
               defaultValue={pickUpOption}
               name='radio-buttons-group'
               value={pickUpOption}
               onChange={(option) => {
                  setPickUp(option.target.value as 'inStore' | 'toHomeGLS' | 'foxPost')
               }}
            >
               <StyledPaper>
                  <FormControlLabel
                     value='inStore'
                     control={<Radio />}
                     label='Átvétel személyesen, üzletünkben (ingyenes)'
                  />
               </StyledPaper>
               <StyledPaper>
                  <FormControlLabel
                     value='toHomeGLS'
                     control={<Radio />}
                     label='Házhozszállítás GLS futárral (990 Ft)'
                  />
               </StyledPaper>
               <StyledPaper>
                  <FormControlLabel
                     value='foxPost'
                     control={<Radio />}
                     label='FoxPost csomagautomata (880 Ft)'
                  />
               </StyledPaper>
            </RadioGroup>
         </FormControl>
      </PickUpContainer>
   )
}

import React from 'react'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { StyledPaper } from './Style'

export default function PickUp() {
   return (
      <div
         style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <FormControl component='fieldset' sx={{ width: '85%' }}>
            <FormLabel component='legend' sx={{ marginBottom: '.4rem' }}>
               Szállítási lehetőségek
            </FormLabel>
            <RadioGroup
               aria-label='pickUpOptions'
               defaultValue='inStore'
               name='radio-buttons-group'
               value={'inStore'}
               onChange={() => {}}
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
      </div>
   )
}

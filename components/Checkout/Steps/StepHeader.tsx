'use client'
import { useContext } from 'react'
import { CheckoutContext } from '../Context/CheckoutContext'

import Tooltip from '@mui/material/Tooltip'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function StepHeader({
   currentStep,
   nextStep,
   prevStep,
}: {
   nextStep: () => void
   prevStep: () => void
   currentStep: number
}) {
   const { isUserDetailsSet } = useContext(CheckoutContext)

   return (
      <div>
         <Stepper activeStep={currentStep} alternativeLabel>
            <Step>
               <StepLabel>Számlázási adatok megadása</StepLabel>
            </Step>
            <Step>
               <StepLabel>Átvételi lehetőségek</StepLabel>
            </Step>
            <Step>
               <StepLabel>Fizetési mód kiválasztása</StepLabel>
            </Step>
            <Step>
               <StepLabel>Rendelés leadása</StepLabel>
            </Step>
         </Stepper>
         <Box sx={{ display: 'flex', flexDirection: 'row', mr: 5, ml: 5, mt: 2, mb: 4 }}>
            <Button onClick={prevStep}>Vissza</Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isUserDetailsSet ? (
               <>
                  {currentStep === 3 ? (
                     <Button disabled>Véglegesítés</Button>
                  ) : (
                     <Button onClick={nextStep}>Következő</Button>
                  )}
               </>
            ) : (
               <Tooltip title={<p>Kötelező kitölteni a személyes adatokat a tovább lépéshez!</p>} arrow>
                  <span>
                     <Button disabled={true}>Következő</Button>
                  </span>
               </Tooltip>
            )}
         </Box>
      </div>
   )
}

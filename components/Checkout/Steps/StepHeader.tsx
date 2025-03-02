'use client'
import useTooltip from '../Hooks/useTooltip'

import Tooltip from '@mui/material/Tooltip'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import type { UserDetailsTypes } from '@/types/userTypes'

export default function StepHeader({
   currentStep,
   nextStep,
}: //    prevStep,
//    userDetails,
{
   nextStep: () => void
   prevStep: () => void
   currentStep: number
   userDetails: UserDetailsTypes | undefined
}) {
   const {
      isNextBtnDisabled,
      isTooltipOpen,
      handleTooltipOpen,
      handleTooltipClose,
      //   handleNextBtnDisable,
      //   handleNextBtnEnable,
   } = useTooltip()

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
            <Button color='inherit' disabled={false} onClick={() => {}}>
               Vissza
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Tooltip
               open={isTooltipOpen}
               onClose={handleTooltipClose}
               onOpen={handleTooltipOpen}
               title={<p>Kötelező kitölteni a személyes adatokat a tovább lépéshez!</p>}
               arrow
            >
               <span>
                  <Button onClick={nextStep} disabled={isNextBtnDisabled}>
                     {currentStep === 3 ? 'Véglegesítés' : 'Következő'}
                  </Button>
               </span>
            </Tooltip>
         </Box>
      </div>
   )
}

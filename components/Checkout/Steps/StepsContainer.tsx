'use client'
import useSteps from '../Hooks/useSteps'

import StepHeader from './StepHeader'
import { StepsContainerStyle } from '../Styles'

import type { UserDetailsTypes } from '@/types/userTypes'

export default function StepsContainer({
   userDetails,
   stepComponents,
}: {
   userDetails: UserDetailsTypes | undefined
   stepComponents: JSX.Element[]
}) {
   const { currentStep, nextStep, prevStep } = useSteps()

   return (
      <StepsContainerStyle>
         <StepHeader
            isUserDetailsFilled={userDetails ? true : false}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
         />
         <div style={{ minHeight: '50vh' }}>{stepComponents[currentStep]}</div>
      </StepsContainerStyle>
   )
}

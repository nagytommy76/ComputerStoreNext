'use client'
import useSteps from '../Hooks/useSteps'
import CheckoutContextProvider from '../Context/CheckoutContext'

import StepHeader from './StepHeader'
import AdressForm from './AdressForm/AdressForm'
import { StepsContainerStyle } from '../Styles'
import type { UserDetailsTypes } from '@/types/userTypes'

export default function StepsContainer({
   userDetails,
   email,
}: {
   userDetails: UserDetailsTypes | undefined
   email: string
}) {
   const { currentStep, nextStep, prevStep } = useSteps()

   const stepComponents = [<AdressForm key={0} />]

   return (
      <StepsContainerStyle>
         <CheckoutContextProvider userDetails={userDetails} email={email}>
            <StepHeader currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
            <div style={{ minHeight: '50vh' }}>{stepComponents[currentStep]}</div>
         </CheckoutContextProvider>
      </StepsContainerStyle>
   )
}

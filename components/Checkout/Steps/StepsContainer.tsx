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
   provider = 'credentials',
}: {
   userDetails: UserDetailsTypes | undefined
   email: string
   provider?: 'google' | 'facebook' | 'credentials'
}) {
   const { currentStep, nextStep, prevStep } = useSteps()

   const stepComponents = [<AdressForm key={0} />]

   return (
      <StepsContainerStyle>
         <CheckoutContextProvider provider={provider} userDetails={userDetails} email={email}>
            <StepHeader currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
            <div style={{ minHeight: '50vh' }}>{stepComponents[currentStep]}</div>
         </CheckoutContextProvider>
      </StepsContainerStyle>
   )
}

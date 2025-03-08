'use client'
import useSteps from '../Hooks/useSteps'
import CheckoutContextProvider from '../Context/CheckoutContext'

import StepHeader from './StepHeader'
import AdressForm from './AdressForm/AdressForm'
import { StepsContainerStyle } from '../Styles'
import type { UserDetailsTypes } from '@/types/userTypes'

export default function StepsContainer({ userDetails }: { userDetails: UserDetailsTypes | undefined }) {
   const { currentStep, nextStep, prevStep } = useSteps()

   const stepComponents = [<AdressForm key={0} />]

   return (
      <StepsContainerStyle>
         <StepHeader
            isUserDetailsFilled={userDetails ? true : false}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
         />
         <CheckoutContextProvider userDetails={userDetails}>
            <div style={{ minHeight: '50vh' }}>{stepComponents[currentStep]}</div>
         </CheckoutContextProvider>
      </StepsContainerStyle>
   )
}

'use client'
import useSteps from '../Hooks/useSteps'
import CheckoutContextProvider from '../Context/CheckoutContext'
import type { ProviderType } from '@/types/userTypes'

import StepHeader from './StepHeader'
import AdressForm from './AdressForm/AdressForm'
import PickUp from './PickUpOption/PickUp'
import Payment from './Payment/Payment'

import { StepsContainerStyle } from '../Styles'
import type { UserDetailsTypes } from '@/types/userTypes'

export default function StepsContainer({
   userDetails,
   email,
   provider = 'credentials',
}: {
   userDetails: UserDetailsTypes | undefined
   email: string
   provider?: ProviderType
}) {
   const { currentStep, nextStep, prevStep } = useSteps()

   const stepComponents = [<AdressForm key={0} />, <PickUp key={1} />, <Payment key={2} />]

   return (
      <StepsContainerStyle>
         <CheckoutContextProvider provider={provider} userDetails={userDetails} email={email}>
            <StepHeader currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
            <div style={{ minHeight: '50vh', width: '100%' }}>{stepComponents[currentStep]}</div>
         </CheckoutContextProvider>
      </StepsContainerStyle>
   )
}

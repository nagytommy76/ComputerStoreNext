'use client'
import useSteps from '../Hooks/useSteps'
import StepHeader from './StepHeader'

import type { UserDetailsTypes } from '@/types/userTypes'

export default function StepsContainer({ userDetails }: { userDetails: UserDetailsTypes | undefined }) {
   const { currentStep, nextStep, prevStep } = useSteps()
   return (
      <div>
         <StepHeader
            userDetails={userDetails}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
         />
      </div>
   )
}

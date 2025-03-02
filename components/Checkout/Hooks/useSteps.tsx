import { useState } from 'react'

export default function useSteps() {
   const [currentStep, setCurrentStep] = useState<number>(0)

   const nextStep = () => {
      setCurrentStep(currentStep + 1)
   }

   const prevStep = () => {
      setCurrentStep(currentStep - 1)
   }

   return {
      nextStep,
      prevStep,
      currentStep,
   }
}

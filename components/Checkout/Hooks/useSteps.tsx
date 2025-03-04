import { useState } from 'react'

export default function useSteps() {
   const [currentStep, setCurrentStep] = useState<number>(0)

   const nextStep = () => {
      if (currentStep === 3) return
      setCurrentStep(currentStep + 1)
   }

   const prevStep = () => {
      if (currentStep === 0) return
      setCurrentStep(currentStep - 1)
   }

   return {
      nextStep,
      prevStep,
      currentStep,
   }
}

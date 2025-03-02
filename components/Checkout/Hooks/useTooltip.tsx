import { useState } from 'react'

export default function useTooltip(isUserDetailsFilled: boolean = false) {
   const [isNextBtnDisabled, setIsNextBtnDisabled] = useState<boolean>(false)
   const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

   const handleTooltipOpen = () => {
      if (!isUserDetailsFilled) setIsTooltipOpen(true)
   }
   const handleTooltipClose = () => {
      setIsTooltipOpen(false)
   }

   const handleNextBtnDisable = () => {
      setIsNextBtnDisabled(true)
   }

   const handleNextBtnEnable = () => {
      setIsNextBtnDisabled(false)
   }

   return {
      isNextBtnDisabled,
      isTooltipOpen,
      handleTooltipOpen,
      handleTooltipClose,
      handleNextBtnDisable,
      handleNextBtnEnable,
   }
}

'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedFrequencyRange } from '@/reduxStore/slices/Filter/MemoryFilter'

import BaseSlider from '../../SideFilter/Base/BaseSlider'

const FrequencyRange = ({ frequencyRange }: { frequencyRange: number[] }) => {
   const { selectedFrequencyRange } = useAppSelector((state) => state.memoryFilter)

   return (
      <BaseSlider
         setSelectedDispatchValue={setSelectedFrequencyRange}
         range={frequencyRange}
         selectedRange={selectedFrequencyRange}
         text='Frekvencia'
      />
   )
}

export default FrequencyRange

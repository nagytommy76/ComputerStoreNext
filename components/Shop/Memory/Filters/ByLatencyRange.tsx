'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedLatency } from '@/reduxStore/slices/Filter/MemoryFilter'

import BaseSlider from '../../SideFilter/Base/BaseSlider'

const ByLatencyRange = ({ allLatencies }: { allLatencies: number[] }) => {
   const { selectedLatency } = useAppSelector((state) => state.memoryFilter)

   return (
      <BaseSlider
         setSelectedDispatchValue={setSelectedLatency}
         range={allLatencies}
         selectedRange={selectedLatency}
         text='Késleltetés'
         unit=' CL'
      />
   )
}

export default ByLatencyRange

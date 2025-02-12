'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedBaseFrequencyRange } from '@/reduxStore/slices/Filter/CpuFilter'

import BaseFrequencySlider from '../../SideFilter/Base/BaseSlider'

function FrequencyRange({ baseFrequency }: { baseFrequency: number[] }) {
   const { selectedBaseFrequency } = useAppSelector((state) => state.cpuFilter)

   return (
      <BaseFrequencySlider
         setSelectedDispatchValue={setSelectedBaseFrequencyRange}
         range={baseFrequency}
         selectedRange={selectedBaseFrequency}
         text='Alap frekvencia (MHz)'
      />
   )
}

export default FrequencyRange

'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedTurboFrequencyRange } from '@/reduxStore/slices/Filter/CpuFilter'

import TurboFrequencySlider from '../../SideFilter/Base/BaseSlider'

const ByTurboFrequency = ({ turboFrequency }: { turboFrequency: number[] }) => {
   const { selectedTurboFrequency } = useAppSelector((state) => state.cpuFilter)

   return (
      <TurboFrequencySlider
         setSelectedDispatchValue={setSelectedTurboFrequencyRange}
         range={turboFrequency}
         selectedRange={selectedTurboFrequency}
         text='Boost frekvencia (MHz)'
      />
   )
}

export default ByTurboFrequency

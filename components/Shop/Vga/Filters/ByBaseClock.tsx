'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedBaseClockRange } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BaseFrequencySlider from '../../SideFilter/Base/BaseSlider'

const ByBaseClock = ({ baseClockRange }: { baseClockRange: number[] }) => {
   const { selectedBaseClockRange } = useAppSelector((state) => state.vgaFilter)
   return (
      <BaseFrequencySlider
         range={baseClockRange}
         selectedRange={selectedBaseClockRange}
         setSelectedDispatchValue={setSelectedBaseClockRange}
         text='Alap órajel'
      />
   )
}

export default ByBaseClock

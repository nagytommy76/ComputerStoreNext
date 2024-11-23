'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedBoostClockRange } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BaseFrequencySlider from '../../SideFilter/Base/BaseSlider'

const ByBoostClock = () => {
   const { boostClockRange, selectedBoostClockRange } = useAppSelector((state) => state.vgaFilter)
   return (
      <BaseFrequencySlider
         range={boostClockRange}
         selectedRange={selectedBoostClockRange}
         setSelectedDispatchValue={setSelectedBoostClockRange}
         text='Boost órajel'
      />
   )
}

export default ByBoostClock

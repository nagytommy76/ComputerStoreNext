'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedL3CacheRange } from '@/reduxStore/slices/Filter/CpuFilter'

import BaseL3Select from '../../SideFilter/Base/BaseSlider'

const ByL3CacheRange = ({ l3Cache }: { l3Cache: number[] }) => {
   const { selectedL3Cache } = useAppSelector((state) => state.cpuFilter)

   return (
      <BaseL3Select
         setSelectedDispatchValue={setSelectedL3CacheRange}
         range={l3Cache}
         selectedRange={selectedL3Cache}
         text='L3 Cache'
         unit=' MB'
      ></BaseL3Select>
   )
}

export default ByL3CacheRange

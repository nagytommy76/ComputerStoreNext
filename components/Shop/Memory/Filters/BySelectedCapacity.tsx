'use client'

import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedCapacity } from '@/reduxStore/slices/Filter/MemoryFilter'

import BaseSlider from '../../SideFilter/Base/BaseSlider'

const BySelectedCapacity = ({ allCapacities }: { allCapacities: number[] }) => {
   const { selectedCapacity } = useAppSelector((state) => state.memoryFilter)

   return (
      <BaseSlider
         setSelectedDispatchValue={setSelectedCapacity}
         range={allCapacities}
         selectedRange={selectedCapacity}
         text='Kapacitás'
         unit=' GB'
      />
   )
}

export default BySelectedCapacity

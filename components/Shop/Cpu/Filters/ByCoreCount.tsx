'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedCoreCountRange } from '@/reduxStore/slices/Filter/CpuFilter'

import BaseCoreSelect from '../../SideFilter/Base/BaseSlider'

const ByCoreCount = ({ coreCounts }: { coreCounts: number[] }) => {
   const { selectedCoreCount } = useAppSelector((state) => state.cpuFilter)

   return (
      <BaseCoreSelect
         setSelectedDispatchValue={setSelectedCoreCountRange}
         range={coreCounts}
         selectedRange={selectedCoreCount}
         text='Magok száma'
         unit=' DB'
      ></BaseCoreSelect>
   )
}

export default ByCoreCount

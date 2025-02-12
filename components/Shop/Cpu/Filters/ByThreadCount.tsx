'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedThreadCountRange } from '@/reduxStore/slices/Filter/CpuFilter'

import BaseThreadSelect from '../../SideFilter/Base/BaseSlider'

const ByThreadCount = ({ threadCounts }: { threadCounts: number[] }) => {
   const { selectedThreadCount } = useAppSelector((state) => state.cpuFilter)

   return (
      <BaseThreadSelect
         setSelectedDispatchValue={setSelectedThreadCountRange}
         range={threadCounts}
         selectedRange={selectedThreadCount}
         text='Szálak száma'
         unit=' DB'
      ></BaseThreadSelect>
   )
}

export default ByThreadCount

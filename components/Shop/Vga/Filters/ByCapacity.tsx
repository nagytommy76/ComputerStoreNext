'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedVramCapRange } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BaseCapacity from '../../SideFilter/Base/BaseSlider'

const ByBandwidth = ({ vramCapacitiyRange }: { vramCapacitiyRange: number[] }) => {
   const { selectedVramCapRange } = useAppSelector((state) => state.vgaFilter)
   return (
      <BaseCapacity
         range={vramCapacitiyRange}
         selectedRange={selectedVramCapRange}
         setSelectedDispatchValue={setSelectedVramCapRange}
         text='Vram Kapacitás'
         unit=' GB'
      />
   )
}

export default ByBandwidth

'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedVramBandwidth } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BaseBandwidth from '../../SideFilter/Base/BaseSlider'

const ByBandwidth = () => {
   const { vramBandwidths, selectedVramBandwidth } = useAppSelector((state) => state.vgaFilter)
   return (
      <BaseBandwidth
         range={vramBandwidths}
         selectedRange={selectedVramBandwidth}
         setSelectedDispatchValue={setSelectedVramBandwidth}
         text='Vram sávszélesség'
         unit=' bit'
      />
   )
}

export default ByBandwidth

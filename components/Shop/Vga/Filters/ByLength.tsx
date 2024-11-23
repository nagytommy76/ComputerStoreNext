'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedLength } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BaseLengthRange from '../../SideFilter/Base/BaseSlider'

const ByLength = () => {
   const { lengths, selectedLength } = useAppSelector((state) => state.vgaFilter)
   return (
      <BaseLengthRange
         range={lengths}
         selectedRange={selectedLength}
         setSelectedDispatchValue={setSelectedLength}
         text='Hosszúság'
         unit=' CM'
      />
   )
}

export default ByLength

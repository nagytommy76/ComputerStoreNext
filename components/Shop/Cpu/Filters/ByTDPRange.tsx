'use client'
import React from 'react'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedTDPRange } from '@/reduxStore/slices/Filter/CpuFilter'

import BaseTDPSelect from '../../SideFilter/Base/BaseSlider'

const ByTDPRange = ({ tdp }: { tdp: number[] }) => {
   const { selectedTDP } = useAppSelector((state) => state.cpuFilter)

   return (
      <BaseTDPSelect
         setSelectedDispatchValue={setSelectedTDPRange}
         range={tdp}
         selectedRange={selectedTDP}
         text='Fogyasztás'
         unit=' Watt'
      ></BaseTDPSelect>
   )
}

export default ByTDPRange

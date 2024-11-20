'use client'
import React from 'react'
import useGetProducts from '../Hooks/useGetProducts'
import useFilter from '../Hooks/UseFilter'

import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'
import type { FilterTypes } from '@/types/filterTypes'

import BaseSideFilter from '../SideFilter/BaseSideFilter'
import Products from '../Products/Products'

import ByBandwidth from './Filters/ByBandwidth'
import ByBaseClock from './Filters/ByBaseClock'
import ByBoostClock from './Filters/ByBoostClock'
import ByCapacity from './Filters/ByCapacity'
import ByGpuManufacturer from './Filters/ByGpuManufacturer'
import ByLength from './Filters/ByLength'
import ByPciType from './Filters/ByPciType'
import ByPowerConsumption from './Filters/ByPowerConsumption'
import ByVramType from './Filters/ByVramType'

export default function VgaShopPage({ vgaFilterData }: { vgaFilterData: FilterTypes }) {
   const extraDispatches = useExtraDispatch()
   const extraQuery = useExtraQuery()
   const isFetched = useFilter(vgaFilterData, extraDispatches)
   useGetProducts('vga', extraQuery, isFetched)

   return (
      <Products>
         <BaseSideFilter>
            <ByGpuManufacturer />
            <ByPciType />
            <ByVramType />
            <ByBandwidth />
            <ByBaseClock />
            <ByBoostClock />
            <ByCapacity />
            <ByLength />
            <ByPowerConsumption />
         </BaseSideFilter>
      </Products>
   )
}

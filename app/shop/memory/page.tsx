import { Metadata } from 'next'
import { ShopContainerStyle } from '../styles/style'
import type { ProductFilterType } from '@/types/filterTypes'
import type { MemoryFilterType } from '@/types/ProductFilter/MemoryFilter'

import MemoryShopPage from '@/components/Shop/Memory/MemoryShopPage'
import BaseSideFilter from '@ShopComponents/SideFilter/BaseSideFilter'

import ByLatencyRange from '@ShopComponents/Memory/Filters/ByLatencyRange'
import ByMemoryType from '@ShopComponents/Memory/Filters/ByMemoryType'
import BySelectedCapacity from '@ShopComponents/Memory/Filters/BySelectedCapacity'
import FrequencyRange from '@ShopComponents/Memory/Filters/FrequencyRange'

export const metadata: Metadata = {
   title: 'Computer Store | Memória',
   description: 'Memory products (RAM)',
}

async function getAllMemoryFilter() {
   const filteredData = await fetch(`${process.env.APP_URL}/api/memory/filter-data`, { method: 'GET' })
   const response = (await filteredData.json()) as Promise<{
      filterData: ProductFilterType & MemoryFilterType
   }>
   return (await response).filterData
}

export default async function page() {
   const memoryilterData = await getAllMemoryFilter()

   return (
      <ShopContainerStyle>
         <BaseSideFilter filters={memoryilterData}>
            <ByMemoryType />
            <ByLatencyRange allLatencies={[memoryilterData.minLatency, memoryilterData.maxLatency]} />
            <BySelectedCapacity allCapacities={memoryilterData.capacities} />
            <FrequencyRange frequencyRange={[memoryilterData.minFrequency, memoryilterData.maxFrequency]} />
         </BaseSideFilter>
         <MemoryShopPage memoryFilterData={memoryilterData} />
      </ShopContainerStyle>
   )
}

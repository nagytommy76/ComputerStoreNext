import { Metadata } from 'next'
import { ShopContainerStyle } from '../styles/style'
import type { ProductFilterType } from '@/types/filterTypes'
import type { CpuFilterType } from '@/app/api/cpu/types'

import BaseSideFilter from '@ShopComponents/SideFilter/BaseSideFilter'
import CpuShopPage from '@ShopComponents/Cpu/CpuShopPage'
import ByBaseFrequency from '@ShopComponents/Cpu/Filters/ByBaseFrequency'
import ByTurboFrequency from '@ShopComponents/Cpu/Filters/ByTurboFrequency'
import ByCoreCount from '@ShopComponents/Cpu/Filters/ByCoreCount'
import BySocket from '@ShopComponents/Cpu/Filters/BySocket'
import ByThreadCount from '@ShopComponents/Cpu/Filters/ByThreadCount'
import ByL3Cache from '@ShopComponents/Cpu/Filters/ByL3Cache'
import ByTDPRange from '@ShopComponents/Cpu/Filters/ByTDPRange'

export const metadata: Metadata = {
   title: 'Computer Store | Processzorok',
   description: 'CPU products (Processors)',
}

async function getAllCpuFilter() {
   const filteredData = await fetch(`${process.env.APP_URL}/api/cpu/filter-data`, { method: 'GET' })
   const response = (await filteredData.json()) as Promise<{ filterData: ProductFilterType & CpuFilterType }>
   return (await response).filterData
}

export default async function page() {
   const cpuFilterData = await getAllCpuFilter()
   return (
      <section style={ShopContainerStyle}>
         <BaseSideFilter filters={cpuFilterData}>
            <BySocket />
            <ByCoreCount />
            <ByThreadCount />
            <ByBaseFrequency />
            <ByTurboFrequency />
            <ByTDPRange />
            <ByL3Cache />
         </BaseSideFilter>
         <CpuShopPage cpuFilterData={cpuFilterData} />
      </section>
   )
}

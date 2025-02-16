import { Metadata } from 'next'
import { ShopContainerStyle } from '../styles/style'
import type { ProductFilterType } from '@/types/filterTypes'
import type { VgaFilterType } from '@/components/Shop/Vga/types'

import VgaShopPage from '@/components/Shop/Vga/VgaShopPage'
import BaseSideFilter from '@ShopComponents/SideFilter/BaseSideFilter'
import ByBandwidth from '@ShopComponents/Vga/Filters/ByBandwidth'
import ByBaseClock from '@ShopComponents/Vga/Filters/ByBaseClock'
import ByBoostClock from '@ShopComponents/Vga/Filters/ByBoostClock'
import ByCapacity from '@ShopComponents/Vga/Filters/ByCapacity'
import ByGpuManufacturer from '@ShopComponents/Vga/Filters/ByGpuManufacturer'
import ByLength from '@ShopComponents/Vga/Filters/ByLength'
import ByPciType from '@ShopComponents/Vga/Filters/ByPciType'
import ByPowerConsumption from '@ShopComponents/Vga/Filters/ByPowerConsumption'
import ByVramType from '@ShopComponents/Vga/Filters/ByVramType'

export const metadata: Metadata = {
   title: 'Computer Store | Videókártya',
   description: 'VGA products',
}

async function getAllVgaFilter() {
   const filteredData = await fetch(`${process.env.APP_URL}/api/vga/filter-data`, { method: 'GET' })
   const response = (await filteredData.json()) as Promise<{ filterData: ProductFilterType & VgaFilterType }>
   return (await response).filterData
}

export default async function page() {
   const vgaFilterData = await getAllVgaFilter()

   return (
      <ShopContainerStyle>
         <BaseSideFilter filters={vgaFilterData}>
            <ByGpuManufacturer gpuManufacturers={vgaFilterData.gpuManufacturer} />
            <ByPciType pcieTypes={vgaFilterData.pciType} />
            <ByVramType vramTypes={vgaFilterData.vramType} />
            <ByBandwidth vramBandwidths={[vgaFilterData.minVramBandwidth, vgaFilterData.maxVramBandwidth]} />
            <ByBaseClock baseClockRange={[vgaFilterData.minBaseClock, vgaFilterData.maxBaseClock]} />
            <ByBoostClock boostClockRange={[vgaFilterData.minBoostClock, vgaFilterData.maxBoostClock]} />
            <ByCapacity vramCapacitiyRange={[vgaFilterData.minVramCapacity, vgaFilterData.maxVramCapacity]} />
            <ByLength lengths={[vgaFilterData.minLength, vgaFilterData.maxLength]} />
            <ByPowerConsumption powerConsuptions={[vgaFilterData.minTdp, vgaFilterData.maxTdp]} />
         </BaseSideFilter>
         <VgaShopPage vgaFilterData={vgaFilterData} />
      </ShopContainerStyle>
   )
}
// https://stackoverflow.com/questions/77971327/server-side-component-list-filtering-in-next-js

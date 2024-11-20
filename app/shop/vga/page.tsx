import { Metadata } from 'next'
import { ShopContainerStyle } from './styles/style'
import VgaShopPage from '@/components/Shop/Vga/VgaShopPage'
import type { FilterTypes } from '@/types/filterTypes'

export const metadata: Metadata = {
   title: 'Computer Store | Videókártya',
   description: 'VGA products',
}

async function getAllVgaFilter() {
   const filteredData = await fetch(`${process.env.APP_URL}/api/vga/filter-data`, { method: 'GET' })
   const response = (await filteredData.json()) as Promise<{ filterData: FilterTypes }>
   return (await response).filterData
}

export default async function page() {
   const vgaFilterData = await getAllVgaFilter()

   return (
      <section style={ShopContainerStyle}>
         <VgaShopPage vgaFilterData={vgaFilterData} />
      </section>
   )
}
// https://stackoverflow.com/questions/77971327/server-side-component-list-filtering-in-next-js

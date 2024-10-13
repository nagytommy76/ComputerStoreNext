import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import type { BaseFetchedProductType } from '@/types/productType'

import Typography from '@mui/material/Typography'
import { CardGridContainerStyle } from './styles/style'

export const metadata: Metadata = {
   title: 'Computer Store | Videókártya',
}

const ProductCard = dynamic(() => import('@ShopComponents/ProductCard/ProductCard'))

export default async function page() {
   const res = await fetch(
      'http://localhost:3000/api/vga?currentPage=1&perPage=15&orderBy=asc&byManufacturer=all&priceRange=0,5000000&selectedWarranty=all&productName=&baseClock=0,5000&boostClock=0,5000&gpuManufacturer=all&length=0,1800&pciType=all&tdp=0,5000&vramBandwidth=0,2000&vramCapacity=0,500&vramType=all',
      {
         method: 'GET',
      }
   )
   const data = (await res.json()) as { vgaProducts: BaseFetchedProductType[] }

   return (
      <>
         <Typography variant='h3'>FILTER</Typography>
         <div
            style={{
               width: '80%',
               minHeight: '100%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
            }}
         >
            <Typography variant='h3'>SHOP HEADER</Typography>
            <div style={CardGridContainerStyle}>
               {data.vgaProducts.map((vga: BaseFetchedProductType) => (
                  <ProductCard key={vga._id} productType='vga' product={vga} />
               ))}
            </div>
         </div>
      </>
   )
}

'use client'
import React from 'react'

import { useQuery } from '@tanstack/react-query'

import ProductCard from './ProductCard'

import Vga_icon from '@images/vga_icon.jpg'
import type { BaseFetchedProductType } from '@/types/productType'

export default function Products() {
   const { data, error } = useQuery({
      queryKey: ['getAllVga'],
      queryFn: async () => {
         const response = await fetch('/api/vga')
         return (await response.json()) as Promise<{ vgaProducts: BaseFetchedProductType[] }>
      },
   })

   if (error) return <h1>Hiba van: {error.message}</h1>
   return (
      <>
         {data?.vgaProducts?.map((vga) => (
            <ProductCard
               key={vga._id as string}
               productType='vga'
               fallbackImage={Vga_icon.src}
               product={vga}
            />
         ))}
      </>
   )
}

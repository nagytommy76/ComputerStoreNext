'use client'
import React from 'react'
import { useAppSelector } from '@/reduxStore/hooks'

import Vga_icon from '@images/vga_icon.jpg'

import ProductCard from '../ProductCard/ProductCard'
import { ProductContainerStyle, CardGridContainerStyle } from './Styles'

export default function Products({ children }: { children: React.ReactNode }) {
   const products = useAppSelector((state) => state.products.products)

   return (
      <>
         {children}
         <ProductContainerStyle>
            <CardGridContainerStyle>
               {products.map((product) => (
                  <ProductCard
                     key={product._id as string}
                     productType='vga'
                     fallbackImage={Vga_icon.src}
                     product={product}
                  />
               ))}
            </CardGridContainerStyle>
         </ProductContainerStyle>
      </>
   )
}

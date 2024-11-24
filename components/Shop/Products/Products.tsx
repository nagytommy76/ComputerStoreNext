'use client'
import React from 'react'
import { useAppSelector } from '@/reduxStore/hooks'

import Vga_icon from '@images/vga_icon.jpg'

import ProductCard from '../ProductCard/ProductCard'
import { ProductContainerStyle, CardGridContainerStyle } from './Styles'

import Header from './Header/Header'
import Pagination from './Pagination/Pagination'

export default function Products({ productName }: { productName: string }) {
   const products = useAppSelector((state) => state.products.products)

   return (
      <ProductContainerStyle>
         <Header productName={productName} />
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
         <Pagination />
      </ProductContainerStyle>
   )
}

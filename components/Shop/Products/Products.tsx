'use client'
import React from 'react'
import { useAppSelector } from '@/reduxStore/hooks'

import Vga_icon from '@images/vga_icon.jpg'

import ProductCard from '../ProductCard/ProductCard'
import { ProductContainerStyle, CardGridContainerStyle } from './Styles'

import Header from './Header/Header'
import Pagination from './Pagination/Pagination'
import Container from '@/Suspense/ProductCard/Container'
import NotFound from './NotFound/NotFound'

export default function Products({ productName }: { productName: string }) {
   const { products, isLoading } = useAppSelector((state) => state.products)

   return (
      <ProductContainerStyle>
         <Header productName={productName} />
         <CardGridContainerStyle>
            {products.length === 0 && !isLoading && <NotFound />}
            {isLoading ? (
               <Container />
            ) : (
               products.map((product) => (
                  <ProductCard
                     key={product._id as string}
                     productType='vga'
                     fallbackImage={Vga_icon.src}
                     product={product}
                  />
               ))
            )}
         </CardGridContainerStyle>
         <Pagination />
      </ProductContainerStyle>
   )
}

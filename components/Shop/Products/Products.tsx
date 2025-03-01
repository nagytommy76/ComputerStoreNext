'use client'
import React from 'react'
import { useAppSelector } from '@/reduxStore/hooks'

import ProductCard from '../ProductCard/ProductCard'
import { ProductContainerStyle, CardGridContainerStyle } from './Styles'

import Header from './Header/Header'
import Pagination from './Pagination/Pagination'
import Container from '@/Suspense/ProductCard/Container'

export default function Products({
   productName,
   productType,
   fallbackIconSrc,
}: {
   productName: string
   productType: string
   fallbackIconSrc: string
}) {
   const { products, isLoading } = useAppSelector((state) => state.products)

   return (
      <ProductContainerStyle>
         <Header productName={productName} />
         <CardGridContainerStyle>
            {isLoading ? (
               <Container />
            ) : (
               products.map((product) => (
                  <ProductCard
                     key={product._id as string}
                     productType={productType}
                     fallbackImage={fallbackIconSrc}
                     product={product}
                     ratingCount={product.ratingValues.length}
                  />
               ))
            )}
         </CardGridContainerStyle>
         <Pagination />
      </ProductContainerStyle>
   )
}

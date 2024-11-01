'use client'
import React from 'react'
import useGetProducts from '../Hooks/useGetProducts'
import useFilter from '../Hooks/UseFilter'

import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

import BaseSideFilter from '../SideFilter/BaseSideFilter'
import Products from '../Products/Products'

export default function VgaShopPage() {
   const extraDispatches = useExtraDispatch()
   const extraQuery = useExtraQuery()
   useGetProducts('vga', extraQuery)
   useFilter('vga', extraDispatches)

   return (
      <Products>
         <BaseSideFilter>
            <>Extra kereső</>
         </BaseSideFilter>
      </Products>
   )
}

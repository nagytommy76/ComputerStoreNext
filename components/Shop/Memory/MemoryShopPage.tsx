'use client'
import dynamic from 'next/dynamic'
import useGetProducts from '../Hooks/useGetProducts'
import useFilter from '../Hooks/UseFilter'
import { useAppSelector } from '@/reduxStore/hooks'
import type { ProductFilterType } from '@/types/filterTypes'

import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

import Memory_icon from '@images/ram.png'
const Products = dynamic(() => import('../Products/Products'), {})

export default function MemoryShopPage({ memoryFilterData }: { memoryFilterData: ProductFilterType }) {
   const memoryFilter = useAppSelector((state) => state.memoryFilter)
   const extraDispatches = useExtraDispatch()
   const extraQuery = useExtraQuery()
   const isFetched = useFilter(memoryFilterData, extraDispatches)
   useGetProducts('memory', memoryFilter, extraQuery, isFetched)

   return <Products productName='Memória (RAM)' productType='memory' fallbackIconSrc={Memory_icon.src} />
}

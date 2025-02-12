'use client'
import dynamic from 'next/dynamic'
import { useAppSelector } from '@/reduxStore/hooks'
import useGetProducts from '../Hooks/useGetProducts'
import useFilter from '../Hooks/UseFilter'
import type { ProductFilterType } from '@/types/filterTypes'

import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

const Products = dynamic(() => import('../Products/Products'), {})

export default function CpuShopPage({ cpuFilterData }: { cpuFilterData: ProductFilterType }) {
   const cpuFilter = useAppSelector((state) => state.cpuFilter)
   const extraDispatches = useExtraDispatch()
   const extraQuery = useExtraQuery()
   const isFetched = useFilter(cpuFilterData, extraDispatches)
   useGetProducts('cpu', cpuFilter, extraQuery, isFetched)

   return <Products productName='Processzor' />
}

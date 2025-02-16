'use client'
import dynamic from 'next/dynamic'
import useGetProducts from '../Hooks/useGetProducts'
import useFilter from '../Hooks/UseFilter'
import { useAppSelector } from '@/reduxStore/hooks'
import type { ProductFilterType } from '@/types/filterTypes'

import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

import Vga_icon from '@images/vga_icon.jpg'
const Products = dynamic(() => import('../Products/Products'), {})

export default function VgaShopPage({ vgaFilterData }: { vgaFilterData: ProductFilterType }) {
   const vgaFilter = useAppSelector((state) => state.vgaFilter)
   const extraDispatches = useExtraDispatch()
   const extraQuery = useExtraQuery()
   const isFetched = useFilter(vgaFilterData, extraDispatches)
   useGetProducts('vga', vgaFilter, extraQuery, isFetched)

   return <Products productName='Videókártya' productType='vga' fallbackIconSrc={Vga_icon.src} />
}

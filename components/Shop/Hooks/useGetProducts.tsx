import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks'
import { setProducts } from '@/reduxStore/slices/ProductsSlice'

import type { BaseFetchedProductType } from '@/types/productType'
import type { VgaFilterSlice } from '@/components/Shop/Vga/types'

export default function useGetProducts(
   productType: string,
   productFilter: VgaFilterSlice,
   extraQueryParameters: string = '',
   enabled: boolean = false
) {
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter)

   const queryFunction = async () => {
      const response = await fetch(
         `/api/${productType}/get-all-vga?page=${filterOptions.page}&perPage=${
            filterOptions.perPage
         }&orderBy=${filterOptions.orderBy}&byManufacturer=${filterOptions.selectedManufacturer}&priceRange=${
            filterOptions.priceRange
         }&selectedWarranty=${
            filterOptions.selectedWarranty
         }&productName=${filterOptions.productName.trim()}${extraQueryParameters}`,
         { method: 'GET' }
      )
      return (await response.json()) as Promise<{ products: BaseFetchedProductType[] }>
   }

   const { data, isLoading } = useQuery({
      queryKey: [`get-all-${productType}`, filterOptions, productFilter, productType],
      queryFn: queryFunction,
      enabled,
   })

   useEffect(() => {
      if (data) dispatch(setProducts(data.products))
   }, [data, dispatch])

   return isLoading
}

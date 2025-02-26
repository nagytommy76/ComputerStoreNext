import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks'
import { setProducts, setIsLoading } from '@/reduxStore/slices/ProductsSlice'

import type { BaseFetchedProductType } from '@/types/productType'

export default function useGetProducts(
   productType: string,
   productFilter: any,
   extraQueryParameters: string = '',
   enabled: boolean = false
) {
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter)

   const queryFunction = async () => {
      const response = await fetch(
         `/api/${productType}/get-all-${productType}?page=${filterOptions.page}&perPage=${
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
      dispatch(setIsLoading(isLoading))
   }, [isLoading, dispatch])

   useEffect(() => {
      if (data) dispatch(setProducts(data.products))
   }, [data, dispatch])

   return isLoading
}

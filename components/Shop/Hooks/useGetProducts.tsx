import { useQuery } from '@tanstack/react-query'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks'
import { setProducts } from '@/reduxStore/slices/ProductsSlice'

import type { BaseFetchedProductType } from '@/types/productType'

export default function useGetProducts(productType: string = 'vga', extraQueryParameters: string = '') {
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter)

   const queryFunction = async () => {
      const response = await fetch(
         `/api/${productType}/get-all-vga?orderBy=${filterOptions.orderBy}&byManufacturer=${
            filterOptions.selectedManufacturer
         }&priceRange=${filterOptions.priceRange}&selectedWarranty=${
            filterOptions.selectedWarranty
         }&productName=${filterOptions.productName.trim()}${extraQueryParameters}`,
         { method: 'GET' }
      )
      return (await response.json()) as Promise<{ products: BaseFetchedProductType[] }>
   }

   useQuery({
      queryKey: [`get-all-${productType}`, filterOptions, productType],
      queryFn: queryFunction,
      onSuccess: (data) => {
         dispatch(setProducts(data.products))
      },
   })

   return null
}

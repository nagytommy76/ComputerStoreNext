import { useEffect } from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'
import { useQuery } from '@tanstack/react-query'

import {
   setAllManufacturer,
   setMinPrice,
   setMaxPrice,
   setPriceRange,
   setAllWarranties,
} from '@/reduxStore/slices/Filter/BaseFilterDataSlice'
import type { FilterTypes } from '@/types/filterTypes'

const useFilter = (productType: string, extraFilterDispatches?: (params: any) => void) => {
   const dispatch = useAppDispatch()

   const queryFunction = async () => {
      const filteredData = await fetch(`/api/${productType}/filter-data`, { method: 'GET' })
      const response = (await filteredData.json()) as Promise<{ filterData: FilterTypes }>
      return (await response).filterData
   }

   const { data } = useQuery({
      queryKey: [`filter-data-${productType}`, productType],
      queryFn: queryFunction,
   })

   useEffect(() => {
      if (data) {
         dispatch(setPriceRange([data.minPrice, data.maxPrice]))
         dispatch(setAllManufacturer(data.allManufacturers))
         dispatch(setMinPrice(data.minPrice))
         dispatch(setMaxPrice(data.maxPrice))
         dispatch(setAllWarranties(data.allWarranties))
         if (extraFilterDispatches) extraFilterDispatches(data)
      }
   }, [data, dispatch])
}

export default useFilter

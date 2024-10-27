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

   const {
      data: filterData,
      isError,
      error,
   } = useQuery({
      queryKey: ['filterData'],
      queryFn: queryFunction,
   })

   if (!isError && filterData) {
      // console.log(filterData)
      // console.log(filterData.allManufacturer)
      dispatch(setAllManufacturer(filterData.allManufacturer))
      dispatch(setMinPrice(filterData.minPrice))
      dispatch(setMaxPrice(filterData.maxPrice))
      dispatch(setPriceRange([filterData.minPrice, filterData.maxPrice]))
      dispatch(setAllWarranties(filterData.allWarranties))
   } else console.log(error)
}

export default useFilter

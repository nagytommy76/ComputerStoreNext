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

   useQuery(['filterData', productType], queryFunction, {
      onSuccess: (filterData) => {
         if (filterData) {
            dispatch(setPriceRange([filterData.minPrice, filterData.maxPrice]))
            dispatch(setAllManufacturer(filterData.allManufacturers))
            dispatch(setMinPrice(filterData.minPrice))
            dispatch(setMaxPrice(filterData.maxPrice))
            dispatch(setAllWarranties(filterData.allWarranties))
            if (extraFilterDispatches) extraFilterDispatches(filterData)
         }
      },
   })
}

export default useFilter

import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'

import {
   setAllManufacturer,
   setMinPrice,
   setMaxPrice,
   setPriceRange,
   setAllWarranties,
} from '@/reduxStore/slices/Filter/BaseFilterDataSlice'
import type { FilterTypes } from '@/types/filterTypes'

const useFilter = (filterData: FilterTypes, extraFilterDispatches?: (params: any) => void) => {
   const dispatch = useAppDispatch()
   const [isFetched, setIsFetched] = useState(false)

   useEffect(() => {
      if (filterData) {
         setIsFetched(true)
         dispatch(setPriceRange([filterData.minPrice, filterData.maxPrice]))
         dispatch(setAllManufacturer(filterData.allManufacturers))
         dispatch(setMinPrice(filterData.minPrice))
         dispatch(setMaxPrice(filterData.maxPrice))
         dispatch(setAllWarranties(filterData.allWarranties))
         if (extraFilterDispatches) extraFilterDispatches(filterData)
      }
   }, [filterData, dispatch])

   return isFetched
}

export default useFilter

import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'

import { setPriceRange, setTotalProductCount } from '@/reduxStore/slices/Filter/BaseFilterDataSlice'
import type { ProductFilterType } from '@/types/filterTypes'

const useFilter = (filterData: ProductFilterType, extraFilterDispatches?: (params: any) => void) => {
   const dispatch = useAppDispatch()
   const [isFetched, setIsFetched] = useState(false)

   useEffect(() => {
      if (filterData) {
         setIsFetched(true)
         dispatch(setPriceRange([filterData.minPrice, filterData.maxPrice]))
         dispatch(setTotalProductCount(filterData.totalProducts))
         if (extraFilterDispatches) extraFilterDispatches(filterData)
      }
   }, [filterData, dispatch])

   return isFetched
}

export default useFilter

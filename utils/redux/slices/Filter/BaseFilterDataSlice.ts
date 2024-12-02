import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterTypes } from '@Types/filterTypes'

const initialState: FilterTypes = {
   page: 0,
   perPage: 12,
   totalProducts: 0,
   selectedManufacturer: 'all',
   selectedWarranty: 'all',
   orderBy: 'asc',
   priceRange: [0, 5000000],
   productName: '',
}

const BaseFilterData = createSlice({
   name: 'filterData',
   initialState,
   reducers: {
      setPage: (state, action: PayloadAction<number>) => {
         state.page = action.payload
      },
      setPerPage: (state, action: PayloadAction<number>) => {
         state.perPage = action.payload
      },
      setTotalProductCount: (state, action: PayloadAction<number>) => {
         state.totalProducts = action.payload
      },
      setSelectedManufacturer: (state, action: PayloadAction<string>) => {
         state.selectedManufacturer = action.payload
      },
      setOrderBy: (state, action: PayloadAction<string>) => {
         state.orderBy = action.payload || 'asc'
      },
      setPriceRange: (state, action: PayloadAction<number[]>) => {
         state.priceRange = action.payload || [0, 5000000]
      },
      setProductName: (state, action: PayloadAction<string>) => {
         state.productName = action.payload
      },
      setSelectedWarranty: (state, action: PayloadAction<string>) => {
         state.selectedWarranty = action.payload
      },
   },
})

export const {
   setSelectedManufacturer,
   setOrderBy,
   setPriceRange,
   setSelectedWarranty,
   setProductName,
   setPage,
   setPerPage,
   setTotalProductCount,
} = BaseFilterData.actions

export default BaseFilterData.reducer

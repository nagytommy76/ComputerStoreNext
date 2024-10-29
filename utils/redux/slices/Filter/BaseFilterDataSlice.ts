import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterTypes } from '@Types/filterTypes'

const initialState: FilterTypes = {
   allManufacturers: [],
   selectedManufacturer: 'all',
   allWarranties: [],
   selectedWarranty: 'all',
   maxPrice: 200,
   minPrice: 0,
   orderBy: 'asc',
   priceRange: [0, 5000000],
   productName: '',
}

const BaseFilterData = createSlice({
   name: 'filterData',
   initialState,
   reducers: {
      setFilterOptions: (
         state,
         action: PayloadAction<{ allManufacturers?: string[]; minPrice?: number; maxPrice?: number }>
      ) => {
         state.allManufacturers = action.payload.allManufacturers || []
         state.minPrice = action.payload.minPrice || 0
         state.maxPrice = action.payload.maxPrice || 5000000
      },
      setAllManufacturer: (state, action: PayloadAction<string[]>) => {
         state.allManufacturers = action.payload
      },
      setSelectedManufacturer: (state, action: PayloadAction<string>) => {
         state.selectedManufacturer = action.payload
      },
      setMinPrice: (state, action: PayloadAction<number>) => {
         state.minPrice = action.payload
      },
      setMaxPrice: (state, action: PayloadAction<number>) => {
         state.maxPrice = action.payload
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
      setAllWarranties: (state, action: PayloadAction<string[]>) => {
         state.allWarranties = action.payload
      },
      setSelectedWarranty: (state, action: PayloadAction<string>) => {
         state.selectedWarranty = action.payload
      },
   },
})

export const {
   setFilterOptions,
   setAllManufacturer,
   setSelectedManufacturer,
   setMaxPrice,
   setMinPrice,
   setOrderBy,
   setPriceRange,
   setAllWarranties,
   setSelectedWarranty,
   setProductName,
} = BaseFilterData.actions

export default BaseFilterData.reducer

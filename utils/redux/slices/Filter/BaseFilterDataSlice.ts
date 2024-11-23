import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterTypes } from '@Types/filterTypes'

const initialState: FilterTypes = {
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

export const { setSelectedManufacturer, setOrderBy, setPriceRange, setSelectedWarranty, setProductName } =
   BaseFilterData.actions

export default BaseFilterData.reducer

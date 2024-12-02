import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseFetchedProductType } from '@Types/productType'

const initialState: InitialState = {
   products: [],
   isLoading: false,
}

const ProductsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<BaseFetchedProductType[]>) => {
         state.products = action.payload
      },
      setIsLoading: (state, action: PayloadAction<boolean>) => {
         state.isLoading = action.payload
      },
   },
})

export const { setProducts, setIsLoading } = ProductsSlice.actions

export default ProductsSlice.reducer

type InitialState = {
   products: BaseFetchedProductType[]
   isLoading: boolean
}

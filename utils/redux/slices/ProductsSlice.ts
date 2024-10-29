import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseFetchedProductType } from '@Types/productType'

const initialState: InitialState = {
   products: [],
   totalProductCount: 0,
}

const ProductsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<BaseFetchedProductType[]>) => {
         state.products = action.payload
      },
      setTotalProductCount: (state, action: PayloadAction<number>) => {
         state.totalProductCount = action.payload
      },
   },
})

export const { setProducts, setTotalProductCount } = ProductsSlice.actions

export default ProductsSlice.reducer

type InitialState = {
   products: BaseFetchedProductType[]
   totalProductCount: number
}

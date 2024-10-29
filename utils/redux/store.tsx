import { configureStore } from '@reduxjs/toolkit'

import ThemeSlice from './slices/ThemeSlice'
import ProductsSlice from './slices/ProductsSlice'
import BaseFilterDataSlice from './slices/Filter/BaseFilterDataSlice'
import VgaFilterSlice from './slices/Filter/VgaFilterSlice'

export const makeStore = () => {
   return configureStore({
      reducer: {
         theme: ThemeSlice,
         products: ProductsSlice,
         filter: BaseFilterDataSlice,
         vgaFilter: VgaFilterSlice,
      },
   })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

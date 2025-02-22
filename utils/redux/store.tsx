import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from './NoopStorage'

import ThemeSlice from './slices/ThemeSlice'
import ProductsSlice from './slices/ProductsSlice'
import BaseFilterDataSlice from './slices/Filter/BaseFilterDataSlice'
import CartSlice from './slices/Cart/CartSlice'
import VgaFilterSlice from './slices/Filter/VgaFilterSlice'
import CpuFilterSlice from './slices/Filter/CpuFilter'
import MemoryFilterSlice from './slices/Filter/MemoryFilter'

const rootReducer = combineReducers({
   theme: ThemeSlice,
   products: ProductsSlice,
   filter: BaseFilterDataSlice,
   vgaFilter: VgaFilterSlice,
   cpuFilter: CpuFilterSlice,
   memoryFilter: MemoryFilterSlice,
   cart: persistReducer({ key: 'Cart', storage }, CartSlice),
})

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
      }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

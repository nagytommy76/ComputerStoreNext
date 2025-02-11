import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
   persistReducer,
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import ThemeSlice from './slices/ThemeSlice'
import ProductsSlice from './slices/ProductsSlice'
import BaseFilterDataSlice from './slices/Filter/BaseFilterDataSlice'
import VgaFilterSlice from './slices/Filter/VgaFilterSlice'
import CpuFilterSlice from './slices/Filter/CpuFilter'
import CartSlice from './slices/Cart/CartSlice'

const rootReducer = combineReducers({
   theme: ThemeSlice,
   products: ProductsSlice,
   filter: BaseFilterDataSlice,
   vgaFilter: VgaFilterSlice,
   cpuFilter: CpuFilterSlice,
   cart: persistReducer({ key: 'Cart', storage }, CartSlice),
})

export const makeStore = () => {
   const isServer = typeof window === 'undefined'
   if (isServer) {
      return configureStore({
         reducer: rootReducer,
      })
   } else {
      const store = configureStore({
         reducer: rootReducer,
         middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
               serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
               },
            }),
      })
      store.__persistor = persistStore(store)
      return store
   }
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Props = {
   memoryType: 'all',
   selectedFrequencyRange: [400, 14000],
   selectedCapacity: [2, 64],
   selectedLatency: [8, 60],
}

const MemoryFilterData = createSlice({
   name: 'memoryFilterData',
   initialState,
   reducers: {
      setMemoryType: (state, { payload }: PayloadAction<string>) => {
         state.memoryType = payload
      },
      setSelectedFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedFrequencyRange = payload
      },
      setSelectedCapacity: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedCapacity = payload
      },
      setSelectedLatency: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedLatency = payload
      },
   },
})

export const { setMemoryType, setSelectedFrequencyRange, setSelectedCapacity, setSelectedLatency } =
   MemoryFilterData.actions

export default MemoryFilterData.reducer

type Props = {
   memoryType: string
   selectedFrequencyRange: number[]
   selectedCapacity: number[]
   selectedLatency: number[]
}

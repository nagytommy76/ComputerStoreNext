import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CpuFilterSlice = {
   selectedSocket: 'all',
   selectedThreadCount: [2, 128],
   selectedCoreCount: [2, 128],
   selectedTurboFrequency: [2000, 6000],
   selectedBaseFrequency: [2000, 6000],
   selectedL3Cache: [1, 256],
   selectedTDP: [25, 300],
}

const CpuFilterData = createSlice({
   name: 'cpuFilterData',
   initialState,
   reducers: {
      setSelectedSocket: (state, { payload }: PayloadAction<string>) => {
         state.selectedSocket = payload
      },
      setSelectedThreadCountRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedThreadCount = payload
      },
      setSelectedCoreCountRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedCoreCount = payload
      },
      setSelectedBaseFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBaseFrequency = payload
      },
      setSelectedTurboFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedTurboFrequency = payload
      },
      setSelectedL3CacheRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedL3Cache = payload
      },
      setSelectedTDPRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedTDP = payload
      },
   },
})

export const {
   setSelectedBaseFrequencyRange,
   setSelectedCoreCountRange,
   setSelectedSocket,
   setSelectedL3CacheRange,
   setSelectedTDPRange,
   setSelectedThreadCountRange,
   setSelectedTurboFrequencyRange,
} = CpuFilterData.actions

export default CpuFilterData.reducer

type CpuFilterSlice = {
   selectedSocket: string

   selectedCoreCount: number[]
   selectedThreadCount: number[]

   selectedBaseFrequency: number[]
   selectedTurboFrequency: number[]

   selectedL3Cache: number[]

   selectedTDP: number[]
}

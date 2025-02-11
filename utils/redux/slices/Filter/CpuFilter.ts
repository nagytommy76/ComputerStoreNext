import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CpuFilterSlice = {
   allSocket: ['AM4', 'LGA-1200', 'sWRX8', 'LGA2011-3'],
   selectedSocket: 'all',
   threadCounts: [2, 128],
   selectedThreadCount: [2, 128],
   coreCounts: [2, 128],
   selectedCoreCount: [2, 128],
   turboFrequency: [2000, 6000],
   selectedTurboFrequency: [2000, 6000],
   baseFrequency: [2000, 6000],
   selectedBaseFrequency: [2000, 6000],
   l3Cache: [1, 256],
   selectedL3Cache: [1, 256],
   tdp: [25, 300],
   selectedTDP: [25, 300],
}

const CpuFilterData = createSlice({
   name: 'cpuFilterData',
   initialState,
   reducers: {
      setAllSockets: (state, { payload }: PayloadAction<string[]>) => {
         state.allSocket = payload
      },
      setSelectedSocket: (state, { payload }: PayloadAction<string>) => {
         state.selectedSocket = payload
      },
      setCoreCounts: (state, { payload }: PayloadAction<number[]>) => {
         state.coreCounts = payload
      },
      setThreadCounts: (state, { payload }: PayloadAction<number[]>) => {
         state.threadCounts = payload
      },
      setSelectedThreadCountRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedThreadCount = payload
      },
      setSelectedCoreCountRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedCoreCount = payload
      },
      setBaseFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.baseFrequency = payload
      },
      setSelectedBaseFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBaseFrequency = payload
      },
      setTurboFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.turboFrequency = payload
      },
      setSelectedTurboFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedTurboFrequency = payload
      },
      setL3CacheRange: (state, { payload }: PayloadAction<number[]>) => {
         state.l3Cache = payload
      },
      setSelectedL3CacheRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedL3Cache = payload
      },
      setTDPRange: (state, { payload }: PayloadAction<number[]>) => {
         state.tdp = payload
      },
      setSelectedTDPRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedTDP = payload
      },
   },
})

export const {
   setAllSockets,
   setBaseFrequencyRange,
   setCoreCounts,
   setSelectedBaseFrequencyRange,
   setSelectedCoreCountRange,
   setSelectedSocket,
   setL3CacheRange,
   setSelectedL3CacheRange,
   setSelectedTDPRange,
   setSelectedThreadCountRange,
   setSelectedTurboFrequencyRange,
   setTDPRange,
   setThreadCounts,
   setTurboFrequencyRange,
} = CpuFilterData.actions

export default CpuFilterData.reducer

type CpuFilterSlice = {
   allSocket: string[]
   selectedSocket: string

   coreCounts: number[]
   selectedCoreCount: number[]
   threadCounts: number[]
   selectedThreadCount: number[]

   baseFrequency: number[]
   selectedBaseFrequency: number[]
   turboFrequency: number[]
   selectedTurboFrequency: number[]

   l3Cache: number[]
   selectedL3Cache: number[]

   tdp: number[]
   selectedTDP: number[]
}

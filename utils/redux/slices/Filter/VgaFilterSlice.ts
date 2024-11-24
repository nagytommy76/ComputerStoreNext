import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { VgaFilterSlice } from '../../../../components/Shop/Vga/types'

const initialState: VgaFilterSlice = {
   selectedGpuMan: 'all',
   selectedBaseClockRange: [500, 2000],
   selectedBoostClockRange: [500, 2000],
   selectedPcie: 'all',
   selectedVramCapRange: [2, 24],
   selectedVramType: 'all',
   selectedVramBandwidth: [128, 512],
   selectedPowerConsuption: [50, 400],
   selectedLength: [200, 500],
}

const VgaFilterSlice = createSlice({
   name: 'vgaFilter',
   initialState,
   reducers: {
      setSelectedGpuManufacturer: (state, { payload }: PayloadAction<string>) => {
         state.selectedGpuMan = payload
      },
      setSelectedBaseClockRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBaseClockRange = payload
      },
      setSelectedBoostClockRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBoostClockRange = payload
      },
      setSelectedPcie: (state, { payload }: PayloadAction<string>) => {
         state.selectedPcie = payload
      },
      setSelectedVramCapRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedVramCapRange = payload
      },
      setSelectedVramType: (state, { payload }: PayloadAction<string>) => {
         state.selectedVramType = payload
      },
      setSelectedVramBandwidth: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedVramBandwidth = payload
      },
      setSelectedPowerConsuption: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedPowerConsuption = payload
      },
      setSelectedLength: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedLength = payload
      },
   },
})

export const {
   setSelectedBaseClockRange,
   setSelectedBoostClockRange,
   setSelectedGpuManufacturer,
   setSelectedLength,
   setSelectedPcie,
   setSelectedPowerConsuption,
   setSelectedVramBandwidth,
   setSelectedVramCapRange,
   setSelectedVramType,
} = VgaFilterSlice.actions

export default VgaFilterSlice.reducer

export interface VgaFilterSlice {
   selectedGpuMan: string
   selectedBaseClockRange: number[]
   selectedBoostClockRange: number[]
   selectedPcie: string
   selectedVramCapRange: number[]
   selectedVramType: string
   selectedVramBandwidth: number[]
   selectedPowerConsuption: number[]
   selectedLength: number[]
}

export interface VgaFilterType {
   gpuManufacturer: string[]
   pciType: string[]
   vramType: string[]
   minBaseClock: number
   maxBaseClock: number
   minBoostClock: number
   maxBoostClock: number
   minLength: number
   maxLength: number
   minTdp: number
   maxTdp: number
   minVramBandwidth: number
   maxVramBandwidth: number
   minVramCapacity: number
   maxVramCapacity: number
}

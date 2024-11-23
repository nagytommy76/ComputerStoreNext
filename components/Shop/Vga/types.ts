export interface VgaFilterType {
   gpuManufacturers: string[]
   selectedGpuMan: string

   baseClockRange: number[]
   selectedBaseClockRange: number[]

   boostClockRange: number[]
   selectedBoostClockRange: number[]

   pcieTypes: string[]
   selectedPcie: string

   vramCapacitiyRange: number[]
   selectedVramCapRange: number[]

   vramTypes: string[]
   selectedVramType: string

   vramBandwidths: number[]
   selectedVramBandwidth: number[]

   powerConsuptions: number[]
   selectedPowerConsuption: number[]

   lengths: number[]
   selectedLength: number[]
}

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

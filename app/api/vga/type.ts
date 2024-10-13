import { BaseSearchParamsType } from '../types/paramTypes'
export default interface VgaSearchParamsType extends BaseSearchParamsType {
   baseClock: string
   boostClock: string
   gpuManufacturer: string
   length: string
   pciType: string
   tdp: string
   vramBandwidth: string
   vramCapacity: string
   vramType: string
}

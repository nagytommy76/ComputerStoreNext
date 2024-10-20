export interface BaseFilterType {
   currentPage: number
   perPage: number
   orderBy: 'asc' | 'desc'
   byManufacturer: string
   priceRange: number[]
   selectedWarranty: string
   productName: string
}

export interface VgaFilterType extends BaseFilterType {
   baseClock: number[]
   boostClock: number[]
   gpuManufacturer: string
   length: number[]
   pciType: string
   tdp: number[]
   vramBandwidth: number[]
   vramCapacity: number[]
   vramType: string
}

export const filterVgaData: VgaFilterType = {
   currentPage: 1,
   perPage: 15,
   orderBy: 'asc',
   byManufacturer: '',
   priceRange: [0, 5000000],
   selectedWarranty: '',
   productName: '',
   baseClock: [0, 5000],
   boostClock: [0, 5000],
   gpuManufacturer: '',
   length: [0, 1800],
   pciType: '',
   tdp: [0, 5000],
   vramBandwidth: [0, 2000],
   vramCapacity: [0, 500],
   vramType: '',
}

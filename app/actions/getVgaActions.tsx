'use server'
import { VgaProduct } from '@/models/vga'
import type { BaseProductType } from '@Types/baseModelTypes'

interface BaseFilterType {
   currentPage: number
   perPage: number
   orderBy: 'asc' | 'desc'
   byManufacturer: string
   priceRange: number[]
   selectedWarranty: string
   productName: string
}

interface VgaFilterType extends BaseFilterType {
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

const filterVgaData: VgaFilterType = {
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

export default async function getVga(filterVga: VgaFilterType = filterVgaData) {
   const {
      //   currentPage,
      //   perPage,
      orderBy,
      byManufacturer,
      priceRange,
      selectedWarranty,
      productName,
      baseClock,
      boostClock,
      gpuManufacturer,
      length,
      pciType,
      tdp,
      vramBandwidth,
      vramCapacity,
      vramType,
   } = filterVga

   try {
      const foundVgas = await VgaProduct.find<BaseProductType>({
         //  manufacturer: new RegExp(byManufacturer, 'i'),
         //  $or: [
         //     { type: new RegExp(productName, 'i') },
         //     { typeCode: new RegExp(productName, 'i') },
         //     { itemNumber: new RegExp(productName, 'i') },
         //  ],
         //  warranty: selectedWarranty === 'all' ? null : { 'details.warranity': selectedWarranty },
         //  price: { $gte: priceRange[0], $lte: priceRange[1] },
         //  'details.gpuBaseClock': { $gte: baseClock[0], $lte: baseClock[1] },
         //  'details.gpuPeakClock': { $gte: boostClock[0], $lte: boostClock[1] },
         //  'details.length': { $gte: length[0], $lte: length[1] },
         //  'details.powerConsuption': { $gte: tdp[0], $lte: tdp[1] },
         //  'details.vramBandwidth': { $gte: vramBandwidth[0], $lte: vramBandwidth[1] },
         //  'details.vramCapacity': { $gte: vramCapacity[0], $lte: vramCapacity[1] },
         //  'details.gpuManufacturer': new RegExp(gpuManufacturer, 'i'),
         //  'details.pcieType': new RegExp(pciType, 'i'),
         //  'details.vramType': new RegExp(vramType, 'i'),
      }).select('itemNumber price manufacturer type typeCode pictureUrls ratingValues._id')
      //  .sort({ price: orderBy })
      console.log(foundVgas)
      return foundVgas
   } catch (error) {
      console.log(error)
   }
}

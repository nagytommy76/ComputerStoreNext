'use server'
import { VgaProduct } from '@/models/vga'
import type { BaseFetchedProductType } from '@/types/productType'
import { VgaFilterType, filterVgaData } from './helpers'
import dbConnect from '@DBConnect'

export default async function getVga(filterVga: VgaFilterType = filterVgaData) {
   await dbConnect()
   const {
      //   currentPage,
      //   perPage,
      orderBy,
      byManufacturer,
      priceRange,
      // selectedWarranty,
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
      const foundVgas = await VgaProduct.find<BaseFetchedProductType>({
         manufacturer: new RegExp(byManufacturer, 'i'),
         $or: [
            { type: new RegExp(productName, 'i') },
            { typeCode: new RegExp(productName, 'i') },
            { itemNumber: new RegExp(productName, 'i') },
         ],
         price: { $gte: priceRange[0], $lte: priceRange[1] },
         // 'details.warranity': new RegExp(selectedWarranty, 'i'),
         'details.gpuBaseClock': { $gte: baseClock[0], $lte: baseClock[1] },
         'details.gpuPeakClock': { $gte: boostClock[0], $lte: boostClock[1] },
         'details.length': { $gte: length[0], $lte: length[1] },
         'details.powerConsuption': { $gte: tdp[0], $lte: tdp[1] },
         'details.vramBandwidth': { $gte: vramBandwidth[0], $lte: vramBandwidth[1] },
         'details.vramCapacity': { $gte: vramCapacity[0], $lte: vramCapacity[1] },
         'details.gpuManufacturer': new RegExp(gpuManufacturer, 'i'),
         'details.pcieType': new RegExp(pciType, 'i'),
         'details.vramType': new RegExp(vramType, 'i'),
      })
         .select('itemNumber price manufacturer type typeCode pictureUrls ratingValues._id')
         .sort({ price: orderBy })

      return foundVgas
   } catch (error) {
      console.log(error)
   }
}

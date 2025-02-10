import dbConnect from '@DBConnect'
import { VgaProduct } from '@Models/Vga/vga'
import { type NextRequest } from 'next/server'

import BaseProductRoute, { convertSearchParamsToQueryObject } from '@/Services/BaseProductRoute'

export async function GET(request: NextRequest) {
   await dbConnect()

   const paramsObject = convertSearchParamsToQueryObject(request.nextUrl.searchParams)

   // VGA specific
   const selectedPciType = paramsObject['pciType'] == 'all' ? '' : paramsObject['pciType']
   const selectedVramType = paramsObject['vramType'] == 'all' ? '' : paramsObject['vramType']
   const baseClockRange = paramsObject['baseClock'].split(',')
   const boostClockRange = paramsObject['boostClock'].split(',')
   const selectedGpuMan = paramsObject['gpuManufacturer'] == 'all' ? '' : paramsObject['gpuManufacturer']
   const selectedLength = paramsObject['length'].split(',')
   const selectedPowerConsuption = paramsObject['tdp'].split(',')
   const selectedVramBandwidth = paramsObject['vramBandwidth'].split(',')
   const selectedVramCapRange = paramsObject['vramCapacity'].split(',')

   const extraQueryParameters = {
      'details.gpuBaseClock': { $gte: baseClockRange[0], $lte: baseClockRange[1] },
      'details.gpuPeakClock': { $gte: boostClockRange[0], $lte: boostClockRange[1] },
      'details.length': { $gte: selectedLength[0], $lte: selectedLength[1] },
      'details.powerConsuption': { $gte: selectedPowerConsuption[0], $lte: selectedPowerConsuption[1] },
      'details.vramBandwidth': { $gte: selectedVramBandwidth[0], $lte: selectedVramBandwidth[1] },
      'details.vramCapacity': { $gte: selectedVramCapRange[0], $lte: selectedVramCapRange[1] },
      'details.gpuManufacturer': new RegExp(selectedGpuMan, 'i'),
      'details.pcieType': new RegExp(selectedPciType, 'i'),
      'details.vramType': new RegExp(selectedVramType, 'i'),
   }

   const products = await BaseProductRoute(request.nextUrl.searchParams, VgaProduct, extraQueryParameters)

   return new Response(JSON.stringify({ products }))
}

// https://node-api-q6rm.onrender.com/api/vga?currentPage=1&perPage=15&orderBy=asc&byManufacturer=all&priceRange=125990,1003790
// &selectedWarranty=all&productName=%20%20%20%20%20%20%20%20%20&baseClock=1410,2548&boostClock=1695,2622
//  &gpuManufacturer=all&length=202,340&pciType=all&tdp=125,650&vramBandwidth=128,384&vramCapacity=6,24&vramType=all

import dbConnect from '@DBConnect'
import { VgaProduct } from '@Models/vga'
import type { BaseProductType } from '@Types/baseModelTypes'
import { type NextRequest } from 'next/server'
// import type VgaSearchParamsType from './type'

export async function GET(request: NextRequest) {
   await dbConnect()
   const paramsObject: { [key: string]: string } = {}

   const searchParams = request.nextUrl.searchParams
   searchParams.forEach((value, key) => {
      paramsObject[key] = value
   })

   const selectedGpuMan = paramsObject['gpuManufacturer'] == 'all' ? '' : paramsObject['gpuManufacturer']

   // console.log(selectedGpuMan)

   const vgaProducts = await VgaProduct.find<BaseProductType>({})
      .select('itemNumber price manufacturer type typeCode pictureUrls ratingValues._id')
      .sort({ price: 'asc' })

   return new Response(JSON.stringify({ vgaProducts }))
}

// https://node-api-q6rm.onrender.com/api/vga?currentPage=1&perPage=15&orderBy=asc&byManufacturer=all&priceRange=125990,1003790
// &selectedWarranty=all&productName=%20%20%20%20%20%20%20%20%20&baseClock=1410,2548&boostClock=1695,2622
//  &gpuManufacturer=all&length=202,340&pciType=all&tdp=125,650&vramBandwidth=128,384&vramCapacity=6,24&vramType=all

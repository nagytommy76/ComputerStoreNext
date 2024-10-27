import dbConnect from '@DBConnect'
import { VgaProduct } from '@Models/vga'
import type { BaseProductType } from '@Types/baseModelTypes'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
   await dbConnect()
   const paramsObject: { [key: string]: string } = {}

   const searchParams = request.nextUrl.searchParams
   searchParams.forEach((value, key) => {
      paramsObject[key] = value
   })

   const selectedGpuMan = paramsObject['byManufacturer'] == 'all' ? '' : paramsObject['byManufacturer']
   const orderByPrice: 'asc' | 'desc' = paramsObject['orderBy'] == 'asc' ? 'asc' : 'desc'
   const priceRange = paramsObject['priceRange'].split(',').map(Number)
   const warranty =
      paramsObject['selectedWarranty'] == 'all'
         ? null
         : { 'details.warranity': paramsObject['selectedWarranty'] }
   const productName = paramsObject['productName'] || ''

   const products = await VgaProduct.find<BaseProductType>({
      manufacturer: new RegExp(selectedGpuMan, 'i'),
      $or: [
         { type: new RegExp(productName, 'i') },
         { typeCode: new RegExp(productName, 'i') },
         { itemNumber: new RegExp(productName, 'i') },
      ],
      price: { $gte: priceRange[0], $lte: priceRange[1] },
      ...warranty,
   })
      .select('itemNumber price manufacturer type typeCode pictureUrls ratingValues._id')
      .sort({ price: orderByPrice })
      .lean()

   return new Response(JSON.stringify({ products }))
}

// https://node-api-q6rm.onrender.com/api/vga?currentPage=1&perPage=15&orderBy=asc&byManufacturer=all&priceRange=125990,1003790
// &selectedWarranty=all&productName=%20%20%20%20%20%20%20%20%20&baseClock=1410,2548&boostClock=1695,2622
//  &gpuManufacturer=all&length=202,340&pciType=all&tdp=125,650&vramBandwidth=128,384&vramCapacity=6,24&vramType=all

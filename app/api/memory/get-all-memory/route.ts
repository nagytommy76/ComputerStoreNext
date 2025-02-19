import dbConnect from '@DBConnect'
import { MemoryProduct } from '@Models/Memory/memory'
import { type NextRequest } from 'next/server'

import BaseProductRoute, { convertSearchParamsToQueryObject } from '@/Services/BaseProductRoute'

export async function GET(request: NextRequest) {
   await dbConnect()

   const paramsObject = convertSearchParamsToQueryObject(request.nextUrl.searchParams)

   const memoryType = paramsObject['memoryType'] == 'all' ? '' : paramsObject['memoryType']
   const selectedCapacity = paramsObject['capacity'].split(',')
   const selectedLatencyRange = paramsObject['latency'].split(',')
   const selectedFrequencyRange = paramsObject['frequency'].split(',')

   const extraQueryParams = {
      'details.memoryType': new RegExp(memoryType, 'i'),
      'details.capacity': { $gte: selectedCapacity[0], $lte: selectedCapacity[1] },
      'details.latency': { $gte: selectedLatencyRange[0], $lte: selectedLatencyRange[1] },
      'details.frequency': { $gte: selectedFrequencyRange[0], $lte: selectedFrequencyRange[1] },
   }

   const products = await BaseProductRoute(request.nextUrl.searchParams, MemoryProduct, extraQueryParams)

   return new Response(JSON.stringify({ products }))
}

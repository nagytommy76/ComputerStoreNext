import dbConnect from '@DBConnect'
import { CpuProduct } from '@Models/Cpu/cpu'
import { type NextRequest } from 'next/server'

import BaseProductRoute, { convertSearchParamsToQueryObject } from '@/Services/BaseProductRoute'

export async function GET(request: NextRequest) {
   await dbConnect()

   const paramsObject = convertSearchParamsToQueryObject(request.nextUrl.searchParams)

   const socket = paramsObject['socket'] == 'all' ? '' : paramsObject['socket']
   const coreRange = paramsObject['coreCount'].split(',')
   const threadRange = paramsObject['threadCount'].split(',')
   const frequencyRange = paramsObject['baseFrequency'].split(',')
   const turboRange = paramsObject['turboFrequency'].split(',')
   const tdp = paramsObject['tdp'].split(',')
   const l3Range = paramsObject['l3Cache'].split(',')

   const extraQueryParams = {
      'details.socket': new RegExp(socket, 'i'),
      'details.coreCount': { $gte: coreRange[0], $lte: coreRange[1] },
      'details.threadCount': { $gte: threadRange[0], $lte: threadRange[1] },
      'details.baseClock': { $gte: frequencyRange[0], $lte: frequencyRange[1] },
      'details.boostClock': { $gte: turboRange[0], $lte: turboRange[1] },
      'details.l3Cache': { $gte: l3Range[0], $lte: l3Range[1] },
      'details.TDP': { $gte: tdp[0], $lte: tdp[1] },
   }

   const products = await BaseProductRoute(request.nextUrl.searchParams, CpuProduct, extraQueryParams)

   return new Response(JSON.stringify({ products }))
}

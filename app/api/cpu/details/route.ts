import { CpuProduct } from '@Models/Cpu/cpu'
import { type NextRequest } from 'next/server'

import DetailsClass from '@/services/DetailsClass'

export async function GET(request: NextRequest) {
   const Details = new DetailsClass()

   const foundCpuDetails = await Details.returnProductDetails(
      request.nextUrl.searchParams,
      'cpuId',
      CpuProduct
   )

   return new Response(JSON.stringify({ foundCpuDetails }), { status: 200 })
}

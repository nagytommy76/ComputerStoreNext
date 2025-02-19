import { MemoryProduct } from '@Models/Memory/memory'
import DetailsClass from '@/services/DetailsClass'

import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
   const Details = new DetailsClass()

   const foundMemoryDetails = await Details.returnProductDetails(
      request.nextUrl.searchParams,
      'memoryId',
      MemoryProduct
   )

   return new Response(JSON.stringify({ foundMemoryDetails }), { status: 200 })
}

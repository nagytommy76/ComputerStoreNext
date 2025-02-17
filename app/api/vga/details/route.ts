import { VgaProduct } from '@Models/Vga/vga'
import { type NextRequest } from 'next/server'

import DetailsClass from '@/services/DetailsClass'

export async function GET(request: NextRequest) {
   const Details = new DetailsClass()

   const foundVgaDetails = await Details.returnProductDetails(
      request.nextUrl.searchParams,
      'vgaId',
      VgaProduct
   )

   return new Response(JSON.stringify({ foundVgaDetails }), { status: 200 })
}

import dbConnect from '@DBConnect'
import { VgaProduct } from '@Models/vga'
import { type NextRequest } from 'next/server'
import { convertSearchParamsToQueryObject } from '@/Services/BaseProductRoute'

export async function GET(request: NextRequest) {
   await dbConnect()

   const paramsObject = convertSearchParamsToQueryObject(request.nextUrl.searchParams)
   const vgaId = paramsObject['vgaId']
   const foundVgaDetails = await VgaProduct.findOne({ _id: vgaId })
      .select(['_id', 'type', 'typeCode', 'itemNumber', 'manufacturer', 'pictureUrls', 'price', 'details'])
      .sort({ 'details.chartData.timpestamp': 1 })
      .lean()

   return new Response(JSON.stringify({ foundVgaDetails }), { status: 200 })
}

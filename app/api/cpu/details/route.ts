import dbConnect from '@DBConnect'
import { CpuProduct } from '@Models/Cpu/cpu'
import { type NextRequest } from 'next/server'
import { convertSearchParamsToQueryObject } from '@/Services/BaseProductRoute'

export async function GET(request: NextRequest) {
   await dbConnect()

   const paramsObject = convertSearchParamsToQueryObject(request.nextUrl.searchParams)
   const cpuId = paramsObject['cpuId']
   const foundCpuDetails = await CpuProduct.findOne({ _id: cpuId })
      .select([
         '_id',
         'type',
         'typeCode',
         'ratingValues',
         'itemNumber',
         'manufacturer',
         'pictureUrls',
         'price',
         'details',
      ])
      .sort({ 'details.chartData.timpestamp': 1 })
      .lean()

   return new Response(JSON.stringify({ foundCpuDetails }), { status: 200 })
}

import { NextResponse, NextRequest } from 'next/server'
import dbConnect from '@DBConnect'
import { convertSearchParamsToQueryObject } from '@/services/BaseProductRoute'

export async function GET(request: NextRequest) {
   const paramsObject = convertSearchParamsToQueryObject(request.nextUrl.searchParams)
   await dbConnect()

   return NextResponse.json({ paramsObject }, { status: 200 })
}

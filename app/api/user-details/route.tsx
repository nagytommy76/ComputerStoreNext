import { NextResponse, NextRequest } from 'next/server'
import { convertSearchParamsToQueryObject } from '@/services/BaseProductRoute'
import dbConnect from '@DBConnect'

import User from '@Models/User/User'
import GoogleUser from '@Models/User/GoogleUser'

export async function GET(request: NextRequest) {
   const paramsObject = convertSearchParamsToQueryObject(request.nextUrl.searchParams)
   const email = paramsObject.email
   await dbConnect()

   const user = await User.findOne({ email }).select(['userDetails', 'email', 'userName'])
   if (!user) {
      const googleUser = await GoogleUser.findOne({ email }).select(['userDetails', 'email', 'name'])
      if (googleUser) {
         return NextResponse.json({ user: googleUser }, { status: 200 })
      }
   }

   return NextResponse.json({ user }, { status: 200 })
}

import { NextResponse, NextRequest } from 'next/server'

import dbConnect from '@DBConnect'
import UserModel from '@/models/User/User'
import GoogleUserModel from '@/models/User/GoogleUser'

import type { CartItemsType, ProviderType } from '@/types/userTypes'

export async function POST(request: NextRequest) {
   const data = (await request.json()) as {
      cartItems: CartItemsType[]
      totalPrice: number
      paymentMethod: string
      pickUpOption: string
      authProvider: ProviderType
      email: string
   }
   try {
      await dbConnect()

      switch (data.authProvider) {
         case 'google':
            const googleUser = await GoogleUserModel.findOne({ email: data.email }).select(['orders'])
            if (!googleUser) throw new Error('User not found')
            // googleUser.cartItems = data.cartItems
            // await googleUser.save()

            break
         default:
            const user = await UserModel.findOne({ email: data.email }).select(['orders'])
            if (!user) throw new Error('User not found')
            // user.orders.push({
            //    products: data.cartItems,
            //    totalPrice: data.totalPrice,
            //    paymentMethod: data.paymentMethod,
            //    pickUpOption: data.pickUpOption,
            // })

            break
      }

      return NextResponse.json({ paramsObject: data }, { status: 200 })
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 })
   }
}

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
      deliveryPrice: number
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
            return NextResponse.json({ orderSuccess: true }, { status: 200 })
         default:
            const user = await UserModel.findOne({ email: data.email }).select(['orders'])
            if (!user) throw new Error('User not found')
            const modifiedCartItems = modifyCartItems(data.cartItems)

            user.orders.push({
               products: modifiedCartItems,
               totalPrice: data.totalPrice,
               paymentMethod: data.paymentMethod,
               deliveryType: data.pickUpOption,
               deliveryPrice: data.deliveryPrice,
               orderedAt: new Date(),
            })
            // await user.save()
            return NextResponse.json(
               { orderSuccess: true, lastOrder: user.orders[user.orders.length - 1] },
               { status: 200 }
            )
      }
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 })
   }
}

function modifyCartItems(cartItems: CartItemsType[]) {
   const currentItemsInCart: {
      productID: string
      productName: string
      productQty: number
      productImage: string
      productPrice: number
      productType: string
   }[] = cartItems.map((product) => {
      return {
         productID: product.itemId,
         productImage: product.displayImage,
         productName: product.displayName,
         productQty: product.quantity,
         productPrice: product.price,
         productType: product.productType,
      }
   })

   return currentItemsInCart
}

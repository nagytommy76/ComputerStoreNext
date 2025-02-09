import { Schema } from 'mongoose'
const UserDBDefinitions = {
   orders: [
      {
         orderedAt: { type: Date, default: new Date() },
         totalPrice: { type: Number, default: 0 },
         deliveryType: { type: String, default: '' },
         deliveryPrice: { type: Number, default: 0 },
         paymentMethod: { type: String, default: '' },
         payedAt: { type: Number, default: 0 },
         products: {
            type: [
               {
                  productID: Schema.Types.ObjectId,
                  productName: String,
                  productImage: String,
                  productQty: Number,
                  productPrice: Number,
                  productType: String,
               },
            ],
         },
      },
   ],
   userDetails: {
      firstName: String,
      lastName: String,
      phone: String,
      address: {
         zipCode: Number,
         city: String,
         street: String,
         houseNumber: String,
         floor: String,
         door: String,
      },
   },
   cartItems: [
      {
         itemId: String,
         displayImage: String,
         displayName: String,
         price: Number,
         quantity: Number,
         productType: String,
      },
   ],
}

export default UserDBDefinitions

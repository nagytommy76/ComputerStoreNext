import { Schema } from 'mongoose'

const responses = {
   type: [
      {
         userId: { type: String, required: true, unique: true },
         isLike: { type: Boolean, required: true },
      },
   ],
   required: false,
}

export const ProductRatingValuesSchema = {
   type: [
      {
         userId: { type: Schema.Types.ObjectId, required: true },
         userName: { type: String, required: true },
         rating: { type: Number, required: true },
         ratedAt: { type: Date, required: true },
         comment: { type: String, required: false },
         responses,
         commentAnswers: {
            type: [
               {
                  userId: { type: String, required: true },
                  userName: { type: String, required: true },
                  answer: { type: String, required: true },
                  answeredAt: { type: Date, required: true },
                  parentCommentId: { type: String, required: false, default: null },
                  commentDepth: { type: Number, required: true, default: 1 },
                  responses,
               },
            ],
            required: false,
         },
      },
   ],
   required: false,
}

export const ChartData = {
   type: [
      {
         price: Number,
         timestamp: Number,
      },
   ],
}

export const BaseSchemaPropertiesAndTypes = {
   itemNumber: { type: String },
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: [String], required: true },
   typeCode: { type: String },
   inStockQuantity: { type: Number, default: 0 },
   isHighlighted: { type: Boolean, default: false },
   ratingValues: ProductRatingValuesSchema,
}

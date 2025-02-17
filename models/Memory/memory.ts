import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'
import { ChartData, ProductRatingValuesSchema } from '../helper'
import type { MemoryProductType } from './memoryTypes'

const MemorySchema = new Schema<MemoryProductType>({
   itemNumber: { type: String },
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: [String], required: true },
   typeCode: { type: String },
   details: {
      warranity: Number,
      manufacturerPageUrl: { type: String },
      description: { type: String },
      memoryType: { type: String, required: true },
      capacity: { type: Number, required: true },
      frequency: { type: Number, required: true },
      latency: { type: Number, required: true },
      voltage: { type: Number, required: true },
      moduleNumber: { type: Number, default: 1 },
      chartData: ChartData,
   },
   inStockQuantity: { type: Number, default: 0 },
   isHighlighted: { type: Boolean, default: false },
   ratingValues: ProductRatingValuesSchema,
})

export const MemoryProduct =
   mongoose.models.MemoryProduct || model<MemoryProductType>('MemoryProduct', MemorySchema)

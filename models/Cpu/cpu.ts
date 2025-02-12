import { Schema, model, models } from 'mongoose'
import { CpuType } from './cpuTypes'
import { ChartData, ProductRatingValuesSchema } from '../helper'

const CpuSchema = new Schema<CpuType>({
   itemNumber: { type: String },
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: [String], required: true },
   typeCode: { type: String },
   inStockQuantity: { type: Number, required: true, default: 0 },
   isHighlighted: { type: Boolean, required: false, default: false },
   ratingValues: ProductRatingValuesSchema,
   details: {
      coreCount: { type: Number, required: true },
      threadCount: { type: Number, required: true },
      baseClock: { type: Number, required: true },
      boostClock: { type: Number, required: true },
      TDP: { type: Number, required: true },
      l2Cache: Number,
      l3Cache: { type: Number, required: true },
      socket: { type: String, required: true },
      manufacturerPageUrl: { type: String },
      description: { type: String },
      integratedGraphicsName: { type: String, default: 'Nincs' },
      architecture: { type: String },
      cpuCodeName: { type: String },
      stockCooler: { type: Boolean },
      stockCoolerName: { type: String },
      warranity: Number,
      chartData: ChartData,
   },
})

export const CpuProduct = models.CpuProduct || model<CpuType>('CpuProduct', CpuSchema)

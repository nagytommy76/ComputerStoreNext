import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'
import { VgaType } from './vgaTypes'
import { ChartData, ProductRatingValuesSchema } from '../helper'

const VgaSchema = new Schema<VgaType>({
   itemNumber: { type: String, required: true },
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: [String], required: true },
   inStockQuantity: { type: Number, required: true, default: 0 },
   isHighlighted: { type: Boolean, required: false, default: false },
   ratingValues: ProductRatingValuesSchema,
   details: {
      chartData: ChartData,
      gpuManufacturer: { type: String, required: true },
      pcieType: { type: String, required: true },
      gpuBaseClock: { type: Number, required: true },
      gpuPeakClock: { type: Number, required: true },
      vramCapacity: { type: Number, required: true },
      vramType: { type: String, required: true },
      vramBandwidth: { type: Number, required: true },
      powerConsuption: { type: Number, required: true },
      description: String,
      powerPin: String,
      warranity: Number,
      displayPort: Number,
      DVI: Number,
      HDMI: Number,
      minPowerSupply: Number,
      length: Number,
      manufacturerPageUrl: String,
      vramSpeed: Number,
      streamProcessors: Number,
   },
   typeCode: String,
})

export const VgaProduct = mongoose.models.VgaProduct || model<VgaType>('VgaProduct', VgaSchema)

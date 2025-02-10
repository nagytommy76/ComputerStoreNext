import dbConnect from '@DBConnect'
import { VgaProduct } from '@Models/Vga/vga'

export async function GET() {
   await dbConnect()
   const vgaFilter = await VgaProduct.aggregate([
      {
         $group: {
            _id: null,
            maxPrice: { $max: '$price' },
            minPrice: { $min: '$price' },
            allManufacturers: { $addToSet: '$manufacturer' },
            allWarranties: { $addToSet: '$details.warranity' },
            minBaseClock: { $min: '$details.gpuBaseClock' },
            maxBaseClock: { $max: '$details.gpuBaseClock' },
            minBoostClock: { $min: '$details.gpuPeakClock' },
            maxBoostClock: { $max: '$details.gpuPeakClock' },
            gpuManufacturer: { $addToSet: '$details.gpuManufacturer' },
            minLength: { $min: '$details.length' },
            maxLength: { $max: '$details.length' },
            pciType: { $addToSet: '$details.pcieType' },
            minTdp: { $min: '$details.powerConsuption' },
            maxTdp: { $max: '$details.powerConsuption' },
            minVramBandwidth: { $min: '$details.vramBandwidth' },
            maxVramBandwidth: { $max: '$details.vramBandwidth' },
            minVramCapacity: { $min: '$details.vramCapacity' },
            maxVramCapacity: { $max: '$details.vramCapacity' },
            vramType: { $addToSet: '$details.vramType' },
            totalProducts: { $sum: 1 },
         },
      },
   ])

   return new Response(JSON.stringify({ filterData: vgaFilter[0] }))
}

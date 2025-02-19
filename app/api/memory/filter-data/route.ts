import dbConnect from '@DBConnect'
import { MemoryProduct } from '@Models/Memory/memory'

export async function GET() {
   await dbConnect()
   const memoryFilter = await MemoryProduct.aggregate([
      {
         $group: {
            _id: null,
            maxPrice: { $max: '$price' },
            minPrice: { $min: '$price' },
            allManufacturers: { $addToSet: '$manufacturer' },
            allWarranties: { $addToSet: '$details.warranity' },
            totalProducts: { $sum: 1 },
            minFrequency: { $min: '$details.frequency' },
            maxFrequency: { $max: '$details.frequency' },
            minLatency: { $min: '$details.latency' },
            maxLatency: { $max: '$details.latency' },
            capacities: { $addToSet: '$details.capacity' },
         },
      },
   ])

   return new Response(JSON.stringify({ filterData: memoryFilter[0] }))
}

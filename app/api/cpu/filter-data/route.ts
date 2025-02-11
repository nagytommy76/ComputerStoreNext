import dbConnect from '@DBConnect'
import { CpuProduct } from '@Models/Cpu/cpu'

export async function GET() {
   await dbConnect()
   const cpuFilter = await CpuProduct.aggregate([
      {
         $group: {
            _id: null,
            maxPrice: { $max: '$price' },
            minPrice: { $min: '$price' },
            allManufacturers: { $addToSet: '$manufacturer' },
            allWarranties: { $addToSet: '$details.warranity' },
            minCoreCount: { $min: '$details.coreCount' },
            maxCoreCount: { $max: '$details.coreCount' },
            minThreadCount: { $min: '$details.threadCount' },
            maxThreadCount: { $max: '$details.threadCount' },
            minBaseFrequency: { $min: '$details.baseClock' },
            maxBaseFrequency: { $max: '$details.baseClock' },
            minTurboFrequency: { $min: '$details.boostClock' },
            maxTurboFrequency: { $max: '$details.boostClock' },
            minL3Cache: { $min: '$details.l3Cache' },
            maxL3Cache: { $max: '$details.l3Cache' },
            minTDP: { $min: '$details.TDP' },
            maxTDP: { $max: '$details.TDP' },
            allSockets: { $addToSet: '$details.socket' },
            totalProducts: { $sum: 1 },
         },
      },
   ])

   return new Response(JSON.stringify({ filterData: cpuFilter[0] }))
}

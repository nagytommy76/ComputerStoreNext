import { BaseProductType, ChartDataType } from '@/types/baseModelTypes'

export interface MemoryProductType extends BaseProductType {
   details: MemoryDetails
}

export type MemoryDetails = {
   manufacturerPageUrl?: string
   warranity: number
   description: string
   memoryType: string
   capacity: number
   frequency: number
   latency: number
   voltage: number | string
   moduleNumber?: number
   chartData: ChartDataType[]
}

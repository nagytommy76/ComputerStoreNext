import { BaseProductType, ChartDataType } from '@Types/baseModelTypes'

export type CpuType = BaseProductType & {
   details: CpuDetailsType
}

export type CpuDetailsType = {
   coreCount: number
   threadCount: number
   baseClock: number
   boostClock: number
   TDP: number
   l2Cache: number
   l3Cache: number
   socket: string
   warranity: number
   manufacturerPageUrl?: string
   description?: string
   integratedGraphicsName?: string
   architecture?: string
   cpuCodeName?: string
   stockCooler?: boolean
   stockCoolerName?: string
   chartData: ChartDataType[]
}

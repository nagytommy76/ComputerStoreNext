import { useAppDispatch } from '@/reduxStore/hooks'
import {
   setSelectedBaseFrequencyRange,
   setSelectedCoreCountRange,
   setSelectedTurboFrequencyRange,
   setSelectedL3CacheRange,
   setSelectedTDPRange,
   setSelectedThreadCountRange,
} from '@/reduxStore/slices/Filter/CpuFilter'

const useExtraDispatch = () => {
   const dispatch = useAppDispatch()
   const extraDispatches = (params: IncomingParamsType) => {
      const baseFrequencyRange = [params.minBaseFrequency, params.maxBaseFrequency]
      const turboFrequencyRange = [params.minTurboFrequency, params.maxTurboFrequency]
      dispatch(setSelectedBaseFrequencyRange(baseFrequencyRange))
      dispatch(setSelectedTurboFrequencyRange(turboFrequencyRange))

      const coreCountRange = [params.minCoreCount, params.maxCoreCount]
      dispatch(setSelectedCoreCountRange(coreCountRange))
      const threadRange = [params.minThreadCount, params.maxThreadCount]
      dispatch(setSelectedThreadCountRange(threadRange))

      const l3CacheRange = [params.minL3Cache, params.maxL3Cache]
      dispatch(setSelectedL3CacheRange(l3CacheRange))

      const tdpRange = [params.minTDP, params.maxTDP]
      dispatch(setSelectedTDPRange(tdpRange))
   }
   return extraDispatches
}

export default useExtraDispatch

type IncomingParamsType = {
   allManufacturers: string[]
   allSockets: string[]
   maxBaseFrequency: number
   maxCoreCount: number
   maxL3Cache: number
   maxPrice: number
   maxTDP: number
   maxThreadCount: number
   maxTurboFrequency: number
   minBaseFrequency: number
   minCoreCount: number
   minL3Cache: number
   minPrice: number
   minTDP: number
   minThreadCount: number
   minTurboFrequency: number
}

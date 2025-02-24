import { useAppDispatch } from '@/reduxStore/hooks'
import {
   setSelectedFrequencyRange,
   setSelectedLatency,
   setSelectedCapacity,
} from '@/reduxStore/slices/Filter/MemoryFilter'

const useExtraDispatch = () => {
   const dispatch = useAppDispatch()

   const extraDispatches = (params: IncomingParamsType) => {
      const frequencyRange = [params.minFrequency, params.maxFrequency]
      dispatch(setSelectedFrequencyRange(frequencyRange))
      const latencyRange = [params.minLatency, params.maxLatency]
      dispatch(setSelectedLatency(latencyRange))
      dispatch(setSelectedCapacity(params.capacities))
   }
   return extraDispatches
}

export default useExtraDispatch

type IncomingParamsType = {
   allManufacturers: string[]
   capacities: number[]
   maxFrequency: number
   maxLatency: number
   maxPrice: number
   minFrequency: number
   minLatency: number
   minPrice: number
   _id: null
}

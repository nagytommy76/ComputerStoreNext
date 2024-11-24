import { useAppDispatch } from '@/reduxStore/hooks'
import {
   setSelectedBaseClockRange,
   setSelectedBoostClockRange,
   setSelectedLength,
   setSelectedPowerConsuption,
   setSelectedVramBandwidth,
   setSelectedVramCapRange,
} from '@/reduxStore/slices/Filter/VgaFilterSlice'

export default function useExtraDispatch() {
   const dispatch = useAppDispatch()

   const extraDispatches = (params: IncomingParamsType) => {
      const baseClockRange = [params.minBaseClock, params.maxBaseClock]
      dispatch(setSelectedBaseClockRange(baseClockRange))

      const boostClockRange = [params.minBoostClock, params.maxBoostClock]
      dispatch(setSelectedBoostClockRange(boostClockRange))

      const lengthRange = [params.minLength, params.maxLength]
      dispatch(setSelectedLength(lengthRange))

      const TDPRange = [params.minTdp, params.maxTdp]
      dispatch(setSelectedPowerConsuption(TDPRange))

      const vramBandwidthRange = [params.minVramBandwidth, params.maxVramBandwidth]
      dispatch(setSelectedVramBandwidth(vramBandwidthRange))

      const vramCapacityRange = [params.minVramCapacity, params.maxVramCapacity]
      dispatch(setSelectedVramCapRange(vramCapacityRange))
   }

   return extraDispatches
}
type IncomingParamsType = {
   minBaseClock: number
   maxBaseClock: number
   minBoostClock: number
   maxBoostClock: number
   gpuManufacturer: string[]
   minLength: number
   maxLength: number
   pciType: string[]
   minTdp: number
   maxTdp: number
   minVramBandwidth: number
   maxVramBandwidth: number
   minVramCapacity: number
   maxVramCapacity: number
   vramType: string[]
}

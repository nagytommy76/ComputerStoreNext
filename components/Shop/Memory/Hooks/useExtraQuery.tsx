import { useAppSelector } from '@/reduxStore/hooks'

const useExtraQuery = () => {
   const { memoryType, selectedCapacity, selectedFrequencyRange, selectedLatency } = useAppSelector(
      (state) => state.memoryFilter
   )
   const extraQueryParameters = `&memoryType=${memoryType}&frequency=${selectedFrequencyRange}&capacity=${selectedCapacity}&latency=${selectedLatency}`
   return extraQueryParameters
}

export default useExtraQuery

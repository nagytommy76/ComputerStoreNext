import { useAppSelector } from '@/reduxStore/hooks'

const useExtraQuery = () => {
   const {
      selectedSocket,
      selectedBaseFrequency,
      selectedTurboFrequency,
      selectedCoreCount,
      selectedThreadCount,
      selectedTDP,
      selectedL3Cache,
   } = useAppSelector((state) => state.cpuFilter)

   const extraQueryParams = `&coreCount=${selectedCoreCount}&threadCount=${selectedThreadCount}&baseFrequency=${selectedBaseFrequency}&turboFrequency=${selectedTurboFrequency}&selectedSocket=${selectedSocket}&tdp=${selectedTDP}&l3Cache=${selectedL3Cache}`
   return extraQueryParams
}

export default useExtraQuery

export interface CpuFilterType {
   minCoreCount: number
   maxCoreCount: number
   minThreadCount: number
   maxThreadCount: number
   minBaseFrequency: number
   maxBaseFrequency: number
   minTurboFrequency: number
   maxTurboFrequency: number
   minL3Cache: number
   maxL3Cache: number
   minTDP: number
   maxTDP: number
   allSockets: string[]
}

'use client'

import { useAppSelector } from '@/reduxStore/hooks'
import { setMemoryType } from '@/reduxStore/slices/Filter/MemoryFilter'

import BaseSelect from '../../SideFilter/Base/BaseSelect'

const ByMemoryType = () => {
   const memoryType = useAppSelector((state) => state.memoryFilter.memoryType)

   const allMemType = ['ddr2', 'ddr3', 'ddr4', 'ddr5']
   return (
      <BaseSelect
         setSelectedDispatchValue={setMemoryType}
         allOption={allMemType}
         selectedOption={memoryType}
         helperText='Memória típusa'
         labelText='Memória típusa'
      ></BaseSelect>
   )
}

export default ByMemoryType

'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedSocket } from '@/reduxStore/slices/Filter/CpuFilter'

import BaseSocketSelect from '../../SideFilter/Base/BaseSelect'

const BySocket = ({ allSocket }: { allSocket: string[] }) => {
   const { selectedSocket } = useAppSelector((state) => state.cpuFilter)
   return (
      <BaseSocketSelect
         setSelectedDispatchValue={setSelectedSocket}
         allOption={allSocket}
         selectedOption={selectedSocket}
         helperText='Foglalat'
         labelText='Foglalatok'
      ></BaseSocketSelect>
   )
}

export default BySocket

'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedGpuManufacturer } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BaseGpuManufacturerSelect from '../../SideFilter/Base/BaseSelect'

const ByGpuManufacturerSelect = () => {
   const { gpuManufacturers, selectedGpuMan } = useAppSelector((state) => state.vgaFilter)

   return (
      <BaseGpuManufacturerSelect
         setSelectedDispatchValue={setSelectedGpuManufacturer}
         allOption={gpuManufacturers}
         selectedOption={selectedGpuMan}
         helperText='GPU gyártó'
         labelText='GPU gyártó'
      ></BaseGpuManufacturerSelect>
   )
}

export default ByGpuManufacturerSelect

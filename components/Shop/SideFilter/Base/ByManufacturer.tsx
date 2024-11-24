'use client'
import dynamic from 'next/dynamic'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedManufacturer } from '@/reduxStore/slices/Filter/BaseFilterDataSlice'

const BaseSelect = dynamic(() => import('../Base/BaseSelect'))

const ByManufacturer: React.FC<{ allManufacturers: string[] }> = ({ allManufacturers }) => {
   const { selectedManufacturer } = useAppSelector((state) => state.filter)

   return (
      <BaseSelect
         allOption={allManufacturers}
         selectedOption={selectedManufacturer}
         helperText='Szűrés gyártók szerint'
         labelText='Gyártó'
         setSelectedDispatchValue={setSelectedManufacturer}
      ></BaseSelect>
   )
}

export default ByManufacturer

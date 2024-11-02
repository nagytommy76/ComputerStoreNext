import dynamic from 'next/dynamic'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedWarranty } from '@/reduxStore/slices/Filter/BaseFilterDataSlice'

const BaseSelect = dynamic(() => import('../Base/BaseSelect'))

const ByWarranity = () => {
   const { allWarranties, selectedWarranty } = useAppSelector((state) => state.filter)

   return (
      <BaseSelect
         allOption={allWarranties}
         selectedOption={selectedWarranty}
         helperText='Szűrés garancia idő szerint'
         labelText='Garancia'
         setSelectedDispatchValue={setSelectedWarranty}
         postFix=' hónap'
      ></BaseSelect>
   )
}

export default ByWarranity

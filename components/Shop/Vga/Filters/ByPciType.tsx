'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedPcie } from '@/reduxStore/slices/Filter/VgaFilterSlice'
import BasePciEType from '../../SideFilter/Base/BaseSelect'

const ByPciEType = ({ pcieTypes }: { pcieTypes: string[] }) => {
   const { selectedPcie } = useAppSelector((state) => state.vgaFilter)

   return (
      <BasePciEType
         setSelectedDispatchValue={setSelectedPcie}
         allOption={pcieTypes}
         selectedOption={selectedPcie}
         helperText='PCI-E típusa'
         labelText='PCI-E típusa'
      ></BasePciEType>
   )
}

export default ByPciEType

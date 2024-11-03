import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedVramType } from '@/reduxStore/slices/Filter/VgaFilterSlice'
import BaseVramtype from '../../SideFilter/Base/BaseSelect'

const ByVramType = () => {
   const { vramTypes, selectedVramType } = useAppSelector((state) => state.vgaFilter)

   return (
      <BaseVramtype
         setSelectedDispatchValue={setSelectedVramType}
         allOption={vramTypes}
         selectedOption={selectedVramType}
         helperText='Vram típusa'
         labelText='Vram típusa'
      ></BaseVramtype>
   )
}

export default ByVramType

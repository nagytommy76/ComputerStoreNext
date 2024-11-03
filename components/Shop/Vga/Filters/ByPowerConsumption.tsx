import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedPowerConsuption } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BasePowerCon from '../../SideFilter/Base/BaseSlider'

const ByPowerConsumption = () => {
   const { powerConsuptions, selectedPowerConsuption } = useAppSelector((state) => state.vgaFilter)
   return (
      <BasePowerCon
         range={powerConsuptions}
         selectedRange={selectedPowerConsuption}
         setSelectedDispatchValue={setSelectedPowerConsuption}
         text='TDP Fogyasztás'
         unit=' Watt'
      />
   )
}

export default ByPowerConsumption

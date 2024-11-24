'use client'
import { useAppSelector } from '@/reduxStore/hooks'
import { setSelectedPowerConsuption } from '@/reduxStore/slices/Filter/VgaFilterSlice'

import BasePowerCon from '../../SideFilter/Base/BaseSlider'

const ByPowerConsumption = ({ powerConsuptions }: { powerConsuptions: number[] }) => {
   const { selectedPowerConsuption } = useAppSelector((state) => state.vgaFilter)
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

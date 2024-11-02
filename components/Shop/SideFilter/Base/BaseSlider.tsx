import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { InputContainer } from '../Styles'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'

const BaseSlider: React.FC<Props> = ({
   range,
   selectedRange,
   setSelectedDispatchValue,
   text,
   unit = 'MHz',
}) => {
   const dispatch = useAppDispatch()
   const [value, setValue] = useState<number[]>([0, 8000])

   const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[])
   }

   const handleRangeOnComitted = (_: React.SyntheticEvent | Event, newValue: number | number[]) => {
      dispatch(setSelectedDispatchValue(newValue as number[]))
   }

   useEffect(() => {
      setValue(selectedRange)
   }, [selectedRange])

   return (
      <InputContainer>
         <FormControl fullWidth>
            <FormLabel color='primary'>
               <div>{text}</div>
               <span>
                  {selectedRange[0]}
                  {unit} - {selectedRange[1]}
                  {unit}
               </span>
            </FormLabel>
            <Slider
               getAriaLabel={() => `${text}-Range`}
               min={range[0]}
               max={range[1]}
               value={value as number[]}
               valueLabelDisplay='auto'
               onChangeCommitted={handleRangeOnComitted}
               onChange={handleChange}
            />
         </FormControl>
      </InputContainer>
   )
}

export default BaseSlider

type Props = {
   range: number[]
   selectedRange: number[]
   text: string
   unit?: string
   setSelectedDispatchValue: ActionCreatorWithPayload<number[], string>
}

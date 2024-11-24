'use client'
import React, { useState, useEffect } from 'react'
import { Slider, FormLabel, FormControl } from '@mui/material'

import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks'
import { setPriceRange } from '@/reduxStore/slices/Filter/BaseFilterDataSlice'
import { InputContainer } from '../Styles'

const PriceRange: React.FC<{ minPrice: number; maxPrice: number }> = ({ maxPrice, minPrice }) => {
   const dispatch = useAppDispatch()
   const { priceRange } = useAppSelector((state) => state.filter)
   const [localState, setLocalState] = useState<number[]>([minPrice, 5000000])

   useEffect(() => {
      setLocalState([priceRange[0], priceRange[1]])
   }, [priceRange])

   const setLocalStateOnChange = (event: Event, newValue: number | number[]) => {
      setLocalState((newValue as number[]) || [0, 5000000])
   }

   const changePriceRange = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
      dispatch(setPriceRange(newValue as number[]))
   }

   return (
      <InputContainer>
         <FormControl fullWidth>
            <FormLabel color='primary'>
               <div>Ár: </div>
               {priceRange[0].toLocaleString() || 0} Ft - {priceRange[1].toLocaleString() || 5000000} Ft
            </FormLabel>
            <Slider
               getAriaLabel={() => 'Price range'}
               min={minPrice}
               max={maxPrice}
               value={localState as number[]}
               valueLabelDisplay='auto'
               onChangeCommitted={changePriceRange}
               onChange={setLocalStateOnChange}
            />
         </FormControl>
      </InputContainer>
   )
}

export default PriceRange

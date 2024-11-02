'use client'
import React from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function BaseSelect({
   labelText,
   helperText,
   allOption,
   selectedOption,
   setSelectedDispatchValue,
   postFix,
   children,
}: Props) {
   const dispatch = useAppDispatch()
   const handleChange = (event: SelectChangeEvent) => {
      dispatch(setSelectedDispatchValue(event.target.value))
   }

   return (
      <FormControl variant='filled' sx={{ width: '85%', marginBottom: '.5rem' }}>
         <InputLabel id='select-label'>{labelText}</InputLabel>
         <Select
            labelId='select-label'
            id='select'
            value={selectedOption as string}
            label={labelText}
            onChange={handleChange}
         >
            {children ? children : <MenuItem value='all'>Összes</MenuItem>}
            {allOption.map((option, index) => (
               <MenuItem key={index} value={option}>
                  {option.toString()}
                  {postFix}
               </MenuItem>
            ))}
         </Select>
         <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
   )
}

type Props = {
   labelText: string
   helperText: string
   allOption: string[] | number[]
   selectedOption: string | number
   setSelectedDispatchValue: ActionCreatorWithPayload<string>
   postFix?: string
   children?: React.ReactNode
}

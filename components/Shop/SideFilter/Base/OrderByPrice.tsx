import dynamic from 'next/dynamic'
import React from 'react'
import { useAppSelector } from '@/reduxStore/hooks'
import { setOrderBy } from '@/reduxStore/slices/Filter/BaseFilterDataSlice'

const BaseSelect = dynamic(() => import('../Base/BaseSelect'))
import MenuItem from '@mui/material/MenuItem'

export default function OrderByPrice() {
   const orderBy = useAppSelector((state) => state.filter.orderBy)
   return (
      <BaseSelect
         allOption={[]}
         selectedOption={orderBy}
         helperText='Ár szerinti rendezés'
         labelText='Ár'
         setSelectedDispatchValue={setOrderBy}
      >
         <MenuItem value='asc'>Legolcsóbb elől</MenuItem>
         <MenuItem value='desc'>Legdrágább elől</MenuItem>
      </BaseSelect>
   )
}

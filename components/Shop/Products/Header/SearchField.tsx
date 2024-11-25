import { useState } from 'react'
import { useAppDispatch } from '@/reduxStore/hooks'
import { setProductName } from '@/reduxStore/slices/Filter/BaseFilterDataSlice'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'

export default function SearchField() {
   const [product, setProduct] = useState<string>('')
   const dispatch = useAppDispatch()

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.value) dispatch(setProductName(event.target.value))
      setProduct(event.target.value)
   }
   const handleFetchProductsOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      console.log(product)
      if (event.key === 'Enter') {
         dispatch(setProductName(product))
      }
   }

   const handleOnClick = () => {
      dispatch(setProductName(product))
   }

   return (
      <>
         <Divider orientation='vertical' variant='fullWidth' flexItem />
         <TextField
            onChange={handleOnChange}
            onKeyUp={handleFetchProductsOnKeyUp}
            slotProps={{
               input: {
                  endAdornment: (
                     <InputAdornment position='end'>
                        <IconButton onClick={handleOnClick} size='small'>
                           <SavedSearchIcon />
                        </IconButton>
                     </InputAdornment>
                  ),
               },
            }}
            value={product}
            id='search'
            size='small'
            label='Keresés a karegóriában'
            type='search'
            variant='outlined'
         />
      </>
   )
}

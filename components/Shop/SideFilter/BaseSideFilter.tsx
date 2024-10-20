'use client'

import Typography from '@mui/material/Typography'
import { StyledFilter } from './Styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import getVga from '@ServerActions/getVgaActions'
import { filterVgaData } from '@ServerActions/helpers'

// import BaseSelect from './Base/BaseSelect'

const BaseSideFilter = () => {
   const handleChange = async (event: SelectChangeEvent) => {
      console.log(event.target.value)
      const vga = await getVga({ ...filterVgaData, byManufacturer: event.target.value })
      console.log(vga)
   }

   return (
      <StyledFilter elevation={0} square>
         <Typography variant='h5'>Szűrés</Typography>
         <FormControl>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
               fullWidth
               labelId='demo-simple-select-label'
               id='demo-simple-select'
               value={'ASUS'}
               label='Gyártó'
               onChange={handleChange}
            >
               <MenuItem value={'ASUS'}>ASUS</MenuItem>
               <MenuItem value={'MSI'}>MSI</MenuItem>
               <MenuItem value={'EVGA'}>EVGA</MenuItem>
            </Select>
         </FormControl>
      </StyledFilter>
   )
}

export default BaseSideFilter

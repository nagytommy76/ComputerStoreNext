import React from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function page() {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
         }}
      >
         <Box action={''} component='form' sx={{ width: '450px', height: '420px' }}>
            <TextField id='email' name='email' label='Email cím' variant='outlined' fullWidth />
            <TextField id='password' name='password' label='Jelszó' variant='outlined' fullWidth />

            <Button type='submit' variant='outlined'>
               Belépés
            </Button>
         </Box>
      </div>
   )
}

'use client'
import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import { FormControlRow, AdressFromStyle } from './Styles'

export default function AdressForm() {
   const {
      checkoutReducer: { userDetails },
      checkoutDispatch,
   } = useContext(CheckoutContext)
   return (
      <AdressFromStyle>
         <Typography variant='h4'>Számlázási adatok</Typography>
         <FormControlRow>
            <TextField
               id='firstName'
               fullWidth
               variant='filled'
               required
               label='Vezetéknév'
               margin='dense'
               value={userDetails.firstName}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'firstName', value: e.target.value },
                  })
               }
            />
            <TextField
               id='lastName'
               fullWidth
               variant='filled'
               required
               label='Keresztnév'
               margin='dense'
               value={userDetails.lastName}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'lastName', value: e.target.value },
                  })
               }
            />
         </FormControlRow>
         <FormControlRow>
            <TextField
               id='phone'
               fullWidth
               variant='filled'
               required
               label='Telefonszám'
               margin='dense'
               value={userDetails.phone}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'phone', value: e.target.value },
                  })
               }
            />
            <TextField
               id='zipCode'
               fullWidth
               variant='filled'
               required
               label='Irányítószám'
               margin='dense'
               value={userDetails.address.zipCode}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'zipCode', value: e.target.value },
                  })
               }
            />
         </FormControlRow>
         <FormControlRow>
            <TextField
               id='city'
               fullWidth
               variant='filled'
               required
               label='Város'
               margin='dense'
               value={userDetails.address.city}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'city', value: e.target.value },
                  })
               }
            />
            <TextField
               id='street'
               fullWidth
               variant='filled'
               required
               label='Utca'
               margin='dense'
               value={userDetails.address.street}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'street', value: e.target.value },
                  })
               }
            />
         </FormControlRow>
         <FormControlRow>
            <TextField
               id='houseNumber'
               fullWidth
               variant='filled'
               required
               label='Házszám'
               margin='dense'
               value={userDetails.address.houseNumber}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'houseNumber', value: e.target.value },
                  })
               }
            />
            <TextField
               id='floor'
               fullWidth
               variant='filled'
               required
               label='Emelet'
               margin='dense'
               value={userDetails.address.floor}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'floor', value: e.target.value },
                  })
               }
            />
            <TextField
               id='door'
               fullWidth
               variant='filled'
               required
               label='Ajtó'
               margin='dense'
               value={userDetails.address.door}
               onChange={(e) =>
                  checkoutDispatch({
                     type: 'SET_DETAIL_FIELD',
                     payload: { field: 'door', value: e.target.value },
                  })
               }
            />
         </FormControlRow>
      </AdressFromStyle>
   )
}

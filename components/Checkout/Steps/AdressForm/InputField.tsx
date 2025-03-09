import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'
import TextField from '@mui/material/TextField'

export default function InputField({
   id,
   label,
   value,
   required = true,
}: {
   id: string
   label: string
   value: string | number | undefined
   required?: boolean
}) {
   const { checkoutDispatch } = useContext(CheckoutContext)
   return (
      <TextField
         id={id}
         name={id}
         fullWidth
         variant='filled'
         required={required}
         label={label}
         margin='dense'
         value={value}
         onChange={(e) =>
            checkoutDispatch({
               type: 'SET_DETAIL_FIELD',
               payload: { field: id, value: e.target.value },
            })
         }
      />
   )
}

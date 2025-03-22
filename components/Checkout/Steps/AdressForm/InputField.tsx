import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'
import TextField from '@mui/material/TextField'

export default function InputField({
   id,
   label,
   value,
   required = true,
   errorHelperText = undefined,
}: {
   id: string
   label: string
   value: string | number | undefined
   required?: boolean
   errorHelperText?: string[] | undefined
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
         error={errorHelperText !== undefined}
         helperText={errorHelperText ? errorHelperText[0] : ''}
         onChange={(e) =>
            checkoutDispatch({
               type: 'SET_DETAIL_FIELD',
               payload: { field: id, value: e.target.value },
            })
         }
      />
   )
}

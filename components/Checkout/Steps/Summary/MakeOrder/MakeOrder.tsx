import useMutate from './Hooks/useMutate'
import Button from '@mui/material/Button'

export default function MakeOrder() {
   const mutation = useMutate()

   return (
      <Button variant='contained' color='primary'>
         Rendelés leadása
      </Button>
   )
}

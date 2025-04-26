import useMutate from './Hooks/useMutate'
import Button from '@mui/material/Button'

export default function MakeOrder() {
   const { mutate, isPending } = useMutate()

   return (
      <Button variant='contained' color='primary' disabled={isPending} onClick={() => mutate()}>
         Rendelés leadása
      </Button>
   )
}

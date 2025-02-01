import { useAppDispatch } from '@/reduxStore/hooks'
import { removeAllEntitesFromCart } from '@/reduxStore/slices/Cart/CartSlice'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export default function DeleteButton({ itemId }: { itemId: string }) {
   const dispatch = useAppDispatch()

   const deleteFunction = () => dispatch(removeAllEntitesFromCart(itemId))

   return (
      <IconButton
         disabled={false}
         onClick={deleteFunction}
         size='small'
         color='error'
         sx={{
            zIndex: 5,
            position: 'absolute',
            right: '0',
            top: '0',
         }}
      >
         <DeleteForeverIcon fontSize='inherit' />
      </IconButton>
   )
}

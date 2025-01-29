'use client'
import type { BaseFetchedProductType } from '@/types/productType'
import { useAppDispatch } from '@/reduxStore/hooks'
import { addToCart } from '@/reduxStore/slices/Cart/CartSlice'

import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import IconButton from '@mui/material/IconButton'

export default function CardFooter({
   product,
   productType,
}: {
   product: BaseFetchedProductType
   productType: string
}) {
   const dispatch = useAppDispatch()
   const handleAddToCart = () =>
      dispatch(
         addToCart({
            _id: product._id,
            displayImage: product.pictureUrls[0],
            displayName: product.manufacturer + ' ' + product.type,
            itemQuantity: 1,
            productType,
            price: product.price,
         })
      )
   return (
      <CardActions sx={{}}>
         <Button variant='outlined' size='large' color='success' onClick={handleAddToCart}>
            Kosárba
         </Button>
         <IconButton color='info' aria-label='compare' size='large'>
            <CompareArrowsIcon fontSize='inherit' />
         </IconButton>
      </CardActions>
   )
}

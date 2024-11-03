import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { BaseFetchedProductType } from '@/types/productType'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardStyle, ImageContent } from './Styles'

import CardFooter from './Footer/CardFooter'
const CardImage = dynamic(() => import('./Includes/CardImage'), { ssr: false })

export default function ProductCard({
   product,
   productType,
   fallbackImage,
}: {
   product: BaseFetchedProductType
   productType: string
   fallbackImage: string
}) {
   return (
      <CardStyle>
         <Link style={{ cursor: 'pointer' }} href={`/shop/${productType}/${product._id}`}>
            <ImageContent>
               <CardImage
                  imageSrc={product.pictureUrls[0]}
                  typeCode={product.typeCode}
                  fallbackImage={fallbackImage}
               />
            </ImageContent>
            <CardContent>
               <Typography gutterBottom variant='subtitle1' component='div'>
                  {product.manufacturer} {product.type}
               </Typography>
               <Typography variant='h5' sx={{ color: 'orange' }}>
                  {product.price.toLocaleString()} Ft
               </Typography>
            </CardContent>
         </Link>
         <CardFooter />
      </CardStyle>
   )
}

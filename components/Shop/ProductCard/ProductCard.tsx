import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { BaseFetchedProductType } from '@Types/productType'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import CardFooter from './Footer/CardFooter'

export default function ProductCard({
   product,
   productType,
}: {
   product: BaseFetchedProductType
   productType: string
}) {
   return (
      <Card
         sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

            position: 'relative',
            height: 390,
            maxWidth: 345,
            width: '250px',
            transition: 'transform 0.1s',
            '&:hover': {
               transform: 'scale(1.025) translateY(-5px)',
            },
            [`@media(max-width: 920px`]: {
               height: '390px',
            },
         }}
      >
         <Link style={{ cursor: 'pointer' }} href={`/shop/${productType}/${product._id}`}>
            <div
               style={{
                  width: '100%',
                  height: '175px',
               }}
            >
               <Image
                  style={{ objectFit: 'cover' }}
                  height={175}
                  width={250}
                  src={product.pictureUrls[0]}
                  alt={product.typeCode}
               />
            </div>
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
      </Card>
   )
}

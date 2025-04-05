'use client'
import Image from 'next/image'
import { styled } from '@mui/material/styles'

export const ProductContainer = styled('div')({
   position: 'relative',
   height: '100vh',
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
})

export const ProductImage = styled(Image)({
   position: 'absolute',
   top: 0,

   zIndex: -1,

   width: '100%',
   height: '100%',
   objectFit: 'cover',
})

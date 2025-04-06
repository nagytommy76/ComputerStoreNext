'use client'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const ProductContainer = styled('div')({
   position: 'relative',
   height: '100vh',
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'rgba(10, 10, 10, 0.5)',
})

export const ProductImage = styled(Image)({
   position: 'absolute',
   top: 0,

   zIndex: -1,

   width: '100%',
   height: '100%',
   objectFit: 'cover',
})

export const ItemsContainer = styled('div')({
   width: '400px',
   height: '75vh',
   overflow: 'scroll',

   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1.25rem',
})

export const FooterSection = styled('footer')({
   width: '100%',
   marginTop: '1rem',

   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'space-between',
})

export const PriceSection = styled(Typography)(({ theme }) => ({
   width: '75%',
   textAlign: 'center',
   padding: '.45rem',
   borderRadius: '5px',
   backgroundColor: 'rgba(0,0,0, .65)',
   margin: '.5rem 0',
   letterSpacing: '2px',
   [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
   },
}))

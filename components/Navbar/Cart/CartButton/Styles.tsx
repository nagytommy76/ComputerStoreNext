'use client'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const StyledIconCartButton = styled(IconButton)(({}) => ({
   position: 'absolute',
   right: 0,
   top: 0,
   ml: 1,
   height: '100%',
   color: '#05d110',
   borderRadius: 0,
}))

export const StyledCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
   fontSize: 60,
   [theme.breakpoints.down('md')]: {
      fontSize: 40,
   },
}))

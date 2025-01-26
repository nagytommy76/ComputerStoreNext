'use client'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const StyledIconCartButton = styled(IconButton)(({}) => ({
   position: 'absolute',
   right: 0,
   top: 0,
   marginRight: '.6rem',
   height: '100%',
   color: '#05d110',
   borderRadius: 0,
}))

export const StyledCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
   fontSize: 50,
   [theme.breakpoints.down('md')]: {
      fontSize: 35,
   },
}))

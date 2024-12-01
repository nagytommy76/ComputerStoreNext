'use client'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export const RightHeadStyle = styled('div')({
   flex: 1,
})

export const PriceAndCartStyle = styled('div')`
   display: flex;
   flex-direction: row;
   justify-content: stretch;
   align-items: center;
   padding: 1.2rem 0 1.2rem 0;
`

export const WarrantyStyle = styled(Typography)`
   text-decoration: underline #ea9f00 solid 3px;
   margin: 1.2rem 0 2rem 0;
   font-size: 1.3rem;
`
export const ManufacturerUrlPage = styled(Link)`
   font-size: 1.2rem;
   font-weight: 600;
`

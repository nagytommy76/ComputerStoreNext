import Link from 'next/link'

import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { RightHeadStyle, PriceAndCartStyle, WarrantyStyle } from './Styles'

export default function RightHead({
   manufacturer,
   type,
   typeCode,
   price,
   warranty,
   manufacturerPageUrl,
   children,
}: {
   manufacturer: string
   type: string
   typeCode: string
   price: number
   warranty?: number
   manufacturerPageUrl?: string
   children?: React.ReactNode
}) {
   return (
      <RightHeadStyle>
         <Typography variant='h4' gutterBottom>
            {manufacturer} {type} {typeCode}
         </Typography>
         <Divider variant='fullWidth' color='primary.main' />
         <PriceAndCartStyle>
            {children}
            <Typography variant='h4' fontWeight={500}>
               {price.toLocaleString()} Ft
            </Typography>
         </PriceAndCartStyle>
         <Divider variant='fullWidth' color='primary.main' />
         <WarrantyStyle>{warranty} hónap gyári garanciával</WarrantyStyle>
         <Link href={manufacturerPageUrl as string}>
            <Typography variant='body1'>Ugrás a gyártói honlapra </Typography>
         </Link>
      </RightHeadStyle>
   )
}

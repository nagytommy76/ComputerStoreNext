import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import Typography from '@mui/material/Typography'

export default function TopNavigation({ productType, type }: { productType: string; type: string }) {
   return (
      <Breadcrumbs aria-label='breadcrumb'>
         <Link href={'/'}>Főoldal</Link>
         <Link href={`/shop/${productType}`}>{productType.toUpperCase()}</Link>
         <Typography color='text.primary'>{type}</Typography>
      </Breadcrumbs>
   )
}

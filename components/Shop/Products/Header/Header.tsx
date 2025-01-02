import Typography from '@mui/material/Typography'
import { useAppSelector } from '@/reduxStore/hooks'

import SearchField from './SearchField'

export default function Header({ productName }: { productName: string }) {
   const totalProducts = useAppSelector((state) => state.filter.totalProducts)
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
         }}
      >
         <Typography variant='h3' gutterBottom>
            {productName}
         </Typography>
         <Typography variant='body2' color='text.secondary' gutterBottom>
            ({totalProducts} termék)
         </Typography>
         <SearchField />
      </div>
   )
}

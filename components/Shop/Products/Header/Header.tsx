import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '@/reduxStore/hooks'

import SearchField from './SearchField'

export default function Header({ productName }: { productName: string }) {
   const totalProducts = useAppSelector((state) => state.filter.totalProducts)
   return (
      <StyledContainer>
         <Typography variant='h3'>{productName}</Typography>
         <Typography variant='body2' color='text.secondary'>
            ({totalProducts} termék)
         </Typography>
         <SearchField />
      </StyledContainer>
   )
}

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   gap: '1rem',
   marginBottom: '1.5rem',

   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      marginTop: '1rem',
      marginBottom: '2rem',
      gap: '0.5rem',
   },
}))

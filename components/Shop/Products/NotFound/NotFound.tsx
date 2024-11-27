import { styled } from '@mui/material'
import SadImage from '@images/sad.png'
import Tpyography from '@mui/material/Typography'

export default function NotFound() {
   return (
      <StyledProductNotFound>
         <StyledImage src={SadImage.src} alt='sad image :(' />
         <StyledTypography variant='h2' color='text.primary'>
            Sajnos nincsen megjeleníthető találat
         </StyledTypography>
      </StyledProductNotFound>
   )
}

const StyledProductNotFound = styled('div')({
   position: 'absolute',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const StyledTypography = styled(Tpyography)(({ theme }) => ({
   [`@media(max-width: ${theme.breakpoints.values.sm}px})`]: {
      textAlign: 'center',
      fontSize: '2rem',
   },
}))

const StyledImage = styled('img')(({ theme }) => ({
   width: '25%',

   [`@media(max-width: ${theme.breakpoints.values.sm}px`]: {
      width: '55%',
      marginBottom: '1rem',
   },
}))

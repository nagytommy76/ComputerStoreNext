import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

export const Container = styled('div')({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

export const StyledPaper = styled(Paper)({
   margin: '.6rem 0',
   padding: '.4rem 1rem',
})

export const StepsStyle = styled('div')(({ theme }) => ({
   height: '35%',
   width: '70%',
   [`@media (max-width: ${theme.breakpoints.values.xl}px)`]: {
      width: '100%',
      height: '50%',
   },
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: '100%',
      height: '75%',
   },
}))

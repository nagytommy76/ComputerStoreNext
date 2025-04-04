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

import styled from '@emotion/styled'
import Paper from '@mui/material/Paper'

export const StyledFilter = styled(Paper)({
   width: '270px',
   marginTop: '-1.5rem',
   minHeight: '100%',
   // backgroundColor: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#F9F9F9')},
   // color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : '#000')},
   transition: 'all 0.25s',

   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',

   ['@media (max-width: 912px']: {
      width: '80%',
      height: '100%',
      marginBottom: '2.5rem',
   },
})

import styled from '@emotion/styled'

import Card from '@mui/material/Card'

export const CardStyle = styled(Card)({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   position: 'relative',
   height: 390,
   maxWidth: 345,
   width: '250px',
   transition: 'transform 0.1s',
   '&:hover': {
      transform: 'scale(1.025) translateY(-5px)',
   },
   [`@media(max-width: 920px`]: {
      height: '390px',
   },
})

export const ImageContent = styled('div')({
   width: '100%',
   height: '175px',
})

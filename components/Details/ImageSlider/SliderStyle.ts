import { styled } from '@mui/material'

export const StyledSlideSection = styled('section')(({ theme }) => ({
   minHeight: '100%',
   flex: 1,
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      marginTop: '0.75rem',
   },
}))

export const StyledImageContainer = styled('div')({
   marginTop: '1rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: '95%',
   overflow: 'hidden',
   position: 'relative',
   backgroundColor: '#fff',
})

export const StyledImage = styled('img')`
   object-fit: scale-down;
   width: 100%;
   height: 100%;
`

// Arrows
const baseArrow = `
   z-index: 4;
   position: absolute;
   top: 50%;
`

export const RightArrow = styled('span')`
   ${baseArrow}
   right: 5px;
`
export const LeftArrow = styled('span')`
   ${baseArrow}
   left: 5px;
`

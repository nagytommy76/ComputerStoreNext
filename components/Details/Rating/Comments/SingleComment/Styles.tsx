import { styled } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import ThumbDown from '@mui/icons-material/ThumbDown'
import ThumbUp from '@mui/icons-material/ThumbUp'

export const CommentCard = styled(CardContent)(({ theme }) => ({
   padding: '1rem 1rem 0 1rem',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
   },
}))

export const RightComment = styled('div')(({ theme }) => ({
   flex: 2,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      marginTop: '1.5rem',
      textAlign: 'justify',
   },
}))

export const ThumbsContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   width: '150px',
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      marginTop: '1.5rem',
   },
}))

export const ThumbIconsContainer = styled('span')({
   display: 'flex',
   alignItems: 'center',
   marginRight: '0.75rem',
})

export const CustomThumbUp = styled(ThumbUp)({
   marginRight: '.4rem',
   cursor: 'pointer',
})

export const CustomThumbDown = styled(ThumbDown)({
   marginRight: '.4rem',
   cursor: 'pointer',
})

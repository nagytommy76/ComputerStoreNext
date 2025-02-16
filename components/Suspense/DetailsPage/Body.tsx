import Skeleton from '@mui/material/Skeleton'
import { styled } from '@mui/material'

export default function Body() {
   return (
      <BodySectionSuspense>
         <LeftSkeleton height={500} variant='rectangular' animation='wave' />
         <RightSkeleton height={650} variant='rectangular' animation='wave' />
      </BodySectionSuspense>
   )
}

const BodySectionSuspense = styled('section')(({ theme }) => ({
   minHeight: '40vh',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      minHeight: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
   },
}))

const LeftSkeleton = styled(Skeleton)(({ theme }) => ({
   flex: 1,
   marginRight: 1,
   [`@media (max-width: ${theme.breakpoints.values.sm}px})`]: {
      marginRight: 0,
   },
}))
const RightSkeleton = styled(Skeleton)(({ theme }) => ({
   flex: 1,
   marginLeft: 1,
   [`@media (max-width: ${theme.breakpoints.values.sm}px})`]: {
      marginTop: '2rem',
      marginLeft: 0,
      height: 800,
   },
}))

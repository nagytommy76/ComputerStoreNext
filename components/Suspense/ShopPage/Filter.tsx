import { styled } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Paper from '@mui/material/Paper'

export default function Filter() {
   return (
      <StyledFilterCard>
         <Skeleton height={35} width='50%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
      </StyledFilterCard>
   )
}

const Style = { margin: '2rem auto' }

const StyledFilterCard = styled(Paper)`
   width: 270px;
   min-height: 100%;
   margin-top: -1.5rem;

   @media (max-width: ${912}px) {
      width: 80%;
      height: 100%;
      margin-top: 0;
      margin-bottom: 2.5rem;
   }
`

import Skeleton from '@mui/material/Skeleton'
import { styled } from '@mui/material'

export default function TopNav() {
   return (
      <Container>
         <Skeleton variant='text' width={40} height={40} /> /
         <Skeleton variant='text' width={40} height={40} /> /
         <Skeleton variant='text' width={40} height={40} />
      </Container>
   )
}

const Container = styled('div')({
   width: '200px',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
})

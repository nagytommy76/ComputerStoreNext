import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { StyledToolbar } from './Styles'

import ResponsiveMenu from './Menu/ResponsiveMenu'
import Links from './Links/Links'
import Cart from './Cart/Cart'

const Navbar = () => {
   return (
      <AppBar
         component={'nav'}
         position='fixed'
         color='secondary'
         sx={{ backgroundColor: 'rgba(11, 11, 11, 0.7)' }}
         elevation={0}
      >
         <Container maxWidth='xl'>
            <StyledToolbar disableGutters>
               <Link href='/'>
                  <Typography color='primary' variant='h4'>
                     ComputerStore
                  </Typography>
               </Link>
               <ResponsiveMenu>
                  <Links />
               </ResponsiveMenu>
            </StyledToolbar>
         </Container>
         <Cart />
      </AppBar>
   )
}

export default Navbar

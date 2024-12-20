import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { StyledToolbar } from './Styles'

import ThemeToggle from './ThemeToggler/Toggle'
import NavMenu from './Menu/NavMenu'
import Links from './Links/Links'

const Navbar = async () => {
   return (
      <AppBar component={'nav'} position='sticky' color='secondary' elevation={0}>
         <Container maxWidth='xl'>
            <StyledToolbar disableGutters>
               <Link href='/'>
                  <Typography variant='h4'>ComputerStore</Typography>
               </Link>
               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                  <NavMenu>
                     <Links />
                  </NavMenu>
                  <ThemeToggle />
               </Box>
            </StyledToolbar>
         </Container>
      </AppBar>
   )
}

export default Navbar

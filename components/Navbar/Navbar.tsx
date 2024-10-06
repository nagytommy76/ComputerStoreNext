import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import ThemeToggle from './ThemeToggler/Toggle'
import NavMenu from './Menu/NavMenu'

const Navbar = () => {
   return (
      <AppBar component={'nav'} position='sticky'>
         <Container maxWidth='xl'>
            <Toolbar
               disableGutters
               sx={{
                  width: '100%',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Link href='/'>
                  <Typography variant='h4'>ComputerStore</Typography>
               </Link>
               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                  <NavMenu />
                  <ThemeToggle />
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Navbar

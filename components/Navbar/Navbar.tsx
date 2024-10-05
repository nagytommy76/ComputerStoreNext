'use client'
// import { useState } from 'react'
import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import Button from '@mui/material/Button'

// import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'

import Typography from '@mui/material/Typography'

import ThemeToggle from './ThemeToggler/Toggle'

const Navbar = () => {
   // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

   return (
      <AppBar component={'nav'} position='sticky'>
         <Container maxWidth='xl'>
            <Toolbar disableGutters sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant='h4'>ComputerStore</Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Stack direction={'row'} spacing={1}>
                     <Link href='/'>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Föoldal</Button>
                     </Link>
                     <Link href='/'>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Shop menü</Button>
                     </Link>
                  </Stack>
                  <ThemeToggle />
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Navbar

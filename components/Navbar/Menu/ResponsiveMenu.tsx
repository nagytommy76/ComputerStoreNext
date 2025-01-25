'use client'
import useMenu from './Hook/useMenu'

import NavMenu from './NavMenu'
import ThemeToggle from '../ThemeToggler/Toggle'

import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

export default function ResponsiveMenu({ children }: { children: React.ReactNode }) {
   const { open, anchorEl, handleClick, handleClose } = useMenu()

   return (
      <>
         <Box
            sx={{
               flexGrow: 1,
               display: { xs: 'flex', md: 'none' },
            }}
         >
            <IconButton
               size='large'
               aria-label='account of current user'
               aria-controls='menu-appbar'
               aria-haspopup='true'
               onClick={handleClick}
               color='inherit'
            >
               <MenuIcon />
            </IconButton>
            <Menu
               id='responsive-navbar-menu'
               anchorEl={anchorEl}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
               open={open}
               onClose={handleClose}
               sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'column',
                  '& .MuiPaper-root': {
                     backgroundColor: 'rgba(11, 11, 11, 0.7)',
                     padding: '.45rem',
                  },
               }}
            >
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <NavMenu handleCloseNavMenu={handleClose}>{children}</NavMenu>
                  <ThemeToggle />
               </div>
            </Menu>
         </Box>
         <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <NavMenu handleCloseNavMenu={handleClose}>{children}</NavMenu>
            <ThemeToggle />
         </Box>
      </>
   )
}

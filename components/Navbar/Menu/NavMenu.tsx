'use client'
import useMenu from './Hook/useMenu'
import Link from 'next/link'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const NavMenu = ({ children }: { children: React.ReactNode }) => {
   const { open, anchorEl, handleClick, handleClose } = useMenu()

   return (
      <>
         {children}
         <Button color='inherit' size='large' onClick={handleClick}>
            Shop menü
         </Button>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={handleClose}>
               <Link href={'/shop/vga'}>Videókártya</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Alaplap</MenuItem>
            <MenuItem onClick={handleClose}>Processzor</MenuItem>
         </Menu>
      </>
   )
}

export default NavMenu

'use client'
import useMenu from './Hook/useMenu'
import Link from 'next/link'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const NavMenu = ({
   children,
   handleCloseNavMenu,
}: {
   children: React.ReactNode
   handleCloseNavMenu: () => void
}) => {
   const { open, anchorEl, handleClick, handleClose } = useMenu()

   function closeBothMenuAndNavMenu() {
      handleCloseNavMenu()
      handleClose()
   }

   return (
      <>
         {children}
         <Button sx={{ color: '#FFF' }} size='large' onClick={handleClick}>
            Shop menü
         </Button>
         <Menu
            id='shop-dropdown-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={closeBothMenuAndNavMenu}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={closeBothMenuAndNavMenu}>
               <Link href={'/shop/vga'}>Videókártya</Link>
            </MenuItem>
            <MenuItem onClick={closeBothMenuAndNavMenu}>Alaplap</MenuItem>
            <MenuItem onClick={closeBothMenuAndNavMenu}>Processzor</MenuItem>
         </Menu>
      </>
   )
}

export default NavMenu

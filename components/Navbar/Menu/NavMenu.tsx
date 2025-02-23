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
            <Link href={'/shop/vga'}>
               <MenuItem onClick={closeBothMenuAndNavMenu}>Videókártya</MenuItem>
            </Link>
            <Link href={'/shop/cpu'}>
               <MenuItem onClick={closeBothMenuAndNavMenu}>Processzorok</MenuItem>
            </Link>
            <Link href={'/shop/memory'}>
               <MenuItem onClick={closeBothMenuAndNavMenu}>Memória (RAM)</MenuItem>
            </Link>
         </Menu>
      </>
   )
}

export default NavMenu

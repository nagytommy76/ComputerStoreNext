'use client'
import { useState } from 'react'
import Link from 'next/link'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const NavMenu = ({ children }: { children: React.ReactNode }) => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

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

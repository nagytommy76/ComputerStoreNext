'use client'
import useMenu from './Hook/useMenu'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import LogoutIcon from '@mui/icons-material/Logout'

import logoutAction from '@/serverActions/Logout/Logout'
export default function ProfileMenu({ userName }: { userName: string }) {
   const { open, anchorEl, handleClick, handleClose } = useMenu()

   return (
      <>
         <Button aria-expanded={open ? 'true' : undefined} onClick={handleClick} color='inherit' size='large'>
            {userName}
         </Button>
         <Menu
            id='profile-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'menu-button',
            }}
         >
            <MenuItem onClick={handleClose}>
               <ListItemIcon>
                  <ProductionQuantityLimitsIcon />
               </ListItemIcon>
               Korábbi rendelések
            </MenuItem>
            <Divider />
            <MenuItem
               onClick={() => {
                  logoutAction()
               }}
            >
               <ListItemIcon>
                  <LogoutIcon />
               </ListItemIcon>
               Kilépés
            </MenuItem>
         </Menu>
      </>
   )
}

'use client'
import useMenu from './Hook/useMenu'

import Avatar from '@mui/material/Avatar'
import Image from 'next/image'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import LogoutIcon from '@mui/icons-material/Logout'

import logoutAction from '@/serverActions/Logout/Logout'
export default function ProfileMenu({
   userName,
   profilePicture,
}: {
   userName: string
   profilePicture?: string
}) {
   const { open, anchorEl, handleClick, handleClose } = useMenu()

   return (
      <>
         <Button aria-expanded={open ? 'true' : undefined} onClick={handleClick} color='inherit' size='large'>
            {profilePicture && (
               <Avatar sx={{ mr: 1 }} alt='Remy Sharp'>
                  <Image src={profilePicture} alt={userName} width={40} height={40} />
               </Avatar>
            )}
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

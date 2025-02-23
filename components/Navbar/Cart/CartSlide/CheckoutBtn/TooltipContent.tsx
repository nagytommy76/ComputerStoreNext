'use client'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function TooltipContent() {
   return (
      <>
         <Typography gutterBottom variant='caption' textAlign='center'>
            Kérlek jelentkezz be a tovább lépéshez!
         </Typography>
         <Link href={'/login'}>
            <Button fullWidth variant='outlined' color='primary' sx={{ mb: 1 }}>
               Jelentkezz be
            </Button>
         </Link>
         <Button fullWidth variant='outlined' color='primary'>
            Vagy regisztrálj!
         </Button>
      </>
   )
}

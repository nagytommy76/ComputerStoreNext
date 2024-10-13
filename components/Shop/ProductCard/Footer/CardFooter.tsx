'use client'

import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import IconButton from '@mui/material/IconButton'

export default function CardFooter() {
   return (
      <CardActions sx={{}}>
         <Button variant='outlined' size='large' color='success'>
            Kosárba
         </Button>
         <IconButton color='info' aria-label='compare' size='large'>
            <CompareArrowsIcon fontSize='inherit' />
         </IconButton>
      </CardActions>
   )
}

'use client'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
   }, [error])

   return (
      <StyledError>
         <Typography variant='h1' mb={4}>
            Hiba történt. Próbáld újra.
         </Typography>
         <Typography variant='body1' mb={4}>
            {error.message}
         </Typography>
         <Button variant='contained' onClick={() => reset()}>
            Próbáld újra
         </Button>
      </StyledError>
   )
}

const StyledError = styled('div')({
   height: '90vh',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
})

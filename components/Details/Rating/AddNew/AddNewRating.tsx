'use client'
import { useState } from 'react'

import AlertPopup from '../Includes/AlertPopup'
import Summary from './Summary'

import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { RatingContainer, StyledCard, StyledCardContent } from './Style'

export default function AddNewRating() {
   const [rating, setRating] = useState<number | null>(4)
   const [comment, setComment] = useState<string>('')
   const [hasError, setHasError] = useState<{ isError: boolean; message: string }>({
      isError: false,
      message: '',
   })

   return (
      <RatingContainer>
         <StyledCard>
            <StyledCardContent>
               <Typography variant='h4'>Értékelés leadása</Typography>
               <Rating
                  sx={{ fontSize: '2.5rem', margin: '.4rem 0' }}
                  precision={0.5}
                  name='rating'
                  size='large'
                  value={rating}
                  onChange={(event, newValue) => {
                     setRating(newValue)
                     if (newValue === null)
                        setHasError({ isError: true, message: 'Kötelező értékelést adni!' })
                     else setHasError({ isError: false, message: '' })
                  }}
               />
               <TextField
                  margin='normal'
                  fullWidth
                  id='comment'
                  variant='filled'
                  color='success'
                  label='Hozzászólás'
                  multiline
                  rows={7}
                  value={comment}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)}
               />
               <Button
                  onClick={() => console.log('KLIKK', comment, rating)}
                  color='success'
                  variant='outlined'
                  size='large'
               >
                  Értékelés Leadása
               </Button>
               <AlertPopup errorMsg={hasError.message} isError={hasError.isError} />
            </StyledCardContent>
            <StyledCardContent>
               <Summary />
            </StyledCardContent>
         </StyledCard>
      </RatingContainer>
   )
}

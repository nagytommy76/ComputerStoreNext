'use client'
import { useContext, useState, useEffect } from 'react'
import { RatingContext } from '../Context/RatingContext'
import { Typography, Rating, Box } from '@mui/material'

export default function Summary() {
   const { comments } = useContext(RatingContext)
   const [ratings, setRatings] = useState<{ avgRating: number; rateCount: number }>({
      avgRating: 0,
      rateCount: 0,
   })

   useEffect(() => {
      if (comments?.length > 0) {
         const totalRating = comments.reduce((acc, comment) => acc + comment.rating, 0)
         const avgRating = totalRating / comments.length

         setRatings({ avgRating, rateCount: comments.length })
      } else {
         setRatings({ avgRating: 0, rateCount: 0 })
      }
   }, [comments])

   return ratings.avgRating ? (
      <Box>
         <Typography variant='h3'>{ratings.avgRating.toFixed(2)}</Typography>
         <Typography variant='subtitle2'>Összesen {ratings.rateCount} értékelés</Typography>
         <Rating sx={{ fontSize: '3rem' }} value={ratings.avgRating} readOnly size='large' />
      </Box>
   ) : (
      <Box>
         <Typography variant='h4'>Nem érkezett még értékelés</Typography>
      </Box>
   )
}

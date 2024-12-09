'use client'
import React from 'react'
import RatingContextProvider from './Context/RatingContext'
import type { RatingValues } from '@/types/baseModelTypes'

import AddNewRating from '@/Details/Rating/AddNew/AddNewRating'
import Comments from '@/Details/Rating/Comments/Comments'

export default function Rating({ comments }: { comments: RatingValues[] }) {
   return (
      <RatingContextProvider serverComments={comments}>
         <AddNewRating />
         <Comments />
      </RatingContextProvider>
   )
}

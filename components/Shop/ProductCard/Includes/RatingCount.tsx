import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const RatingCount: React.FC<{ ratingCount: number }> = ({ ratingCount }) => {
   return (
      <StyledCount>
         <Typography color='#000'>{ratingCount}</Typography>
      </StyledCount>
   )
}

const StyledCount = styled('div')`
   width: 32px;
   height: 32px;
   background-color: #e9ac06;
   color: #000;
   position: absolute;
   right: 0;

   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.1rem;
   border-radius: 0 0 0 5px;
   font-weight: 700;
`

export default RatingCount

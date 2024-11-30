import React from 'react'

import Typography from '@mui/material/Typography'

export default function RightHead({
   manufacturer,
   type,
   typeCode,
}: {
   manufacturer: string
   type: string
   typeCode: string
   price: number
}) {
   return (
      <div>
         <Typography variant='h5'>
            {manufacturer} {type} {typeCode}
         </Typography>
      </div>
   )
}

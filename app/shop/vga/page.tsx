import { Metadata } from 'next'

import { BaseProductType } from '@/types/baseModelTypes'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardGridContainerStyle } from './styles/style'

export const metadata: Metadata = {
   title: 'Computer Store | Videókártya',
}

export default async function page() {
   const res = await fetch('http://localhost:3000/api/vga', { method: 'GET' })
   const data = await res.json()

   return (
      <>
         <Typography variant='h3'>FILTER</Typography>
         <div
            style={{
               width: '80%',
               minHeight: '100%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
            }}
         >
            <Typography variant='h3'>SHOP HEADER</Typography>
            <div style={CardGridContainerStyle}>
               {data.vgaProducts.map((vga: BaseProductType) => (
                  <Card
                     sx={{
                        position: 'relative',
                        height: 390,
                        maxWidth: 345,
                        width: '250px',
                        transition: 'transform 0.1s',
                        '&:hover': {
                           transform: 'scale(1.025) translateY(-5px)',
                        },
                        [`@media(max-width: 920px`]: {
                           height: '390px',
                        },
                     }}
                     key={vga._id as string}
                  >
                     <CardMedia
                        sx={{ height: 175 }}
                        component='img'
                        image={vga.pictureUrls[0]}
                        title={vga.typeCode}
                     />
                     <CardContent>
                        <Typography gutterBottom variant='h6' component='div'>
                           {vga.manufacturer} {vga.type}
                        </Typography>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                           {vga.price} Ft
                        </Typography>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </>
   )
}

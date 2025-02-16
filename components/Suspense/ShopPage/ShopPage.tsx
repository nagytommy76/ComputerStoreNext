import Skeleton from '@mui/material/Skeleton'
import { ProductContainerStyle, CardGridContainerStyle } from '../../Shop/Products/Styles'

import Container from '../ProductCard/Container'
import Filter from './Filter'

export default function ShopPage() {
   return (
      <section
         style={{
            width: '100%',
            minHeight: '100vh',
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'row' as const,
            justifyContent: 'space-between',
         }}
      >
         <Filter />
         <ProductContainerStyle>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
               }}
            >
               <Skeleton height={55} width={240} animation='wave' variant='text' />
               <Skeleton height={18} width={90} animation='wave' variant='text' />
               <Skeleton height={35} width={210} animation='wave' variant='rectangular' />
            </div>
            <CardGridContainerStyle>
               <Container />
            </CardGridContainerStyle>
         </ProductContainerStyle>
      </section>
   )
}

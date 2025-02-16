import Skeleton from '@mui/material/Skeleton'
import { ShopContainerStyle } from '../../../app/shop/styles/style'
import { ProductContainerStyle, CardGridContainerStyle } from '../../Shop/Products/Styles'

import Container from '../ProductCard/Container'
import Filter from './Filter'

export default function ShopPage() {
   return (
      <ShopContainerStyle>
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
      </ShopContainerStyle>
   )
}

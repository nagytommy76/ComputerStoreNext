'use client'
import dynamic from 'next/dynamic'

const ItemsContainter = dynamic(() => import('./Includes/ItemsContainter'), { ssr: false })
const PriceFooter = dynamic(() => import('./Includes/PriceFooter'), { ssr: false })

import BackgroundImage from '@images/AdressBackG.jpg'
import { ProductContainer, ProductImage } from './Styles'

export default function Products() {
   return (
      <ProductContainer>
         <ProductImage src={BackgroundImage} alt='background' width={900} height={1500} />
         <ItemsContainter />
         <PriceFooter />
      </ProductContainer>
   )
}

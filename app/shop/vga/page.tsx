import { Metadata } from 'next'

import { ShopContainerStyle } from './styles/style'

export const metadata: Metadata = {
   title: 'Computer Store | Videókártya',
   description: 'VGA products',
}

import VgaShopPage from '@/components/Shop/Vga/VgaShopPage'

export default async function page() {
   return (
      <section style={ShopContainerStyle}>
         <VgaShopPage />
      </section>
   )
}
// https://stackoverflow.com/questions/77971327/server-side-component-list-filtering-in-next-js

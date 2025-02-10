import { Metadata } from 'next'
import { ShopContainerStyle } from '../styles/style'

export const metadata: Metadata = {
   title: 'Computer Store | Processzorok',
   description: 'CPU products (Processors)',
}

export default async function page() {
   return (
      <section style={ShopContainerStyle}>
         <h1>CPU-k</h1>
      </section>
   )
}

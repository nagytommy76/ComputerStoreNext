import { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Computer Store | Rendelés leadása',
   description: 'Checkout page',
}

async function getUserDetails() {
   const data = await fetch(`${process.env.APP_URL}/api/user-details`, { method: 'GET' })
   const response = await data.json()
   return await response
}

export default async function page() {
   const response = await getUserDetails()
   console.log(response)
   return (
      <div>
         <h1>CHECKOUT</h1>
      </div>
   )
}

import { useContext } from 'react'
import { CheckoutContext } from '../../Context/CheckoutContext'

import UserDetails from './UserDetails'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import { SummaryContainer } from './Styles'

export default function Summary() {
   const {
      checkoutReducer: { paymentMethod },
   } = useContext(CheckoutContext)
   return (
      <SummaryContainer>
         <UserDetails />
         <Card>
            <CardContent>
               <Typography variant='h5'>Fizetési mód: </Typography>
               <Typography mt={1} variant='body1'>
                  {paymentMethod === 'cashOnDelivery' ? 'Készpénzes fizetés' : 'Bankkártyás fizetés'}
               </Typography>
            </CardContent>
         </Card>
      </SummaryContainer>
   )
}

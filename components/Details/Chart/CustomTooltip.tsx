'use client'
import { ChartContainer } from './Styles'

export default function CustomTooltip({ active, label, payload }: CustomTooltipProps) {
   const date = new Date(label)
   if (active && payload && payload.length) {
      return (
         <ChartContainer>
            <p>{date.toLocaleDateString('hu-HU')}</p>
            <p>Ár: {payload[0].payload.price.toLocaleString()} Ft</p>
         </ChartContainer>
      )
   }
}

type CustomTooltipProps = {
   active: boolean
   label: string
   payload: {
      payload: {
         price: number
         timestamp: string
      }
   }[]
}

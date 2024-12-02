'use client'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useAppSelector } from '@/reduxStore/hooks'

import { ChartSection } from './Styles'
import type { ChartDataType } from '@/types/baseModelTypes'
import CustomTooltip from './CustomTooltip'

export default function Chart({ chartData }: { chartData: ChartDataType[] }) {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <ChartSection>
         <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={chartData}>
               <CartesianGrid strokeDasharray='0' />
               <XAxis
                  tick={{ stroke: `${isDarkTheme ? '#FFF' : '#000'}`, strokeWidth: 1, fontSize: 16 }}
                  dataKey='timestamp'
               />
               <YAxis
                  tick={{ stroke: `${isDarkTheme ? '#FFF' : '#000'}`, strokeWidth: 1, fontSize: 14 }}
                  dataKey='price'
                  domain={['dataMin', 'dataMax']}
               />
               <Tooltip content={<CustomTooltip />} />
               <Area
                  type='monotone'
                  dataKey='price'
                  stroke={`${isDarkTheme ? '#FFF' : '#000'}`}
                  fill='#ff8f00'
               />
            </AreaChart>
         </ResponsiveContainer>
      </ChartSection>
   )
}

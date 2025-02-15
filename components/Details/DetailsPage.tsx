import dynamic from 'next/dynamic'

import TopNavigation from '@/Details/TopNavigation/TopNavigation'
import RightHead from '@/Details/RightHead/RightHead'
import BodySection from '@/Details/Body/Body'
import Chart from '@/Details/Chart/Chart'
import Rating from '@/Details/Rating/Rating'
const ImageSlider = dynamic(() => import('@/Details/ImageSlider/ImageSlider'))

import { HeadSection, DetailsContainer } from './style'

import type { CpuType } from '@/models/Cpu/cpuTypes'
import type { VgaType } from '@/models/Vga/vgaTypes'

export default function DetailsPage({
   details,
   DetailsTableComponent,
   productType = 'vga',
}: {
   details: CpuType | VgaType
   DetailsTableComponent: React.ReactNode
   productType: string
}) {
   return (
      <DetailsContainer>
         <TopNavigation productType={productType} type={details.type} />
         <HeadSection>
            <ImageSlider
               pictureUrls={details.pictureUrls}
               type={details.type}
               typeCode={details.typeCode as string}
               manufacturer={details.manufacturer}
            />
            <RightHead
               manufacturer={details.manufacturer}
               type={details.type}
               typeCode={details.typeCode as string}
               price={details.price}
               warranty={details.details.warranity}
               manufacturerPageUrl={details.details.manufacturerPageUrl}
            />
         </HeadSection>
         <BodySection description={details.details.description} ProductDetailsTable={DetailsTableComponent} />
         <Chart chartData={details.details.chartData} />
         <Rating comments={details.ratingValues} />
      </DetailsContainer>
   )
}

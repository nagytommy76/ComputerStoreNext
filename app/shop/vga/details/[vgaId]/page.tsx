import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { VgaType } from '@/models/Vga/vgaTypes'

import { HeadSection, DetailsContainer } from './styles'

import RightHead from '@/Details/RightHead/RightHead'
import TopNavigation from '@/Details/TopNavigation/TopNavigation'
import BodySection from '@/Details/Body/Body'
import VgaDetailsTable from '@/Details/ProductsTable/Vga/VgaDetailsTable'
import Chart from '@/Details/Chart/Chart'
import Rating from '@/Details/Rating/Rating'
const ImageSlider = dynamic(() => import('@/Details/ImageSlider/ImageSlider'))

type Props = {
   searchParams: Promise<{ productMan: string; productType: string; typeCode: string }>
}
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
   const { productMan, productType, typeCode } = await searchParams
   return {
      title: `${productMan} ${productType} ${typeCode} | ComputerStore`,
      description: `${productMan} ${productType} ${typeCode}`,
   }
}

async function getVgaData(id: string) {
   const response = await fetch(`${process.env.APP_URL}/api/vga/details?vgaId=${id}`, {
      method: 'GET',
   })
   return (await response.json()) as Promise<{ foundVgaDetails: VgaType }>
}

export default async function page({ params }: { params: Promise<{ vgaId: string }> }) {
   const vgaId = await params
   const { foundVgaDetails } = await getVgaData(vgaId.vgaId)

   return (
      <DetailsContainer>
         <TopNavigation productType='vga' type={foundVgaDetails.type} />
         <HeadSection>
            <ImageSlider
               pictureUrls={foundVgaDetails.pictureUrls}
               type={foundVgaDetails.type}
               typeCode={foundVgaDetails.typeCode as string}
               manufacturer={foundVgaDetails.manufacturer}
            />
            <RightHead
               manufacturer={foundVgaDetails.manufacturer}
               type={foundVgaDetails.type}
               typeCode={foundVgaDetails.typeCode as string}
               price={foundVgaDetails.price}
               warranty={foundVgaDetails.details.warranity}
               manufacturerPageUrl={foundVgaDetails.details.manufacturerPageUrl}
            />
         </HeadSection>
         <BodySection
            description={foundVgaDetails.details.description}
            ProductDetailsTable={<VgaDetailsTable vgaDetails={foundVgaDetails.details} />}
         />
         <Chart chartData={foundVgaDetails.details.chartData} />
         <Rating comments={foundVgaDetails.ratingValues} />
      </DetailsContainer>
   )
}

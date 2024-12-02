import dynamic from 'next/dynamic'
import { VgaType } from '@/models/types/vgaTypes'

import { HeadSection, DetailsContainer } from './styles'

import RightHead from '@/Details/RightHead/RightHead'
import TopNavigation from '@/Details/TopNavigation/TopNavigation'
import BodySection from '@/Details/Body/Body'
import VgaDetailsTable from '@/Details/ProductsTable/Vga/VgaDetailsTable'
import Chart from '@/Details/Chart/Chart'
const ImageSlider = dynamic(() => import('@/Details/ImageSlider/ImageSlider'))

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
      </DetailsContainer>
   )
}

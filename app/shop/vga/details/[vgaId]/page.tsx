import dynamic from 'next/dynamic'
import { VgaType } from '@/models/types/vgaTypes'

import { HeadSection, DetailsContainer, BodySection } from './styles'

const ImageSlider = dynamic(() => import('@/components/Details/ImageSlider/ImageSlider'))
const RightHead = dynamic(() => import('@/components/Details/RightHead/RightHead'))

async function getVgaData(id: string) {
   const response = await fetch(`${process.env.APP_URL}/api/vga/details?vgaId=${id}`, {
      method: 'GET',
   })
   return (await response.json()) as Promise<{ foundVgaDetails: VgaType }>
}

export default async function page({ params }: { params: Promise<{ vgaId: string }> }) {
   const vgaId = await params
   const { foundVgaDetails } = await getVgaData(vgaId.vgaId)

   console.log(vgaId)

   return (
      <DetailsContainer>
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
            />
         </HeadSection>
         <BodySection>BODY</BodySection>
      </DetailsContainer>
   )
}

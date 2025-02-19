import { Metadata } from 'next'
import { VgaType } from '@/models/Vga/vgaTypes'

import DetailsPage from '@/Details/DetailsPage'
import VgaDetailsTable from '@/Details/ProductsTable/Vga/VgaDetailsTable'

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
      <DetailsPage
         productType='vga'
         details={foundVgaDetails}
         DetailsTableComponent={<VgaDetailsTable vgaDetails={foundVgaDetails.details} />}
      />
   )
}

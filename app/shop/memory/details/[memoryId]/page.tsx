import { Metadata } from 'next'
import type { MemoryProductType } from '@/models/Memory/memoryTypes'

import MemoryDetailsTable from '@/Details/ProductsTable/Memory/MemoryDetailsTable'
import DetailsPage from '@/Details/DetailsPage'

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

async function getMemoryData(id: string) {
   const response = await fetch(`${process.env.APP_URL}/api/memory/details?memoryId=${id}`, {
      method: 'GET',
   })
   return (await response.json()) as Promise<{ foundMemoryDetails: MemoryProductType }>
}

export default async function page({ params }: { params: Promise<{ memoryId: string }> }) {
   const memoryId = (await params).memoryId
   const { foundMemoryDetails } = await getMemoryData(memoryId)
   return (
      <DetailsPage
         productType='memory'
         details={foundMemoryDetails}
         DetailsTableComponent={<MemoryDetailsTable memoryDetails={foundMemoryDetails.details} />}
      />
   )
}

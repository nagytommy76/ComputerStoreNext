import { Metadata } from 'next'
import { CpuType } from '@Models/Cpu/cpuTypes'

import DetailsPage from '@/Details/DetailsPage'
import CpuDetailTable from '@/Details/ProductsTable/Cpu/CpuDetailTable'

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

async function getCpuData(id: string) {
   const response = await fetch(`${process.env.APP_URL}/api/cpu/details?cpuId=${id}`, {
      method: 'GET',
   })
   return (await response.json()) as Promise<{ foundCpuDetails: CpuType }>
}

export default async function page({ params }: { params: Promise<{ cpuId: string }> }) {
   const cpuId = (await params).cpuId
   const { foundCpuDetails } = await getCpuData(cpuId)

   return (
      <DetailsPage
         details={foundCpuDetails}
         DetailsTableComponent={<CpuDetailTable details={foundCpuDetails.details} />}
         productType='cpu'
      />
   )
}

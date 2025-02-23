import TopNavigation from '@/Details/TopNavigation/TopNavigation'
import RightHead from '@/Details/RightHead/RightHead'
import BodySection from '@/Details/Body/Body'
import Chart from '@/Details/Chart/Chart'
import Rating from '@/Details/Rating/Rating'
import ImageSlider from '@/Details/ImageSlider/ImageSlider'
import AddToCart from '@/Details/AddToCart/AddToCart'

import { HeadSection, DetailsContainer } from './style'

import type { CpuType } from '@/models/Cpu/cpuTypes'
import type { VgaType } from '@/models/Vga/vgaTypes'
import type { MemoryProductType } from '@/models/Memory/memoryTypes'

export default function DetailsPage({
   details: product,
   DetailsTableComponent,
   productType = 'vga',
}: {
   details: CpuType | VgaType | MemoryProductType
   DetailsTableComponent: React.ReactNode
   productType: string
}) {
   return (
      <DetailsContainer>
         <TopNavigation productType={productType} type={product.type} />
         <HeadSection>
            <ImageSlider
               pictureUrls={product.pictureUrls}
               type={product.type}
               typeCode={product.typeCode as string}
               manufacturer={product.manufacturer}
            />
            <RightHead
               manufacturer={product.manufacturer}
               type={product.type}
               typeCode={product.typeCode as string}
               price={product.price}
               warranty={product.details.warranity}
               manufacturerPageUrl={product.details.manufacturerPageUrl}
            >
               <AddToCart
                  manufacturer={product.manufacturer}
                  type={product.type}
                  price={product.price}
                  pictureUrl={product.pictureUrls[0]}
                  productId={product._id}
                  productType={productType}
               />
            </RightHead>
         </HeadSection>
         <BodySection description={product.details.description} ProductDetailsTable={DetailsTableComponent} />
         <Chart chartData={product.details.chartData} />
         <Rating comments={product.ratingValues} />
      </DetailsContainer>
   )
}

'use client'
import { DetailsContainer, HeadSection } from '@/Details/style'
import { styled } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

import TopNav from './TopNav'
import RightHead from './RightHead'
import Body from './Body'

export default function DetailsPage() {
   return (
      <DetailsContainer>
         <TopNav />
         <HeadSection>
            <ImageSection>
               <ImageSkeleton variant='rectangular' height={400} animation='wave' />
            </ImageSection>
            <RightHead />
         </HeadSection>
         <Body />
      </DetailsContainer>
   )
}

const ImageSection = styled('section')(({ theme }) => ({
   minHeight: '50vh',
   flex: 1,
   [`@media (max-width: ${theme.breakpoints.values.sm}px})`]: {
      flex: 'unset',
   },
}))

const ImageSkeleton = styled(Skeleton)(({ theme }) => ({
   [`@media (max-width: ${theme.breakpoints.values.sm}px})`]: {
      margin: '.75rem 0',
   },
}))

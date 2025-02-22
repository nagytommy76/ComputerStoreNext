'use client'
import React, { useRef, useState } from 'react'
import useImgHandle from './Hook/useImgHandle'

import Slide from '@mui/material/Slide'
import { StyledSlideSection, StyledImageContainer, StyledImage } from './SliderStyle'

const RightArrow = React.lazy(() => import('./RightArrow'))
const LeftArrow = React.lazy(() => import('./LeftArrow'))
const ImageModal = React.lazy(() => import('./ImgModal/ImageModal'))

const ImageSlider: React.FC<{
   pictureUrls: string[]
   manufacturer: string
   type: string
   typeCode: string
}> = ({ pictureUrls, manufacturer, type, typeCode }) => {
   const { currentPic, direction, isSlide, nextImage, previousImage } = useImgHandle(pictureUrls)
   const [isImgModalOpen, setIsImgModalOpen] = useState<boolean>(false)
   const NodeRef = useRef(null)

   const handleModalOpen = () => {
      setIsImgModalOpen((prevValue) => !prevValue)
   }

   return (
      <StyledSlideSection>
         <StyledImageContainer ref={NodeRef}>
            <RightArrow
               pictureUrlsLength={pictureUrls.length}
               nextImage={nextImage}
               currentPic={currentPic}
            />
            <LeftArrow
               pictureUrlsLength={pictureUrls.length}
               previousImage={previousImage}
               currentPic={currentPic}
            />
            <Slide direction={direction} in={isSlide} container={NodeRef.current}>
               <div style={{ cursor: 'pointer' }}>
                  <StyledImage onClick={handleModalOpen} src={pictureUrls[currentPic]} alt='' />
                  <ImageModal
                     pictureUrls={pictureUrls}
                     manufacturer={manufacturer}
                     type={type}
                     typeCode={typeCode}
                     actualCurrentPic={currentPic}
                     handleCloseModal={handleModalOpen}
                     isImgModalOpen={isImgModalOpen}
                  />
               </div>
            </Slide>
         </StyledImageContainer>
      </StyledSlideSection>
   )
}

export default ImageSlider

import React, { useEffect } from 'react'
import useImgHandle from '../Hook/useImgHandle'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledImage, StyledModal, ImageContainer } from './Styles'
import ImagePreview from './ImagePreview/ImagePreview'
import ImgModalHeader from './ImgModalHeader'
import RightArrow from '../RightArrow'
import LeftArrow from '../LeftArrow'

const ImageModal: React.FC<{
   pictureUrls: string[]
   manufacturer: string
   type: string
   typeCode: string
   isImgModalOpen: boolean
   handleCloseModal: () => void
   actualCurrentPic: number
}> = ({ pictureUrls, isImgModalOpen, handleCloseModal, actualCurrentPic, manufacturer, type, typeCode }) => {
   const { currentPic, nextImage, previousImage, setCurrentPictureToAnyIndex, isSlide } =
      useImgHandle(pictureUrls)

   useEffect(() => {
      setCurrentPictureToAnyIndex(actualCurrentPic)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [actualCurrentPic])

   return (
      <Modal
         aria-labelledby='transition-modal-title'
         aria-describedby='transition-modal-description'
         open={isImgModalOpen}
         onClose={handleCloseModal}
         closeAfterTransition
      >
         <Fade in={isImgModalOpen} unmountOnExit mountOnEnter>
            <StyledModal>
               <ImgModalHeader
                  manufacturer={manufacturer}
                  type={type}
                  typeCode={typeCode}
                  handleCloseModal={handleCloseModal}
               />
               <RightArrow
                  currentPic={currentPic}
                  nextImage={nextImage}
                  pictureUrlsLength={pictureUrls.length}
               />
               <LeftArrow
                  currentPic={currentPic}
                  previousImage={previousImage}
                  pictureUrlsLength={pictureUrls.length}
               />
               <Fade in={isSlide}>
                  <ImageContainer>
                     <StyledImage src={pictureUrls[currentPic]} alt='' />
                  </ImageContainer>
               </Fade>
               <ImagePreview
                  pictureUrls={pictureUrls}
                  setCurrentPictureToAnyIndex={setCurrentPictureToAnyIndex}
                  currentPic={currentPic}
               />
            </StyledModal>
         </Fade>
      </Modal>
   )
}

export default ImageModal

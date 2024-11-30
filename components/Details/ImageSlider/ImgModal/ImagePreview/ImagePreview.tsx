import { StyledContainer, StyledImage } from './Style'

const ImagePreview: React.FC<{
   pictureUrls: string[]
   currentPic: number
   setCurrentPictureToAnyIndex: (indexToSet: number) => void
}> = ({ pictureUrls, currentPic, setCurrentPictureToAnyIndex }) => {
   const handleChangeOnClick = (event: React.MouseEvent<HTMLElement>, index: number) =>
      setCurrentPictureToAnyIndex(index)

   return (
      <StyledContainer>
         {pictureUrls.map((image, index) => (
            <StyledImage
               onClick={(event) => handleChangeOnClick(event, index)}
               isActive={index === currentPic}
               key={index}
               src={image}
               alt=''
            />
         ))}
      </StyledContainer>
   )
}

export default ImagePreview

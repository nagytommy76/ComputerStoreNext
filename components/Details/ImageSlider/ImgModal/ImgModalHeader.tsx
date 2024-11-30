import { StyledModalHeader, StyledTypography } from './Styles'
import CloseModalBtn from './CloseModalBtn'

const ImgModalHeader: React.FC<{
   handleCloseModal: () => void
   manufacturer: string
   type: string
   typeCode: string
}> = ({ handleCloseModal, manufacturer, type, typeCode }) => {
   return (
      <StyledModalHeader>
         <StyledTypography variant='h5'>
            {manufacturer} {type} {typeCode}
         </StyledTypography>
         <CloseModalBtn handleCloseModal={handleCloseModal} />
      </StyledModalHeader>
   )
}

export default ImgModalHeader

import { BodySection, SyledBox } from './Styles'

import Typography from '@mui/material/Typography'

export default function Body({
   description,
   ProductDetailsTable,
}: {
   description?: string
   ProductDetailsTable: React.ReactNode
}) {
   return (
      <BodySection>
         {description && (
            <SyledBox>
               <Typography variant='body1'>{description}</Typography>
            </SyledBox>
         )}
         {ProductDetailsTable}
      </BodySection>
   )
}

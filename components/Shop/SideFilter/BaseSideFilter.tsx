import Typography from '@mui/material/Typography'
import { StyledFilter } from './Styles'

import ByManufacturer from './Base/ByManufacturer'
import ByWarranity from './Base/ByWarranity'
import PriceRange from './Base/PriceRange'
import OrderByPrice from './Base/OrderByPrice'

const BaseSideFilter = ({ children }: { children: React.ReactNode }) => {
   return (
      <StyledFilter elevation={0} square>
         <Typography variant='h5' gutterBottom>
            Szűrés
         </Typography>
         <OrderByPrice />
         <ByManufacturer />
         <ByWarranity />
         <PriceRange />
         {children}
      </StyledFilter>
   )
}

export default BaseSideFilter

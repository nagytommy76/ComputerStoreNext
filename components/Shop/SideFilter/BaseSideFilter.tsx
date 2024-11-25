import Typography from '@mui/material/Typography'
import { StyledFilter } from './Styles'

import ByManufacturer from './Base/ByManufacturer'
import ByWarranity from './Base/ByWarranity'
import PriceRange from './Base/PriceRange'
import OrderByPrice from './Base/OrderByPrice'
import type { ProductFilterType } from '@/types/filterTypes'

const BaseSideFilter = ({ children, filters }: { children: React.ReactNode; filters: ProductFilterType }) => {
   return (
      <StyledFilter elevation={0} square>
         <Typography variant='h5' gutterBottom mt={2}>
            Szűrés
         </Typography>
         <OrderByPrice />
         <ByManufacturer allManufacturers={filters.allManufacturers} />
         <ByWarranity allWarranties={filters.allWarranties} />
         <PriceRange minPrice={filters.minPrice} maxPrice={filters.maxPrice} />
         {children}
      </StyledFilter>
   )
}

export default BaseSideFilter

export interface FilterTypes {
   page: number
   perPage: number
   orderBy: string
   priceRange: number[]
   selectedManufacturer: string
   productName: string
   selectedWarranty: string
   totalProducts: number
}

export interface ProductFilterType extends FilterTypes {
   minPrice: number
   maxPrice: number
   allManufacturers: string[]
   allWarranties: string[]
}

export interface FilterTypes {
   orderBy: string
   priceRange: number[]
   selectedManufacturer: string
   productName: string
   selectedWarranty: string
}

export interface ProductFilterType extends FilterTypes {
   minPrice: number
   maxPrice: number
   allManufacturers: string[]
   allWarranties: string[]
}

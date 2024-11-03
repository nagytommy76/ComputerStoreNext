import type { BaseProductType } from '@Types/baseModelTypes'
import type { Model } from 'mongoose'

export function convertSearchParamsToQueryObject(searchParams: URLSearchParams) {
   const paramsObject: { [key: string]: string } = {}
   searchParams.forEach((value, key) => {
      paramsObject[key] = value
   })
   return paramsObject
}

export default async function BaseProductRoute(
   searchParams: URLSearchParams,
   ProductModel: Model<BaseProductType>,
   extraQueryParameters: object = {}
) {
   const paramsObject = convertSearchParamsToQueryObject(searchParams)

   const selectedMan = paramsObject['byManufacturer'] == 'all' ? '' : paramsObject['byManufacturer']
   const orderByPrice: 'asc' | 'desc' = paramsObject['orderBy'] == 'asc' ? 'asc' : 'desc'
   const priceRange = paramsObject['priceRange'].split(',').map(Number)
   const warranty =
      paramsObject['selectedWarranty'] == 'all'
         ? null
         : { 'details.warranity': paramsObject['selectedWarranty'] }
   const productName = paramsObject['productName'].trim() || ''

   const products = await ProductModel.find<BaseProductType>({
      manufacturer: new RegExp(selectedMan, 'i'),
      $or: [
         { type: new RegExp(productName, 'i') },
         { typeCode: new RegExp(productName, 'i') },
         { itemNumber: new RegExp(productName, 'i') },
      ],
      price: { $gte: priceRange[0], $lte: priceRange[1] },
      ...warranty,
      ...extraQueryParameters,
   })
      .select('itemNumber price manufacturer type typeCode pictureUrls ratingValues._id')
      .sort({ price: orderByPrice })
      .lean()

   return products
}

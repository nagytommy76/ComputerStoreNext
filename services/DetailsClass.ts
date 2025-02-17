import dbConnect from '@DBConnect'
import { convertSearchParamsToQueryObject } from '@/Services/BaseProductRoute'
import { Model } from 'mongoose'

export default class DetailsClass {
   async returnProductDetails(
      searchParams: URLSearchParams,
      paramsObjectKey: string,
      ProductModel: Model<any>
   ) {
      await dbConnect()

      const paramsObject = convertSearchParamsToQueryObject(searchParams)
      const productId = paramsObject[paramsObjectKey]
      const foundDetails = await ProductModel.findOne({ _id: productId })
         .select([
            '_id',
            'type',
            'typeCode',
            'ratingValues',
            'itemNumber',
            'manufacturer',
            'pictureUrls',
            'price',
            'details',
         ])
         .sort({ 'details.chartData.timpestamp': 1 })
         .lean()

      return foundDetails
   }
}

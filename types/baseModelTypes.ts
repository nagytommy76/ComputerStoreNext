export interface BaseProductType {
   _id: string
   itemNumber?: string
   type: string
   typeCode?: string
   manufacturer: string
   price: number
   pictureUrls: string[]
   inStockQuantity: number
   ratingValues: RatingValues[]
   isHighlighted?: boolean
}

export type RatingValues = {
   _id: string
   rating: number
   comment?: string
   ratedAt: Date
   userId: string
   userName: string
   responses: ResponsesType[]
   commentAnswers: CommentAnswerType[]
}

export type CommentAnswerType = {
   _id: string
   userId: string
   userName: string
   answer: string
   answeredAt: Date
   responses: ResponsesType[]
}

export type ResponsesType = {
   _id: string
   userId?: string
   isLike: boolean
}

export type ChartDataType = {
   _id: string
   price: number
   timestamp: number
}

import dbConnect from '@DBConnect'
import { VgaProduct } from '@Models/vga'

export async function GET() {
   await dbConnect()

   const vgaProducts = await VgaProduct.find({})
      .select('price manufacturer type typeCode pictureUrls ratingValues._id')
      .sort({ price: 'asc' })

   return new Response(JSON.stringify({ vgaProducts }))
}

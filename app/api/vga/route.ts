import dbConnect from '@DBConnect'
import { VgaProduct } from '@Models/vga'

export async function GET() {
   await dbConnect()

   const vgaProducts = await VgaProduct.find({})

   return new Response(JSON.stringify({ vgaProducts }))
}

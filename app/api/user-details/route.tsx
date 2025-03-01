import { auth } from '@NextAuth'
import { NextResponse } from 'next/server'
// import dbConnect from '@DBConnect'

export async function GET() {
   const auth1 = await auth()
   return NextResponse.json({ auth: auth1 }, { status: 200 })
}

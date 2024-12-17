import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: JWTPayload, expirationTime: string | number | Date = '7d') {
   return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(expirationTime)
      .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
   try {
      const { payload } = await jwtVerify(session, encodedKey, {
         algorithms: ['HS256'],
      })
      return payload
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
   } catch (error) {
      console.log('Failed to verify session')
   }
}

export async function createSession(payload: JWTPayload) {
   const expiresAt = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 nap * 24 óra * 1óra * 1 perc
   const sessionToken = await encrypt(payload, expiresAt)
   const cookieStore = await cookies()

   cookieStore.set('sessionToken', sessionToken, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
   })
}

type JWTPayload = {
   email: string
   userId: string
   useName: string
   exp?: number
   iat?: number
}

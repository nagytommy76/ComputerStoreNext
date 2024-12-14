import 'server-only'
import { SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: JWTPayload) {
   return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
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

type JWTPayload = {
   email: string
   userId: string
   useName: string
   exp: number
   iat: number
}

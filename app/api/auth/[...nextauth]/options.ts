import type { NextAuthOptions } from 'next-auth'
const options: NextAuthOptions = {
   providers: [],
   session: {
      strategy: 'jwt',
   },
   jwt: {
      secret: process.env.NEXTAUTH_SECRET || '',
      maxAge: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2 nap * 24 óra * 1óra * 1 perc
   },
   pages: {},
}

export default options

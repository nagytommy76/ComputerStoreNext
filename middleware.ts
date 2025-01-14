import NextAuth from 'next-auth'
import authConfig from './utils/auth/auth.config'
import { authRoutes, protectedRoutes, adminRoutes } from './routes'

const { auth } = NextAuth(authConfig)

export default auth(async function middleware(req) {
   const nextUrl = req.nextUrl
   const isLoggedIn = !!req.auth
   const isAdmin = !!req.auth?.user?.isAdmin

   const isApiAuthRoute = nextUrl.pathname.startsWith('/api/auth')
   const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname)
   const isAuthRoute = authRoutes.includes(nextUrl.pathname)
   const isAdminRoute = adminRoutes.includes(nextUrl.pathname)

   if (isApiAuthRoute) return
   if (isAuthRoute) {
      if (isLoggedIn) return Response.redirect(new URL('/', nextUrl))
      return
   }

   if (!isLoggedIn && isProtectedRoute) return Response.redirect(new URL('/login', nextUrl))

   if (!isAdmin && isAdminRoute) return Response.redirect(new URL('/', nextUrl))

   return
})

export const config = {
   matcher: [
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
   ],
}

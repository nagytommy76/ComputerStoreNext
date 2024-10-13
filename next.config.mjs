/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'media.icdn.hu',
         },
         {
            protocol: 'https',
            hostname: 'www.techpowerup.com',
         },
         {
            protocol: 'https',
            hostname: 'media.cdn.sapphiretech.com.cn',
         },
         {
            protocol: 'https',
            hostname: 'cdn.alza.hu',
         },
         {
            protocol: 'https',
            hostname: 'asset.msi.com',
         },
         {
            protocol: 'https',
            hostname: 'static.gigabyte.com',
         },
      ],
   },
}

export default nextConfig

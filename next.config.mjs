/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
  
  compress: true,                    
  trailingSlash: false,             
  poweredByHeader: false,          
  
  images: {

    unoptimized: true,
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nycseguridad.com.ar',
      },
    ],
    
    formats: ['image/webp', 'image/avif'],
    
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',  
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

if (process.env.NODE_ENV === 'production') {
  nextConfig.compiler = {
    removeConsole: {
      exclude: ['error', 'warn'],       
    },
  }
};

export default nextConfig;
// next.config.js - Netlify 优化版
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    // Netlify 优化
    experimental: {
        optimizeCss: true
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
    }
}

module.exports = nextConfig
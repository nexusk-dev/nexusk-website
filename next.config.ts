// next.config.js - 修复版本
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    // 移除有问题的实验性功能
    // experimental: {
    //   optimizeCss: true  // 这个导致了 critters 错误
    // },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
    },
    // 确保静态导出正确
    basePath: '',
    assetPrefix: '',
    distDir: '.next'
}

module.exports = nextConfig
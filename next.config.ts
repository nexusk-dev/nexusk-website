// next.config.js - 动态版本配置
/** @type {import('next').NextConfig} */
const nextConfig = {
    // 移除静态导出配置，保持动态功能
    // output: 'export', // 删除这行

    // 启用实验性功能
    experimental: {
        serverComponentsExternalPackages: ['minecraft-server-util']
    },

    // 图片优化配置
    images: {
        domains: ['crafatar.com', 'mc-heads.net'], // MC 头像域名
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    },

    // 环境变量配置
    env: {
        CUSTOM_KEY: process.env.CUSTOM_KEY,
    },

    // 编译优化
    compiler: {
        // 生产环境移除 console.log
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error']
        } : false
    },

    // 重定向配置
    async redirects() {
        return [
            {
                source: '/server',
                destination: '/nexus',
                permanent: true,
            },
        ]
    },

    // 头部配置
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
                ],
            },
        ]
    },
}

module.exports = nextConfig
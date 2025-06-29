// src/app/api/server-status/route.ts
import { NextRequest, NextResponse } from 'next/server'

interface ServerStatus {
    online: boolean
    players: {
        online: number
        max: number
        list?: string[]
    }
    version: string
    motd: string
    ping: number
    icon?: string
}

interface McServerStatResponse {
    online: boolean
    ip: string
    port: number
    players?: {
        online: number
        max: number
        list?: string[]
    }
    version?: string
    motd?: {
        raw: string
        clean: string
        html: string
    }
    icon?: string
    ping?: number
}

export async function GET(request: NextRequest) {
    try {
        // 从环境变量获取服务器 IP，或使用默认值
        const serverIP = process.env.MINECRAFT_SERVER_IP || 'nexusk.fun'

        // 调用第三方 API 获取服务器状态
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`, {
            headers: {
                'User-Agent': 'NexusK-Website/1.0'
            },
            // 设置超时
            signal: AbortSignal.timeout(5000)
        })

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`)
        }

        const data: McServerStatResponse = await response.json()

        // 格式化响应数据
        const serverStatus: ServerStatus = {
            online: data.online || false,
            players: {
                online: data.players?.online || 0,
                max: data.players?.max || 100,
                list: data.players?.list || []
            },
            version: data.version || 'Unknown',
            motd: data.motd?.clean || data.motd?.raw || 'NexusK Server',
            ping: data.ping || 0,
            icon: data.icon || ''
        }

        // 添加自定义服务器信息
        const customInfo = {
            ...serverStatus,
            serverName: 'NexusK',
            description: '未来科技连接点',
            features: [
                '赛博朋克建筑',
                '科技 MOD',
                '友好社区',
                '定期活动'
            ],
            links: {
                discord: process.env.NEXT_PUBLIC_DISCORD_INVITE,
                website: process.env.NEXT_PUBLIC_SITE_URL
            }
        }

        return NextResponse.json(customInfo, {
            headers: {
                'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
                'Content-Type': 'application/json'
            }
        })

    } catch (error) {
        console.error('Error fetching server status:', error)

        // 返回离线状态而不是错误
        const offlineStatus: ServerStatus = {
            online: false,
            players: { online: 0, max: 100 },
            version: 'Unknown',
            motd: '服务器暂时离线',
            ping: 0
        }

        return NextResponse.json({
            ...offlineStatus,
            error: 'Unable to fetch server status',
            serverName: 'NexusK',
            description: '未来科技连接点'
        }, {
            status: 200, // 仍返回 200，前端判断 online 状态
            headers: {
                'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=30',
                'Content-Type': 'application/json'
            }
        })
    }
}

// 支持 OPTIONS 请求（CORS 预检）
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    })
}
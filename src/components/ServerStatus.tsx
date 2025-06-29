// src/components/ServerStatus.tsx
'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, Users, Zap, Server, Copy, Check } from 'lucide-react'

interface ServerInfo {
    online: boolean
    players: {
        online: number
        max: number
    }
    version: string
    motd: string
    ping: number
    serverName: string
    description: string
    features: string[]
    links: {
        discord?: string
        website?: string
    }
}

export default function ServerStatus() {
    const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null)
    const [loading, setLoading] = useState(true)
    const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
    const [copied, setCopied] = useState(false)

    const fetchServerStatus = async () => {
        try {
            const response = await fetch('/api/server-status')
            const data = await response.json()
            setServerInfo(data)
            setLastUpdate(new Date())
        } catch (error) {
            console.error('Failed to fetch server status:', error)
            // 设置离线状态
            setServerInfo({
                online: false,
                players: { online: 0, max: 100 },
                version: 'Unknown',
                motd: '连接失败',
                ping: 0,
                serverName: 'NexusK',
                description: '未来科技连接点',
                features: [],
                links: {}
            })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchServerStatus()

        // 每30秒自动更新
        const interval = setInterval(fetchServerStatus, 30000)

        return () => clearInterval(interval)
    }, [])

    const copyServerIP = async () => {
        try {
            await navigator.clipboard.writeText('nexusk.fun')
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy to clipboard:', error)
        }
    }

    const refreshStatus = () => {
        setLoading(true)
        fetchServerStatus()
    }

    if (loading && !serverInfo) {
        return (
            <div className="glass-card">
            <div className="animate-pulse space-y-4">
            <div className="h-6 bg-nexus-surface rounded w-3/4"></div>
                <div className="h-4 bg-nexus-surface rounded w-1/2"></div>
            <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
            <div key={i} className="h-12 bg-nexus-surface rounded"></div>
    ))}
        </div>
        </div>
        </div>
    )
    }

    const statusColor = serverInfo?.online ? 'nexus-accent' : 'red-500'
    const statusText = serverInfo?.online ? 'ONLINE' : 'OFFLINE'

    return (
        <div className={`glass-card border-${statusColor}/50 relative overflow-hidden`}>
    {/* 背景动画效果 */}
    {serverInfo?.online && (
        <div className="absolute inset-0 bg-gradient-to-r from-nexus-accent/5 to-transparent animate-pulse"></div>
    )}

    <div className="relative">
        {/* 头部状态 */}
        <div className="flex items-center justify-between mb-6">
    <div className="flex items-center space-x-3">
    <div className={`w-4 h-4 rounded-full bg-${statusColor} ${serverInfo?.online ? 'animate-pulse' : ''}`}></div>
    <h3 className="font-cyber text-xl text-nexus-text">
        {serverInfo?.serverName || 'NexusK'}
    </h3>
    <span className={`px-3 py-1 rounded-full text-xs font-matrix bg-${statusColor}/20 text-${statusColor} border border-${statusColor}/30`}>
    {statusText}
    </span>
    </div>

    <button
    onClick={refreshStatus}
    disabled={loading}
    className="p-2 rounded-lg bg-nexus-surface/50 hover:bg-nexus-surface transition-colors"
    >
    <RefreshCw className={`w-4 h-4 text-nexus-muted ${loading ? 'animate-spin' : ''}`} />
    </button>
    </div>

    {/* 服务器描述 */}
    <p className="text-nexus-muted font-matrix mb-6">
        {serverInfo?.description}
    </p>

    {/* 状态信息网格 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* 在线玩家 */}
        <div className="bg-nexus-surface/30 rounded-lg p-4 border border-nexus-surface">
    <div className="flex items-center space-x-2 mb-2">
    <Users className="w-4 h-4 text-nexus-accent" />
    <span className="text-sm text-nexus-muted font-matrix">在线玩家</span>
        </div>
        <div className="text-2xl font-cyber text-nexus-text">
        {serverInfo?.players.online || 0}
    <span className="text-sm text-nexus-muted">/{serverInfo?.players.max || 100}</span>
    </div>
    </div>

    {/* 服务器延迟 */}
    <div className="bg-nexus-surface/30 rounded-lg p-4 border border-nexus-surface">
    <div className="flex items-center space-x-2 mb-2">
    <Zap className="w-4 h-4 text-nexus-primary" />
    <span className="text-sm text-nexus-muted font-matrix">延迟</span>
        </div>
        <div className="text-2xl font-cyber text-nexus-text">
        {serverInfo?.ping || 0}
    <span className="text-sm text-nexus-muted">ms</span>
        </div>
        </div>

    {/* 版本信息 */}
    <div className="bg-nexus-surface/30 rounded-lg p-4 border border-nexus-surface">
    <div className="flex items-center space-x-2 mb-2">
    <Server className="w-4 h-4 text-nexus-secondary" />
    <span className="text-sm text-nexus-muted font-matrix">版本</span>
        </div>
        <div className="text-lg font-cyber text-nexus-text truncate">
        {serverInfo?.version || 'Unknown'}
    </div>
    </div>
    </div>

    {/* 服务器特色（如果在线） */}
    {serverInfo?.online && serverInfo.features.length > 0 && (
        <div className="mb-6">
        <h4 className="text-sm font-matrix text-nexus-muted mb-3">服务器特色</h4>
            <div className="flex flex-wrap gap-2">
        {serverInfo.features.map((feature, index) => (
                <span
                    key={index}
            className="px-3 py-1 bg-nexus-primary/20 text-nexus-primary text-xs rounded-full border border-nexus-primary/30"
                >
                {feature}
                </span>
    ))}
        </div>
        </div>
    )}

    {/* 连接按钮 */}
    <div className="flex flex-col sm:flex-row gap-3">
    <button
        onClick={copyServerIP}
    className="flex-1 neon-button flex items-center justify-center space-x-2"
        >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        <span>{copied ? '已复制！' : '复制服务器 IP'}</span>
        </button>

    {serverInfo?.links.discord && (
        <a
            href={serverInfo.links.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card px-6 py-3 text-nexus-secondary border border-nexus-secondary/50 hover:bg-nexus-secondary/10 transition-all font-cyber text-center"
            >
            加入 Discord
    </a>
    )}
    </div>

    {/* 最后更新时间 */}
    {lastUpdate && (
        <div className="mt-4 text-xs text-nexus-muted font-matrix text-center">
            最后更新: {lastUpdate.toLocaleTimeString('zh-CN')}
        </div>
    )}
    </div>
    </div>
)
}
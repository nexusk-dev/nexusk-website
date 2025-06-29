// src/app/nexus/page.tsx

'use client'; // <--- 添加这一行！

import React, { useState, useEffect } from 'react'; // 现在 React Hooks 可以正常使用了
import { Server, Users, Globe, Settings, Wifi, Shield, Activity, Clock } from 'lucide-react';
import { CyberFrame, HologramEffect } from '@/components/cyberpunk';

// 导入我们创建的页面子组件
import { ServerStatusHUD } from './components/ServerStatusHUD';
import { PlayersManagement } from './components/PlayersManagement';
import { WorldInformation } from './components/WorldInformation';
import { ModsInformation } from './components/ModsInformation';
import { ConnectionGuide } from './components/ConnectionGuide';
import { ServerRules } from './components/ServerRules';
import { PerformanceChart } from './components/PerformanceChart';

const sections = {
    overview: { title: 'Server Overview', icon: Server, component: <ServerStatusHUD /> },
    players: { title: 'Player Management', icon: Users, component: <PlayersManagement /> },
    world: { title: 'World Information', icon: Globe, component: <WorldInformation /> },
    mods: { title: 'Mods & Plugins', icon: Settings, component: <ModsInformation /> },
    connection: { title: 'Connection Guide', icon: Wifi, component: <ConnectionGuide /> },
    rules: { title: 'Server Rules', icon: Shield, component: <ServerRules /> },
    performance: { title: 'Performance', icon: Activity, component: <PerformanceChart /> },
};

const NexusServerPage = () => {
    const [activeSection, setActiveSection] = useState<keyof typeof sections>('overview');
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    useEffect(() => {
        // 2. 在 useEffect 中设置初始时间和定时器。
        //    这个 Hook 只会在客户端执行，并且是在组件挂载（水合）之后。
        setLastUpdated(new Date().toLocaleTimeString());

        const interval = setInterval(() => {
            setLastUpdated(new Date().toLocaleTimeString());
        }, 60000); // 每分钟更新

        return () => clearInterval(interval); // 组件卸载时清除定时器
    }, []); // 空依赖数组确保此 effect 只运行一次（在挂载后）

    // ... 剩余的代码保持不变 ...
    return (
        <div className="min-h-screen bg-nexus-darker text-nexus-text">
            {/* 背景装饰 */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-nexus-primary/5 via-transparent to-nexus-electric-purple/5" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nexus-electric-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10">
                <header className="sticky top-0 z-30 bg-nexus-dark/50 backdrop-blur-md border-b border-nexus-primary/20">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <HologramEffect>
                            <h1 className="text-2xl font-cyber text-nexus-primary">NEXUSK.NEXUS</h1>
                        </HologramEffect>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-nexus-accent animate-pulse" />
                                <span className="text-sm font-matrix text-nexus-accent">SERVER ONLINE</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* 左侧导航 */}
                        <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start">
                            <CyberFrame color="var(--color-nexus-primary)" corners>
                                <div className="p-4">
                                    <h3 className="text-lg font-cyber text-nexus-primary mb-4">NAVIGATION</h3>
                                    <div className="space-y-2">
                                        {(Object.entries(sections) as [keyof typeof sections, typeof sections[keyof typeof sections]][]).map(([key, { title, icon: Icon }]) => (
                                            <button
                                                key={key}
                                                onClick={() => setActiveSection(key)}
                                                className={`w-full text-left px-4 py-3 rounded font-matrix text-sm transition-all duration-300 flex items-center space-x-3 ${
                                                    activeSection === key
                                                        ? 'bg-nexus-primary/20 text-nexus-primary border border-nexus-primary/50'
                                                        : 'text-nexus-text-muted hover:text-nexus-primary hover:bg-nexus-primary/10'
                                                }`}
                                            >
                                                <Icon className="w-4 h-4" />
                                                <span>{title}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </CyberFrame>
                        </aside>

                        {/* 主内容区 */}
                        <section className="lg:col-span-3 space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-cyber text-nexus-primary">{sections[activeSection].title}</h2>
                                <div className="flex items-center space-x-2 text-sm font-matrix text-nexus-text-muted">
                                    <Clock className="w-4 h-4" />
                                    <span>Last updated: {lastUpdated}</span>
                                </div>
                            </div>

                            {/* 动态渲染选中的内容面板 */}
                            <div className="min-h-[600px]">
                                {sections[activeSection].component}
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default NexusServerPage;
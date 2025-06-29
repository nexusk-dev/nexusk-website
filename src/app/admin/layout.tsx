// src/app/admin/layout.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Monitor, Users, Terminal, BarChart3, Bell, Settings, ChevronRight } from 'lucide-react';
import { HologramEffect } from '@/components/cyberpunk';
import { usePathname } from 'next/navigation'; // 使用 Next.js hook 来高亮当前链接
import { ClientTime } from '@/components/common/ClientTime'; // <-- 导入新组件
// 定义导航项
const navItems = [
    { key: 'dashboard', title: 'Dashboard', icon: Monitor, href: '/admin' },
    { key: 'players', title: 'Players', icon: Users, href: '/admin/players' },
    { key: 'console', title: 'Console', icon: Terminal, href: '/admin/console' },
    { key: 'analytics', title: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
    { key: 'alerts', title: 'Alerts', icon: Bell, href: '/admin/alerts' },
    { key: 'settings', title: 'Settings', icon: Settings, href: '/admin/settings' }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-nexus-darker text-nexus-text">
            {/* 背景装饰 */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-nexus-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-nexus-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* 侧边栏 */}
            <aside className={`relative z-20 flex-shrink-0 bg-nexus-dark/50 backdrop-blur-md border-r border-nexus-primary/20 transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-4 flex items-center justify-center h-20 border-b border-nexus-primary/20">
                        <Link href="/admin">
                            <Shield className={`w-8 h-8 text-nexus-primary transition-all ${sidebarCollapsed ? 'mx-auto' : 'mr-3'}`} />
                        </Link>
                        {!sidebarCollapsed && (
                            <HologramEffect>
                                <h1 className="text-xl font-cyber text-nexus-primary">ADMIN</h1>
                            </HologramEffect>
                        )}
                    </div>
                    <nav className="flex-grow p-4 space-y-2">
                        {navItems.map(({ key, title, icon: Icon, href }) => (
                            <Link key={key} href={href}
                                  className={`w-full flex items-center space-x-4 px-4 py-3 rounded-md font-matrix text-sm transition-all duration-300 ${
                                      pathname === href
                                          ? 'bg-nexus-primary/20 text-nexus-primary shadow-lg'
                                          : 'text-nexus-text-muted hover:text-nexus-primary hover:bg-nexus-primary/10'
                                  } ${sidebarCollapsed ? 'justify-center' : ''}`}
                            >
                                <Icon className="w-5 h-5" />
                                {!sidebarCollapsed && <span>{title}</span>}
                            </Link>
                        ))}
                    </nav>
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-4 border-t border-nexus-primary/20 text-nexus-text-muted hover:text-nexus-primary"
                    >
                        <ChevronRight className={`w-6 h-6 mx-auto transition-transform ${sidebarCollapsed ? '' : 'rotate-180'}`} />
                    </button>
                </div>
            </aside>

            {/* 主内容区 */}
            <div className="flex-1 flex flex-col relative z-10">
                <header className="bg-nexus-dark/50 backdrop-blur-md border-b border-nexus-primary/20 p-4 flex items-center justify-between h-20">
                    <div>
                        <h2 className="text-2xl font-cyber text-nexus-primary">
                            {navItems.find(item => item.href === pathname)?.title || 'Dashboard'}
                        </h2>
                        <p className="text-sm font-matrix text-nexus-text-muted">NexusK Server Administration Panel</p>
                    </div>
                    <div className="text-sm font-matrix text-right">
                        <p className="text-nexus-accent">SERVER ONLINE</p>
                        <ClientTime />
                    </div>
                </header>
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
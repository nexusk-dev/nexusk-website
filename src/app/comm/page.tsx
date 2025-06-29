// src/app/comm/page.tsx
'use client';

import React, { useState } from 'react';
import { HologramEffect } from '@/components/cyberpunk';

// 导入子组件
import { CommunityStats } from './components/CommunityStats';
import { DiscordWidget } from './components/DiscordWidget';
import { SocialIntegration } from './components/SocialIntegration';
import { PlayerShowcase } from './components/PlayerShowcase';

const sections = {
    overview: { title: 'Overview' },
    discord: { title: 'Discord' },
    social: { title: 'Social Platforms' },
    showcase: { title: 'Player Showcase' },
};

type SectionKey = keyof typeof sections;

export default function CommunityPage() {
    const [activeSection, setActiveSection] = useState<SectionKey>('overview');

    const renderContent = () => {
        switch (activeSection) {
            case 'overview': return <div className="space-y-8"><CommunityStats /><DiscordWidget /></div>;
            case 'discord': return <DiscordWidget />;
            case 'social': return <SocialIntegration />;
            case 'showcase': return <PlayerShowcase />;
            default: return <CommunityStats />;
        }
    };

    return (
        <div className="min-h-screen bg-nexus-darker text-nexus-text">
            {/* 背景装饰 */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-nexus-electric-purple/5 via-transparent to-nexus-secondary/5" />
            </div>

            <div className="relative z-10">
                <header className="sticky top-0 z-30 bg-nexus-dark/60 backdrop-blur-md border-b border-nexus-secondary/20">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <HologramEffect color="var(--color-nexus-secondary)">
                            <h1 className="text-2xl font-cyber text-nexus-secondary">NEXUSK.COMM</h1>
                        </HologramEffect>
                        <nav className="hidden md:flex items-center space-x-6">
                            {Object.entries(sections).map(([key, { title }]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveSection(key as SectionKey)}
                                    className={`font-matrix text-sm transition-colors relative group ${activeSection === key ? 'text-nexus-secondary' : 'text-nexus-text-muted hover:text-nexus-secondary'}`}
                                >
                                    {title}
                                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-nexus-secondary transition-all duration-300 ${activeSection === key ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </button>
                            ))}
                        </nav>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-nexus-electric-purple to-nexus-secondary">
                            {sections[activeSection].title}
                        </h2>
                        <p className="text-nexus-text-muted font-matrix mt-2">Connect, share, and grow with the NexusK community</p>
                    </div>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
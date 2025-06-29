// src/app/minecraft-basic_ui_showcase/page.tsx

'use client';

import React from 'react';
import {
    PlayerHead,
    ServerPing,
    PlayerList,
    BlockGrid,
    ItemDisplay,
    MCStats,
} from '@/components/minecraft';
import { GlassCard } from '@/components/ui'; // 我们可以用之前创建的卡片来美化布局

const MinecraftShowcasePage = () => {
    const samplePlayers = [
        { id: 1, name: 'Nexus_Admin', rank: 'Admin' as const, isOnline: true, playtime: '245h 12m', level: 67, ping: 23 },
        { id: 2, name: 'Cyber_Steve', rank: 'VIP' as const, isOnline: true, playtime: '189h 45m', level: 52, ping: 45 },
        { id: 3, name: 'Glitch_Alex', rank: 'Moderator' as const, isOnline: true, playtime: '150h', level: 48, ping: 88 },
        { id: 4, name: 'Data_Miner_42', rank: 'Player' as const, isOnline: false, playtime: '98h 23m', level: 34, ping: 120 },
        { id: 5, name: 'H0l0gram', rank: 'Premium' as const, isOnline: true, playtime: '112h', level: 41, ping: 33 },
        { id: 6, name: 'Byte_Bender', rank: 'Player' as const, isOnline: false, playtime: '50h', level: 25, ping: 210 },
    ];

    const sampleItem = {
        name: 'Netherite Blade of the Nexus',
        id: 'netherite_sword',
        count: 1,
        enchantments: ['Sharpness X', 'Unbreaking V', 'Mending', 'Looting IV'],
        rarity: 'legendary' as const,
        description: 'A blade infused with the energy of the Nexus.'
    };

    return (
        <main className="min-h-screen bg-nexus-darker text-nexus-text p-4 sm:p-8 font-matrix">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="text-center space-y-4 pt-8">
                    <h1 className="text-4xl md:text-5xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-mc-emerald to-mc-diamond">
                        MINECRAFT UI COMPONENTS
                    </h1>
                    <p className="text-nexus-text-muted">专为 NexusK 服务器设计的 Minecraft 专用组件</p>
                </div>

                <section>
                    <h2 className="text-2xl font-cyber text-mc-emerald tracking-widest mb-6">PLAYER HEAD</h2>
                    <GlassCard>
                        <div className="flex flex-wrap items-end justify-around gap-8 p-6">
                            <div className="text-center space-y-3">
                                <PlayerHead username="Steve" size="sm" />
                                <div className="text-sm text-nexus-text-muted">Small (32px)</div>
                            </div>
                            <div className="text-center space-y-3">
                                <PlayerHead username="Alex" size="md" />
                                <div className="text-sm text-nexus-text-muted">Medium (48px)</div>
                            </div>
                            <div className="text-center space-y-3">
                                <PlayerHead username="Notch" size="lg" />
                                <div className="text-sm text-nexus-text-muted">Large (64px)</div>
                            </div>
                            <div className="text-center space-y-3">
                                <PlayerHead username="Herobrine" size="xl" isOnline={false} />
                                <div className="text-sm text-nexus-text-muted">XL (96px) - Offline</div>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                <section>
                    <h2 className="text-2xl font-cyber text-mc-emerald tracking-widest mb-6">SERVER PING</h2>
                    <GlassCard>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                            <div>
                                <p className="text-sm text-nexus-text-muted mb-2">Excellent</p>
                                <ServerPing ping={23} />
                            </div>
                            <div>
                                <p className="text-sm text-nexus-text-muted mb-2">Good</p>
                                <ServerPing ping={67} />
                            </div>
                            <div>
                                <p className="text-sm text-nexus-text-muted mb-2">Fair</p>
                                <ServerPing ping={134} />
                            </div>
                            <div>
                                <p className="text-sm text-nexus-text-muted mb-2">Poor</p>
                                <ServerPing ping={267} />
                            </div>
                        </div>
                    </GlassCard>
                </section>

                <section>
                    <h2 className="text-2xl font-cyber text-mc-emerald tracking-widest mb-6">PLAYER LIST</h2>
                    <GlassCard>
                        <div className="p-4 sm:p-6">
                            <PlayerList players={samplePlayers} maxPlayers={100} />
                        </div>
                    </GlassCard>
                </section>

                <section>
                    <h2 className="text-2xl font-cyber text-mc-emerald tracking-widest mb-6">BLOCKS & ITEMS</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <GlassCard>
                            <div className="p-4 space-y-4">
                                <h3 className="text-lg font-cyber text-nexus-text-muted">Block Grid</h3>
                                <BlockGrid gridSize={8} blockSize={32} />
                            </div>
                        </GlassCard>
                        <GlassCard>
                            <div className="p-4 space-y-4">
                                <h3 className="text-lg font-cyber text-nexus-text-muted">Item Display</h3>
                                <div className="flex items-center space-x-6 mt-4">
                                    <ItemDisplay item={sampleItem} size="lg" />
                                    <div className="space-y-2">
                                        <p className="text-rarity-legendary font-bold">{sampleItem.name}</p>
                                        <p className="text-sm text-mc-lapis">{sampleItem.enchantments.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-cyber text-mc-emerald tracking-widest mb-6">PLAYER STATISTICS</h2>
                    <GlassCard>
                        <div className="p-4">
                            <MCStats />
                        </div>
                    </GlassCard>
                </section>
            </div>
        </main>
    );
};

export default MinecraftShowcasePage;
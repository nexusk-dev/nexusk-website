'use client';

import React from 'react';
import { GlassCard, CyberProgress } from '@/components/ui';
import { HologramEffect } from '@/components/cyberpunk';
import { PlayerHead } from '@/components/minecraft';
import { Users, Activity, Crown } from 'lucide-react';

export const Status = () => {
    // 示例数据，真实应用中应通过 API 获取
    const serverData = {
        players: { current: 77, max: 100, peak: 89 },
        tps: 19.9,
        cpu: 42,
        memory: { used: 9.8, total: 16 },
        onlinePlayers: [
            { name: 'Nexus_Admin', level: 99 },
            { name: 'Cyber_Steve', level: 78 },
            { name: 'Glitch_Alex', level: 75 },
            { name: 'Data_Miner_42', level: 62 },
        ]
    };

    return (
        <section className="py-20 px-6 bg-nexus-dark/50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <HologramEffect>
                        <h2 className="text-3xl md:text-4xl font-cyber text-nexus-primary mb-4">
                            REAL-TIME STATUS
                        </h2>
                    </HologramEffect>
                    <p className="text-nexus-text-muted font-matrix">Live server monitoring and metrics</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Players Card */}
                    <GlassCard glowColor="var(--color-nexus-accent)">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Users className="w-8 h-8 text-nexus-accent" />
                                <h3 className="text-xl font-cyber text-nexus-accent">PLAYERS</h3>
                            </div>
                            <div className="text-center">
                                <span className="text-5xl font-cyber text-nexus-accent">{serverData.players.current}</span>
                                <span className="text-xl font-cyber text-nexus-text-muted">/{serverData.players.max}</span>
                            </div>
                            <CyberProgress value={serverData.players.current} max={serverData.players.max} variant="accent" />
                        </div>
                    </GlassCard>

                    {/* Performance Card */}
                    <GlassCard glowColor="var(--color-nexus-primary)">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Activity className="w-8 h-8 text-nexus-primary" />
                                <h3 className="text-xl font-cyber text-nexus-primary">PERFORMANCE</h3>
                            </div>
                            <CyberProgress label="TPS" value={serverData.tps} max={20} variant="accent" />
                            <CyberProgress label="CPU" value={serverData.cpu} max={100} variant="primary" />
                            <CyberProgress label="Memory" value={(serverData.memory.used / serverData.memory.total) * 100} variant="accent" />
                        </div>
                    </GlassCard>

                    {/* Online Players Card */}
                    <GlassCard glowColor="var(--color-nexus-secondary)">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Crown className="w-8 h-8 text-nexus-secondary" />
                                <h3 className="text-xl font-cyber text-nexus-secondary">ONLINE NOW</h3>
                            </div>
                            <div className="space-y-3">
                                {serverData.onlinePlayers.map((player) => (
                                    <div key={player.name} className="flex items-center space-x-3 bg-nexus-darker/50 p-2 rounded-md">
                                        <PlayerHead username={player.name} size="sm" />
                                        <div className="flex-1">
                                            <p className="font-matrix text-white text-sm">{player.name}</p>
                                            <p className="text-xs text-nexus-text-muted">Level {player.level}</p>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-nexus-accent animate-pulse" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};
'use client';

import React from 'react';
import { GlassCard, CyberProgress } from '@/components/ui';
import {Cpu, HardDrive, Wifi, Server, Activity, Users} from 'lucide-react';

const getStatusVariant = (percentage: number): 'accent' | 'warning' | 'error' => {
    if (percentage < 50) return 'accent';
    if (percentage < 80) return 'warning';
    return 'error';
};

export const SystemMonitor = () => {
    const systemData = {
        cpu: { usage: 42 },
        memory: { used: 9.8, total: 16 },
        network: { in: 1.2, out: 0.8, connections: 156 },
        server: { tps: 19.9, players: 77, uptime: '128h 15m' }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard glowColor="var(--color-nexus-primary)">
                <div className="flex items-center space-x-3 mb-4">
                    <Cpu className="w-6 h-6 text-nexus-primary" />
                    <h3 className="text-lg font-cyber text-nexus-primary">CPU</h3>
                </div>
                <CyberProgress value={systemData.cpu.usage} variant={getStatusVariant(systemData.cpu.usage)} />
            </GlassCard>
            <GlassCard glowColor="var(--color-nexus-secondary)">
                <div className="flex items-center space-x-3 mb-4">
                    <HardDrive className="w-6 h-6 text-nexus-secondary" />
                    <h3 className="text-lg font-cyber text-nexus-secondary">Memory</h3>
                </div>
                <CyberProgress value={(systemData.memory.used / systemData.memory.total) * 100} variant="accent" />
            </GlassCard>
            <GlassCard glowColor="var(--color-nexus-accent)">
                <div className="flex items-center space-x-3 mb-4">
                    <Activity className="w-6 h-6 text-nexus-accent" />
                    <h3 className="text-lg font-cyber text-nexus-accent">TPS</h3>
                </div>
                <CyberProgress value={systemData.server.tps} max={20} variant="accent" />
            </GlassCard>
            <GlassCard glowColor="var(--color-nexus-warning)">
                <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-nexus-warning" />
                    <h3 className="text-lg font-cyber text-nexus-warning">Players</h3>
                </div>
                <p className="text-2xl text-center font-cyber text-nexus-warning">{systemData.server.players} / 100</p>
            </GlassCard>
        </div>
    );
};
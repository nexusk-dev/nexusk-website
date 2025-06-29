'use client';

import React, { useState } from 'react';
import { PlayerHead } from '@/components/minecraft';
import { GlassCard, NeonButton } from '@/components/ui';
import { Eye, Pause, Play, Users } from 'lucide-react';

type Player = {
    id: number;
    username: string;
    rank: 'Admin' | 'VIP' | 'Moderator' | 'Player' | 'Premium';
    online: boolean;
    playtime: string;
    level: number;
    lastSeen: string;
};

const rankConfig = {
    Admin: { className: 'bg-nexus-error/20 text-nexus-error' },
    Moderator: { className: 'bg-nexus-warning/20 text-nexus-warning' },
    VIP: { className: 'bg-nexus-primary/20 text-nexus-primary' },
    Premium: { className: 'bg-nexus-accent/20 text-nexus-accent' },
    Player: { className: 'bg-nexus-text-muted/20 text-nexus-text-muted' },
};

export const PlayersManagement = () => {
    const [players] = useState<Player[]>([
        { id: 1, username: 'Steve_Builder', rank: 'Admin', online: true, playtime: '245h 12m', level: 67, lastSeen: 'Now' },
        { id: 2, username: 'Alex_Miner', rank: 'VIP', online: true, playtime: '189h 45m', level: 52, lastSeen: 'Now' },
        { id: 3, username: 'Creeper_Hunter', rank: 'Moderator', online: false, playtime: '98h 23m', level: 34, lastSeen: '2h ago' },
        { id: 4, username: 'Diamond_Digger', rank: 'Player', online: true, playtime: '156h 8m', level: 41, lastSeen: 'Now' },
        { id: 5, username: 'Redstone_Master', rank: 'Premium', online: false, playtime: '203h 56m', level: 58, lastSeen: '1d ago' },
    ]);

    const onlinePlayers = players.filter(p => p.online).length;

    return (
        <GlassCard hover={false} className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <h3 className="text-xl font-cyber text-nexus-primary">PLAYER MANAGEMENT</h3>
                <div className="flex items-center space-x-2 font-matrix">
                    <span className="text-sm text-nexus-text-muted">Online:</span>
                    <span className="text-nexus-accent font-bold">{onlinePlayers}</span>
                    <span className="text-nexus-text-muted">/</span>
                    <span className="text-nexus-text-muted">{players.length}</span>
                </div>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto p-1">
                {players.map((player) => (
                    <div key={player.id} className="bg-nexus-darker/50 rounded-lg p-3 hover:bg-nexus-surface transition-colors flex items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <PlayerHead username={player.username} size="md" isOnline={player.online} />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-matrix text-white">{player.username}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded font-matrix font-bold ${rankConfig[player.rank].className}`}>
                    {player.rank}
                  </span>
                                </div>
                                <p className="text-xs text-nexus-text-muted font-matrix">
                                    LvL {player.level} • {player.playtime} • Seen: {player.lastSeen}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <NeonButton size="sm" variant={player.online ? 'warning' : 'success'}>
                                {player.online ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </NeonButton>
                            <NeonButton size="sm" variant="secondary">
                                <Eye className="w-4 h-4" />
                            </NeonButton>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};
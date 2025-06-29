'use client';

import React, { useState } from 'react';
import { GlassCard, NeonButton, CyberInput } from '@/components/ui';
import { PlayerHead } from '@/components/minecraft';
import { Search, Filter, UserCheck, Eye, MessageSquare, UserX, Ban } from 'lucide-react';

type Player = {
    id: number;
    username: string;
    rank: 'Admin' | 'VIP' | 'Moderator' | 'Player' | 'Premium';
    online: boolean;
    ip: string;
    playtime: string;
    violations: number;
};

const rankConfig = {
    Admin: { className: 'bg-nexus-error/20 text-nexus-error' },
    Moderator: { className: 'bg-nexus-warning/20 text-nexus-warning' },
    VIP: { className: 'bg-nexus-primary/20 text-nexus-primary' },
    Premium: { className: 'bg-nexus-accent/20 text-nexus-accent' },
    Player: { className: 'bg-nexus-text-muted/20 text-nexus-text-muted' },
};

const violationConfig = (violations: number) => {
    if (violations === 0) return 'bg-nexus-accent/20 text-nexus-accent';
    if (violations <= 2) return 'bg-nexus-warning/20 text-nexus-warning';
    return 'bg-nexus-error/20 text-nexus-error';
}

export const PlayerManagement = () => {
    const [players] = useState<Player[]>([
        { id: 1, username: 'Steve_Builder', rank: 'Admin', online: true, ip: '192.168.1.100', playtime: '245h', violations: 0 },
        { id: 2, username: 'Alex_Miner', rank: 'VIP', online: true, ip: '192.168.1.101', playtime: '189h', violations: 1 },
        { id: 3, username: 'Creeper_Hunter', rank: 'Moderator', online: false, ip: '192.168.1.102', playtime: '98h', violations: 0 },
        { id: 4, username: 'Diamond_Digger', rank: 'Player', online: true, ip: '192.168.1.103', playtime: '156h', violations: 2 },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlayers = players.filter(p => p.username.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <CyberInput icon={Search} placeholder="Search players..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <NeonButton variant="primary" size="sm"><Filter className="w-4 h-4 mr-2" />Filters</NeonButton>
                </div>
                <NeonButton variant="success" size="sm"><UserCheck className="w-4 h-4 mr-2" />Add Player</NeonButton>
            </div>

            <GlassCard hover={false} className="overflow-x-auto p-0">
                <table className="w-full min-w-[800px]">
                    <thead className="bg-nexus-surface/50">
                    <tr>
                        {['Player', 'Status', 'Rank', 'Playtime', 'Violations', 'Actions'].map(h => (
                            <th key={h} className="p-4 text-left font-matrix text-sm text-nexus-primary uppercase tracking-wider">{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPlayers.map(player => (
                        <tr key={player.id} className="border-b border-nexus-surface hover:bg-nexus-surface/50 transition-colors">
                            <td className="p-4">
                                <div className="flex items-center space-x-3">
                                    <PlayerHead username={player.username} size="md" isOnline={player.online} />
                                    <div>
                                        <p className="font-matrix text-white font-bold">{player.username}</p>
                                        <p className="text-xs text-nexus-text-muted">{player.ip}</p>
                                    </div>
                                </div>
                            </td>
                            <td><span className={`text-sm font-matrix ${player.online ? 'text-nexus-accent' : 'text-nexus-text-muted'}`}>{player.online ? 'Online' : 'Offline'}</span></td>
                            <td><span className={`text-xs px-2 py-1 rounded font-matrix font-bold ${rankConfig[player.rank].className}`}>{player.rank}</span></td>
                            <td><span className="font-matrix text-white">{player.playtime}</span></td>
                            <td><span className={`text-xs px-2 py-1 rounded font-matrix font-bold ${violationConfig(player.violations)}`}>{player.violations}</span></td>
                            <td className="p-4">
                                <div className="flex items-center space-x-2">
                                    <button className="text-nexus-primary hover:text-white p-1"><Eye className="w-4 h-4"/></button>
                                    <button className="text-nexus-secondary hover:text-white p-1"><MessageSquare className="w-4 h-4"/></button>
                                    <button className="text-nexus-warning hover:text-white p-1"><UserX className="w-4 h-4"/></button>
                                    <button className="text-nexus-error hover:text-white p-1"><Ban className="w-4 h-4"/></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    );
};
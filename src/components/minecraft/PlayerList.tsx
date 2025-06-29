'use client';

import React, { useState } from 'react';
import { PlayerHead } from './PlayerHead';
import { ServerPing } from './ServerPing';
import { CyberInput } from '../ui/Input'; // 依赖 ui 组件
import { Users, Clock, Star } from 'lucide-react';

// 定义 Player 类型
type Player = {
    id: string | number;
    name: string;
    rank?: 'Admin' | 'Moderator' | 'VIP' | 'Premium' | 'Player';
    isOnline: boolean;
    playtime?: string;
    level?: number;
    ping?: number;
};

type PlayerListProps = {
    players: Player[];
    maxPlayers?: number;
    showLimit?: number;
    showSearch?: boolean;
    className?: string;
};

export const PlayerList = ({
                               players = [],
                               maxPlayers = 100,
                               showLimit = 10,
                               showSearch = true,
                               className = '',
                           }: PlayerListProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAll, setShowAll] = useState(false);

    const rankColors = {
        Admin: 'bg-mc-redstone/20 text-mc-redstone',
        Moderator: 'bg-mc-gold/20 text-mc-gold',
        VIP: 'bg-mc-diamond/20 text-mc-diamond',
        Premium: 'bg-mc-emerald/20 text-mc-emerald',
        Player: 'bg-mc-stone/20 text-mc-stone',
    };

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayPlayers = showAll ? filteredPlayers : filteredPlayers.slice(0, showLimit);

    return (
        <div className={`space-y-4 ${className}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-mc-emerald" />
                    <span className="font-matrix text-lg">
            <span className="text-mc-emerald font-bold">{players.length}</span>
            <span className="text-nexus-text-muted">/{maxPlayers}</span>
          </span>
                </div>
                {showSearch && (
                    <CyberInput
                        type="text"
                        placeholder="Search players..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-auto"
                    />
                )}
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto p-1">
                {displayPlayers.map((player) => (
                    <div
                        key={player.id}
                        className="flex items-center space-x-4 p-3 bg-nexus-darker/50 rounded-lg hover:bg-nexus-surface transition-colors"
                    >
                        <PlayerHead username={player.name} size="md" isOnline={player.isOnline} showTooltip={false} />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                                <span className="font-matrix text-white truncate">{player.name}</span>
                                {player.rank && player.rank !== 'Player' && (
                                    <span className={`text-xs px-2 py-0.5 rounded font-matrix font-bold ${rankColors[player.rank]}`}>
                    {player.rank}
                  </span>
                                )}
                            </div>
                            {player.playtime && (
                                <div className="text-xs text-nexus-text-muted font-matrix flex items-center">
                                    <Clock className="w-3 h-3 inline mr-1.5" />{player.playtime}
                                </div>
                            )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-nexus-text-muted font-matrix">
                            {player.level && (
                                <div className="flex items-center space-x-1.5">
                                    <Star className="w-4 h-4 text-mc-gold" /><span>{player.level}</span>
                                </div>
                            )}
                            {player.ping !== undefined && <ServerPing ping={player.ping} showBars={false} />}
                        </div>
                    </div>
                ))}
            </div>

            {filteredPlayers.length > showLimit && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-full py-2 text-sm text-mc-emerald hover:text-white font-matrix transition-colors rounded bg-mc-emerald/10 hover:bg-mc-emerald/20"
                >
                    {showAll ? 'Show Less' : `Show ${filteredPlayers.length - showLimit} More`}
                </button>
            )}
        </div>
    );
};
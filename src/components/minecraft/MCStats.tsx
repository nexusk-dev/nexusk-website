import React from 'react';
import type {LucideIcon} from 'lucide-react';
import {Clock, Gamepad2, MapPin, Skull, Star, Sword, Target, Trophy} from 'lucide-react';

type Stats = {
    playtime?: string;
    deaths?: number;
    mobKills?: number;
    blocksPlaced?: number;
    blocksBroken?: number;
    distanceWalked?: string;
    level?: number;
    experience?: number;
};

type MCStatsProps = {
    stats?: Stats;
    layout?: 'grid' | 'list';
    className?: string;
};

const defaultStats: Required<Stats> = {
    playtime: '127h 34m',
    deaths: 23,
    mobKills: 1437,
    blocksPlaced: 8291,
    blocksBroken: 12043,
    distanceWalked: '2,847 km',
    level: 47,
    experience: 89234,
};

const statConfig: Record<keyof Stats, { icon: LucideIcon; color: string; label: string }> = {
    playtime: {icon: Clock, color: 'text-mc-emerald', label: 'Playtime'},
    deaths: {icon: Skull, color: 'text-mc-redstone', label: 'Deaths'},
    mobKills: {icon: Sword, color: 'text-mc-gold', label: 'Mob Kills'},
    blocksPlaced: {icon: Target, color: 'text-mc-grass', label: 'Blocks Placed'},
    blocksBroken: {icon: Gamepad2, color: 'text-mc-stone', label: 'Blocks Broken'},
    distanceWalked: {icon: MapPin, color: 'text-mc-diamond', label: 'Distance'},
    level: {icon: Star, color: 'text-mc-gold', label: 'Level'},
    experience: {icon: Trophy, color: 'text-mc-emerald', label: 'Experience'},
};

export const MCStats = ({
                            stats = defaultStats,
                            layout = 'grid',
                            className = '',
                        }: MCStatsProps) => {
    const displayStats = {...defaultStats, ...stats};

    const StatItem = ({statKey, value}: { statKey: keyof Stats; value: any }) => {
        const config = statConfig[statKey];
        if (!config) return null;
        const Icon = config.icon;

        return (
            <div
                className="bg-nexus-darker/50 rounded-lg p-4 hover:bg-nexus-surface transition-colors flex items-center space-x-4">
                <Icon className={`w-7 h-7 flex-shrink-0 ${config.color}`}/>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-nexus-text-muted font-matrix uppercase tracking-wider">{config.label}</p>
                    <p className={`text-xl font-bold font-cyber truncate ${config.color}`}>
                        {value.toLocaleString()}
                    </p>
                </div>
            </div>
        );
    };

    if (layout === 'list') {
        return (
            <div className={`space-y-3 ${className}`}>
                {Object.entries(displayStats).map(([key, value]) => (
                    <StatItem key={key} statKey={key as keyof Stats} value={value}/>
                ))}
            </div>
        );
    }

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
            {Object.entries(displayStats).map(([key, value]) => (
                <StatItem key={key} statKey={key as keyof Stats} value={value}/>
            ))}
        </div>
    );
};
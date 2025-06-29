import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { GlassCard } from './Card';

type StatCardProps = {
    title: string;
    value: string | number;
    icon?: LucideIcon;
    variant?: 'primary' | 'accent' | 'warning' | 'error' | 'secondary';
    trend?: string;
    trendDirection?: 'up' | 'down';
    className?: string;
};

export const StatCard = ({
                             title,
                             value,
                             icon: Icon,
                             variant = 'primary',
                             trend,
                             trendDirection = 'up',
                             className = ''
                         }: StatCardProps) => {
    const variants = {
        primary: { color: 'text-nexus-primary', glow: '#00d4ff' },
        secondary: { color: 'text-nexus-secondary', glow: '#ff2a6d' },
        accent: { color: 'text-nexus-accent', glow: '#01ff89' },
        warning: { color: 'text-nexus-warning', glow: '#ffaa00' },
        error: { color: 'text-nexus-error', glow: '#ff073a' },
    };

    const selectedVariant = variants[variant];

    return (
        <GlassCard glowColor={selectedVariant.glow} className={className}>
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="text-sm font-matrix text-nexus-text-muted uppercase tracking-wider">
                        {title}
                    </div>
                    <div className={`text-2xl font-cyber font-bold ${selectedVariant.color}`}>
                        {value}
                    </div>
                    {trend && (
                        <div className={`text-sm font-matrix flex items-center ${trendDirection === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                            {trendDirection === 'up' ? '↗' : '↘'} {trend}
                        </div>
                    )}
                </div>
                {Icon && (
                    <Icon className={`w-8 h-8 opacity-60 ${selectedVariant.color}`} />
                )}
            </div>
        </GlassCard>
    );
};
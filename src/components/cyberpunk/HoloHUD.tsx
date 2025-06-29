'use client';

import React, { useState, useEffect } from 'react';
import { CyberFrame } from './CyberFrame';
import { HologramEffect } from './HologramEffect';
import { ScanLine } from './ScanLine';

type HoloHUDProps = {
    title?: string;
    status?: 'online' | 'warning' | 'error' | 'offline';
    data?: Record<string, string | number>;
    color?: string;
    className?: string;
};

export const HoloHUD = ({
                            title = "NEXUSK HUD",
                            status = 'online',
                            data = {},
                            color = '#00d4ff', // nexus-primary
                            className = '',
                        }: HoloHUDProps) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    const statusConfig = {
        online: { color: 'text-nexus-accent', bgColor: 'bg-nexus-accent' },
        warning: { color: 'text-nexus-warning', bgColor: 'bg-nexus-warning' },
        error: { color: 'text-nexus-error', bgColor: 'bg-nexus-error' },
        offline: { color: 'text-nexus-secondary', bgColor: 'bg-nexus-secondary' },
    };

    const currentStatus = statusConfig[status];

    return (
        <CyberFrame color={color} corners={true} className={className}>
            <div className="p-4 sm:p-6 space-y-4 relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4" style={{ borderColor: `${color}40` }}>
                    <HologramEffect color={color}>
                        <h3 className="text-xl font-cyber font-bold" style={{ color }}>{title}</h3>
                    </HologramEffect>
                    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full animate-pulse ${currentStatus.bgColor}`} />
                            <span className={`text-sm font-matrix uppercase ${currentStatus.color}`}>{status}</span>
                        </div>
                        <div className="text-sm font-matrix text-nexus-text-muted">{currentTime}</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key} className="bg-black/40 rounded p-3 border" style={{ borderColor: `${color}40` }}>
                            <div className="text-xs text-nexus-text-muted uppercase tracking-wider mb-1">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="font-cyber font-bold text-lg truncate" style={{ color }}>
                                {value}
                            </div>
                        </div>
                    ))}
                </div>
                <ScanLine direction="horizontal" color={color} speed={4} thickness={1} opacity={0.3} />
            </div>
        </CyberFrame>
    );
};
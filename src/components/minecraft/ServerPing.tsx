'use client';

import React from 'react';
import {Activity} from 'lucide-react';

type ServerPingProps = {
    ping?: number | null;
    showBars?: boolean;
    className?: string;
};

export const ServerPing = ({ping, showBars = true, className = ''}: ServerPingProps) => {
    if (ping === null || ping === undefined) {
        return (
            <div className={`flex items-center space-x-2 text-mc-stone ${className}`}>
                <Activity className="w-4 h-4"/>
                <span className="font-matrix text-sm">N/A</span>
            </div>
        );
    }

    const getPingInfo = (p: number) => {
        if (p < 50) return {color: 'text-mc-emerald', quality: 'Excellent', bars: 5};
        if (p < 100) return {color: 'text-mc-gold', quality: 'Good', bars: 4};
        if (p < 150) return {color: 'text-mc-gold', quality: 'Fair', bars: 3};
        if (p < 200) return {color: 'text-mc-redstone', quality: 'Poor', bars: 2};
        return {color: 'text-mc-redstone', quality: 'Bad', bars: 1};
    };

    const {color, quality, bars} = getPingInfo(ping);

    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            <div className="flex items-center space-x-2">
                <Activity className={`w-4 h-4 ${color}`}/>
                <span className={`font-matrix font-bold ${color}`}>{ping}ms</span>
            </div>
            {showBars && (
                <div className="flex items-end space-x-1">
                    {[1, 2, 3, 4, 5].map((bar) => (
                        <div
                            key={bar}
                            className={`w-1 transition-all duration-300 rounded-sm ${bar <= bars ? `bg-current ${color}` : 'bg-mc-stone/50'}`}
                            style={{height: `${bar * 3 + 4}px`}}
                        />
                    ))}
                </div>
            )}
            <span className="text-sm text-nexus-text-muted font-matrix hidden sm:inline">{quality}</span>
        </div>
    );
};
'use client';

import React, {useEffect, useState} from 'react';

type HologramEffectProps = {
    children: React.ReactNode;
    color?: string;
    scanSpeed?: number;
    glitchChance?: number;
    className?: string;
};

export const HologramEffect = ({
                                   children,
                                   color = '#00d4ff', // nexus-primary
                                   scanSpeed = 2,
                                   glitchChance = 0.1,
                                   className = '',
                               }: HologramEffectProps) => {
    const [glitching, setGlitching] = useState(false);

    useEffect(() => {
        if (glitchChance === 0) return;
        const glitchInterval = setInterval(() => {
            if (Math.random() < glitchChance) {
                setGlitching(true);
                setTimeout(() => setGlitching(false), 100 + Math.random() * 200);
            }
        }, 1000);
        return () => clearInterval(glitchInterval);
    }, [glitchChance]);

    const scanLineStyle = {
        '--scan-speed': `${scanSpeed}s`,
        background: `linear-gradient(0deg, transparent 0%, ${color}40 45%, ${color}80 50%, ${color}40 55%, transparent 100%)`,
    } as React.CSSProperties;

    return (
        <div className={`relative ${className}`}>
            <div className={`relative transition-all duration-100 ${glitching ? 'opacity-80' : ''}`}
                 style={{filter: `drop-shadow(0 0 5px ${color}80) drop-shadow(0 0 10px ${color}40)`}}>
                {children}
            </div>
            {/* 静态扫描线 */}
            <div className="absolute inset-0 pointer-events-none opacity-30"
                 style={{background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${color}20 2px, ${color}20 4px)`}}/>
            {/* 动态扫描线 */}
            <div className="absolute inset-0 pointer-events-none opacity-60 animate-hologram-scan"
                 style={scanLineStyle}/>
        </div>
    );
};
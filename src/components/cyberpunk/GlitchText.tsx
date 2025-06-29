'use client';

import React, { useState, useCallback, useEffect } from 'react';

type GlitchTextProps = {
    text: string;
    trigger?: 'hover' | 'click' | 'auto';
    className?: string;
    colors?: [string, string, string];
};

export const GlitchText = ({
                               text,
                               trigger = 'hover',
                               className = '',
                               colors = ['#ff2a6d', '#00d4ff', '#01ff89'], // secondary, primary, accent
                           }: GlitchTextProps) => {
    const [isGlitching, setIsGlitching] = useState(false);

    const triggerGlitch = useCallback(() => {
        if (isGlitching) return;
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 300); // Glitch duration
    }, [isGlitching]);

    useEffect(() => {
        if (trigger === 'auto') {
            const interval = setInterval(() => {
                if (Math.random() < 0.2) triggerGlitch();
            }, 2000 + Math.random() * 3000);
            return () => clearInterval(interval);
        }
    }, [trigger, triggerGlitch]);

    const eventHandlers = {
        onMouseEnter: trigger === 'hover' ? triggerGlitch : undefined,
        onClick: trigger === 'click' ? triggerGlitch : undefined,
    };

    return (
        <span className={`relative inline-block cursor-pointer font-cyber ${className}`} {...eventHandlers}>
      <span className={isGlitching ? 'opacity-0' : 'opacity-100 transition-opacity'}>{text}</span>
            {isGlitching && (
                <>
                    <span className="absolute inset-0" style={{ color: colors[0], textShadow: `0 0 5px ${colors[0]}`, transform: 'translate(-2px, -1px)' }}>{text}</span>
                    <span className="absolute inset-0" style={{ color: colors[1], textShadow: `0 0 5px ${colors[1]}`, transform: 'translate(2px, 1px)' }}>{text}</span>
                    <span className="absolute inset-0" style={{ color: colors[2], textShadow: `0 0 5px ${colors[2]}`, transform: 'translate(1px, -2px)' }}>{text}</span>
                </>
            )}
    </span>
    );
};
import React from 'react';

type PulseEffectProps = {
    children: React.ReactNode;
    color?: string;
    speed?: number; // In seconds
    intensity?: number; // 0 to 1
    shape?: 'circle' | 'square';
    className?: string;
};

export const PulseEffect = ({
                                children,
                                color = '#00d4ff', // nexus-primary
                                speed = 2,
                                intensity = 1,
                                shape = 'circle',
                                className = '',
                            }: PulseEffectProps) => {
    const pulseStyle = (delay: number) => ({
        borderColor: color,
        '--pulse-speed': `${speed}s`,
        '--pulse-intensity': intensity,
        animationDelay: `${delay}s`,
    } as React.CSSProperties);

    return (
        <div className={`relative ${className}`}>
            <div className="relative z-10">{children}</div>
            {[0, 1, 2].map((index) => (
                <div
                    key={index}
                    className={`absolute inset-0 border-2 pointer-events-none opacity-0 animate-pulse-ring ${shape === 'circle' ? 'rounded-full' : 'rounded-lg'}`}
                    style={pulseStyle(index * (speed / 3))}
                />
            ))}
        </div>
    );
};
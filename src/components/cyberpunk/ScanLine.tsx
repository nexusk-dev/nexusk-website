import React from 'react';

type ScanLineProps = {
    direction?: 'horizontal' | 'vertical';
    color?: string;
    speed?: number; // in seconds
    thickness?: number; // in pixels
    opacity?: number; // 0 to 1
    className?: string;
};

export const ScanLine = ({
                             direction = 'horizontal',
                             color = '#00d4ff', // nexus-primary
                             speed = 2,
                             thickness = 2,
                             opacity = 0.8,
                             className = '',
                         }: ScanLineProps) => {
    const isHorizontal = direction === 'horizontal';
    const animationClass = isHorizontal ? 'animate-scan-horizontal' : 'animate-scan-vertical';

    const lineStyle = {
        '--scan-speed': `${speed}s`,
        width: isHorizontal ? '100%' : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : '100%',
        background: `linear-gradient(${isHorizontal ? '90deg' : '0deg'}, transparent 0%, ${color} 20%, ${color} 80%, transparent 100%)`,
        boxShadow: `0 0 ${thickness * 4}px ${color}`,
        opacity: opacity,
    } as React.CSSProperties;

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            <div className={`absolute ${animationClass}`} style={lineStyle} />
        </div>
    );
};
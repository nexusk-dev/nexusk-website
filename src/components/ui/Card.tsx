import React from 'react';

type GlassCardProps = {
    children: React.ReactNode;
    className?: string;
    glowColor?: string; // 允许自定义辉光颜色
    hover?: boolean;
    onClick?: () => void;
};

export const GlassCard = ({
                              children,
                              className = '',
                              glowColor = '#00d4ff', // 默认为主色
                              hover = true,
                              onClick
                          }: GlassCardProps) => {
    return (
        <div
            onClick={onClick}
            className={`
        relative backdrop-blur-md bg-white/5 
        border border-white/10 rounded-lg p-6
        ${hover && onClick ? 'hover:bg-white/10 cursor-pointer' : ''}
        transition-all duration-300
        ${className}
      `}
            style={{
                boxShadow: `0 8px 32px rgba(31, 38, 135, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.1)`
            }}
        >
            <div
                className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${hover && onClick ? 'opacity-0 hover:opacity-20' : 'opacity-0'}`}
                style={{
                    background: `linear-gradient(45deg, ${glowColor}20, transparent)`
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
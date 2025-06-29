// src/components/cyberpunk/NeonGrid.tsx
'use client';

import React, {useEffect, useState} from 'react';

type NeonGridProps = {
    gridSize?: number;
    color?: string;
    animated?: boolean;
    className?: string;
};

// 1. 使用 useState 来管理会变化的值
//    初始值设为确定性的、非随机的，以保证服务器和客户端首次渲染一致
export const NeonGrid = ({
                             gridSize = 30,
                             color = 'var(--color-nexus-primary)',
                             animated = true,
                             className = '',
                         }: NeonGridProps) => {
    const [uniqueId, setUniqueId] = useState('');
    const [randomBegin, setRandomBegin] = useState('');

    // 2. 使用 useEffect 在客户端安全地生成随机值
    //    这个钩子只在客户端运行，且在组件挂载后执行
    useEffect(() => {
        // 生成一个在组件生命周期内保持不变的随机 ID
        setUniqueId(Math.random().toString(36).substr(2, 9));
        // 生成一个随机的动画延迟时间
        setRandomBegin(`${Math.random() * 4}s`);
    }, []); // 空依赖数组确保只运行一次

    // 如果 uniqueId 还没在客户端生成，可以渲染一个占位符或 null，避免不匹配
    if (!uniqueId) {
        return null;
    }

    const patternId = `neon-grid-${uniqueId}`;
    const glowPatternId = `neon-grid-glow-${uniqueId}`;

    return (
        <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
            <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                    <pattern id={patternId} width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
                        <path
                            d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                            fill="none"
                            stroke={color}
                            strokeWidth="0.5"
                            style={{filter: `drop-shadow(0 0 1px ${color})`}}
                        />
                    </pattern>
                    {animated && (
                        <pattern id={glowPatternId} width={gridSize * 4} height={gridSize * 4}
                                 patternUnits="userSpaceOnUse">
                            <circle
                                cx={gridSize * 2}
                                cy={gridSize * 2}
                                r="1.5"
                                fill={color}
                                style={{filter: `drop-shadow(0 0 4px ${color})`}}
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0;0.8;0"
                                    dur="4s"
                                    repeatCount="indefinite"
                                    // 3. 使用 state 中的安全值
                                    begin={randomBegin}
                                />
                            </circle>
                        </pattern>
                    )}
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity="0.3"/>
                {animated && <rect width="100%" height="100%" fill={`url(#${glowPatternId})`} opacity="0.5"/>}
            </svg>
        </div>
    );
};
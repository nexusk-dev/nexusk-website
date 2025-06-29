'use client';

import React, {useState} from 'react';
import Image from 'next/image'; // 使用 Next.js Image 组件优化图片

type PlayerHeadProps = {
    username: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isOnline?: boolean;
    showStatus?: boolean;
    showTooltip?: boolean;
    className?: string;
};

export const PlayerHead = ({
                               username,
                               size = 'md',
                               isOnline = true,
                               showStatus = true,
                               showTooltip = true,
                               className = ''
                           }: PlayerHeadProps) => {
    const [imageError, setImageError] = useState(false);
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const sizes = {
        sm: {pixels: 32, border: 'border-2'},
        md: {pixels: 48, border: 'border-[3px]'},
        lg: {pixels: 64, border: 'border-4'},
        xl: {pixels: 96, border: 'border-[6px]'}
    };

    const {pixels, border} = sizes[size];
    const statusSize = Math.max(8, pixels * 0.25);

    const avatarUrl = imageError
        ? `https://ui-avatars.com/api/?name=${username}&size=${pixels}&background=8BC34A&color=fff&format=svg&font-size=0.5`
        : `https://crafatar.com/avatars/${username}?size=${pixels}&overlay`;

    return (
        <div className={`relative inline-block ${className}`}>
            <div
                className="relative cursor-pointer"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
            >
                <div
                    className={`
            relative overflow-hidden bg-mc-stone/20 transition-all duration-300
            hover:scale-110 hover:shadow-lg rounded-md
            ${border}
            ${isOnline ? 'border-mc-emerald shadow-mc-emerald/30' : 'border-mc-stone shadow-mc-stone/30'}
          `}
                    style={{
                        width: pixels,
                        height: pixels,
                        imageRendering: 'pixelated'
                    }}
                >
                    <Image
                        src={avatarUrl}
                        alt={`${username}'s avatar`}
                        width={pixels}
                        height={pixels}
                        className="object-cover"
                        style={{imageRendering: 'pixelated'}}
                        onError={() => setImageError(true)}
                        unoptimized // crafatar 是外部 URL，可能需要此属性
                    />
                    {showStatus && (
                        <div
                            className={`absolute -bottom-1 -right-1 rounded-full border-2 border-nexus-darker ${isOnline ? 'bg-mc-emerald animate-pulse' : 'bg-mc-stone'}`}
                            style={{width: statusSize, height: statusSize}}
                        />
                    )}
                </div>

                {showTooltip && isTooltipVisible && (
                    <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 p-2 bg-nexus-darker text-white rounded-lg shadow-lg border border-nexus-surface font-matrix text-sm whitespace-nowrap">
                        <div className="font-bold text-mc-emerald">{username}</div>
                        <div className={`text-xs ${isOnline ? 'text-mc-emerald' : 'text-mc-stone'}`}>
                            {isOnline ? '● Online' : '○ Offline'}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
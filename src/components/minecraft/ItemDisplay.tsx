'use client';

import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Diamond, Shield, Star, Sword} from 'lucide-react';

type Item = {
    name: string;
    id: string;
    count?: number;
    enchantments?: string[];
    rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
    description?: string;
};

type ItemDisplayProps = {
    item: Item;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showCount?: boolean;
    showTooltip?: boolean;
    className?: string;
};

const defaultItem: Item = {
    name: 'Diamond Sword',
    id: 'diamond_sword',
    count: 1,
    enchantments: ['Sharpness V', 'Unbreaking III'],
    rarity: 'epic',
    description: 'A powerful diamond sword',
};

export const ItemDisplay = ({
                                item = defaultItem,
                                size = 'md',
                                showCount = true,
                                showTooltip = true,
                                className = '',
                            }: ItemDisplayProps) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const enchanted = item.enchantments && item.enchantments.length > 0;

    const sizes = {sm: 32, md: 48, lg: 64, xl: 80};
    const pixelSize = sizes[size];
    const rarityColor = `text-rarity-${item.rarity || 'common'}`;

    const ItemIcon = () => {
        const iconClass = `w-1/2 h-1/2 ${rarityColor}`;
        if (item.id.includes('sword')) return <Sword className={iconClass}/>;
        if (item.id.includes('diamond')) return <Diamond className={iconClass}/>;
        if (item.id.includes('shield')) return <Shield className={iconClass}/>;
        return <Star className={iconClass}/>;
    };

    return (
        <div
            className={`relative inline-block cursor-pointer ${className}`}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
        >
            <div
                className={`
          relative bg-nexus-darker border-2 border-nexus-surface rounded-md 
          transition-all duration-200 hover:scale-110 hover:border-nexus-primary
          flex items-center justify-center
          ${enchanted ? 'animate-pulse border-rarity-epic/50' : ''}
        `}
                style={{
                    width: pixelSize,
                    height: pixelSize,
                    boxShadow: enchanted ? `0 0 ${pixelSize / 4}px var(--color-rarity-epic)` : undefined,
                }}
            >
                <ItemIcon/>

                {showCount && item.count && item.count > 1 && (
                    <div
                        className="absolute bottom-0 right-0 bg-black/70 text-white text-xs font-matrix px-1.5 py-0.5 rounded-tl-md rounded-br-sm">
                        {item.count}
                    </div>
                )}

                {enchanted && (
                    <div
                        className="absolute inset-0 rounded-md opacity-20"
                        style={{
                            background: 'linear-gradient(45deg, #AA00AA, #5555FF, #AA00AA)',
                            backgroundSize: '200% 200%',
                            animation: 'aurora 3s ease infinite'
                        }}
                    />
                )}
            </div>

            <AnimatePresence>
                {showTooltip && isTooltipVisible && (
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 0.2}}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-48"
                    >
                        <div
                            className="p-2 bg-nexus-darker text-white rounded-lg shadow-lg border border-nexus-surface font-matrix text-sm">
                            <p className={`font-bold mb-1 ${rarityColor}`}>
                                {item.name}
                            </p>
                            {item.description &&
                                <p className="text-xs text-nexus-text-muted italic mb-2">{item.description}</p>}
                            {enchanted && (
                                <div className="space-y-0.5">
                                    {item.enchantments?.map((enchant, index) => (
                                        <p key={index} className="text-xs text-mc-lapis">{enchant}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
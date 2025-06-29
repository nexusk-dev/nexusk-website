'use client';

import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

type Block = {
    id: string;
    name: string;
    color: string; // Tailwind color class, e.g., 'bg-mc-grass'
};

type BlockGridProps = {
    blocks?: Block[];
    gridSize?: number;
    blockSize?: number;
    showTooltips?: boolean;
    className?: string;
};

const defaultBlocks: Block[] = [
    {id: 'grass', name: 'Grass Block', color: 'bg-mc-grass'},
    {id: 'stone', name: 'Stone', color: 'bg-mc-stone'},
    {id: 'diamond', name: 'Diamond Ore', color: 'bg-mc-diamond'},
    {id: 'gold', name: 'Gold Ore', color: 'bg-mc-gold'},
    {id: 'redstone', name: 'Redstone Ore', color: 'bg-mc-redstone'},
    {id: 'emerald', name: 'Emerald Ore', color: 'bg-mc-emerald'},
    {id: 'iron', name: 'Iron Ore', color: 'bg-mc-iron'},
    {id: 'coal', name: 'Coal Ore', color: 'bg-mc-coal'},
];

export const BlockGrid = ({
                              blocks = defaultBlocks,
                              gridSize = 8,
                              blockSize = 32,
                              showTooltips = true,
                              className = '',
                          }: BlockGridProps) => {
    const [hoveredBlock, setHoveredBlock] = useState<{ block: Block; index: number } | null>(null);

    return (
        <div className={`relative ${className}`}>
            <div
                className="grid gap-1 p-2 bg-nexus-darker/50 rounded-lg border border-nexus-surface"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                    width: gridSize * (blockSize + 4), // blockSize + gap
                }}
            >
                {Array.from({length: gridSize * gridSize}).map((_, index) => {
                    const block = blocks[index % blocks.length];
                    return (
                        <div
                            key={index}
                            className="relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10"
                            style={{width: blockSize, height: blockSize}}
                            onMouseEnter={() => setHoveredBlock({block, index})}
                            onMouseLeave={() => setHoveredBlock(null)}
                        >
                            <div
                                className={`w-full h-full rounded-sm border-2 border-black/30 ${block.color}`}
                                style={{
                                    boxShadow: `inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.1)`,
                                    imageRendering: 'pixelated',
                                }}
                            />
                            <div
                                className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity bg-white/50"/>
                        </div>
                    );
                })}
            </div>

            <AnimatePresence>
                {showTooltips && hoveredBlock && (
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 0.2}}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 pointer-events-none p-2 bg-nexus-darker text-white rounded-lg shadow-lg border border-nexus-surface font-matrix text-sm"
                    >
                        <div
                            className={`font-bold ${hoveredBlock.block.color.replace('bg-', 'text-')}`}>{hoveredBlock.block.name}</div>
                        <div className="text-xs text-nexus-text-muted">
                            Pos: {hoveredBlock.index % gridSize}, {Math.floor(hoveredBlock.index / gridSize)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
'use client';

import React from 'react';
import { GlassCard } from '@/components/ui';
import { Users, Globe, Zap, Target, Settings, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const categories: { id: string; title: string; description: string; icon: LucideIcon; color: string; count: number; }[] = [
    { id: 'newbie', title: 'Newbie Guides', description: '新手入门指南', icon: Users, color: 'var(--color-nexus-accent)', count: 15 },
    { id: 'building', title: 'Building Guides', description: '建筑与设计教程', icon: Globe, color: 'var(--color-nexus-secondary)', count: 23 },
    { id: 'mods', title: 'Tech Mods', description: '科技模组使用指南', icon: Zap, color: 'var(--color-nexus-warning)', count: 18 },
    { id: 'pvp', title: 'PvP Combat', description: 'PvP战斗技巧', icon: Target, color: 'var(--color-nexus-error)', count: 12 },
    { id: 'advanced', title: 'Advanced Tech', description: '高级技术指南', icon: Settings, color: 'var(--color-nexus-electric-purple)', count: 9 },
    { id: 'community', title: 'Community', description: '社区贡献指南', icon: Heart, color: 'var(--color-nexus-primary)', count: 7 }
];

interface GuideCategoriesProps {
    onCategorySelectAction: (categoryId: string) => void;
}

export const GuideCategories = ({ onCategorySelectAction }: GuideCategoriesProps ) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <GlassCard
                        key={category.id}
                        glowColor={category.color}
                        onClick={() => onCategorySelectAction(category.id)}
                        className="flex flex-col"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <Icon className="w-10 h-10 relative z-10" style={{ color: category.color }} />
                                <div className="absolute inset-0 animate-ping rounded-full" style={{ backgroundColor: category.color, opacity: 0.2 }} />
                            </div>
                            <div>
                                <h3 className="font-cyber text-lg" style={{ color: category.color }}>{category.title}</h3>
                                <p className="text-sm text-nexus-text-muted">{category.description}</p>
                            </div>
                        </div>
                        <div className="flex-grow" />
                        <div className="pt-4 border-t border-white/10 text-right">
                            <button className="text-sm font-matrix transition-colors hover:text-white" style={{color: category.color}}>
                                Browse {category.count} guides →
                            </button>
                        </div>
                    </GlassCard>
                );
            })}
        </div>
    );
};
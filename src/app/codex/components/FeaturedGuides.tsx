'use client';

import React from 'react';
import {CyberFrame} from '@/components/cyberpunk';
import {NeonButton} from '@/components/ui';
import {Bookmark, Clock, Eye, MessageCircle, Play, Star, ThumbsUp} from 'lucide-react';

const featuredGuide = {
    title: 'Complete Cyberpunk City Building Guide',
    description: '从零开始建造一座完整的赛博朋克城市，包含详细的建筑技巧和装饰方法。',
    category: 'Building',
    difficulty: 'Intermediate',
    duration: '2-3 hours',
    rating: 4.9,
    views: 1247,
    author: 'CyberArchitect',
    tags: ['cyberpunk-theme', 'city-building', 'architecture', 'lighting'],
};

const difficultyConfig = {
    Intermediate: 'text-nexus-warning border-nexus-warning',
    Advanced: 'text-nexus-error border-nexus-error',
    Beginner: 'text-nexus-accent border-nexus-accent',
};

interface GuideFilters {
    category?: string;
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface FeaturedGuidesProps {
    filters: GuideFilters;
}

export const FeaturedGuides = ({ filters: _filters}: FeaturedGuidesProps) => {
    // In a real app, you would fetch guides based on the `filters` prop
    return (
        <div className="space-y-6">
            <CyberFrame color="var(--color-nexus-primary)" corners>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2 relative h-64 lg:h-auto bg-cover bg-center"
                         style={{backgroundImage: "url('https://camo.githubusercontent.com/41621253b4b5e4018a99371719b1682494d4d1254395e3a3556f8510862554e2/68747470733a2f2f692e696d6775722e636f6d2f70747478644d482e6a706567')"}}>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <button
                                className="w-20 h-20 bg-nexus-primary/20 rounded-full border-2 border-nexus-primary flex items-center justify-center hover:bg-nexus-primary/30 transition-colors group">
                                <Play
                                    className="w-10 h-10 text-nexus-primary ml-1 group-hover:scale-110 transition-transform"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-6 space-y-4 bg-nexus-dark/50">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-cyber text-nexus-primary">{featuredGuide.title}</h3>
                            <span
                                className={`text-xs font-matrix border px-2 py-0.5 rounded-full ${difficultyConfig[featuredGuide.difficulty as keyof typeof difficultyConfig]}`}>{featuredGuide.difficulty}</span>
                        </div>
                        <p className="text-nexus-text-muted leading-relaxed text-sm">{featuredGuide.description}</p>
                        <div className="flex items-center space-x-6 text-sm font-matrix text-nexus-text-muted">
                            <span className="flex items-center gap-2"><Clock
                                className="w-4 h-4"/>{featuredGuide.duration}</span>
                            <span className="flex items-center gap-2"><Eye
                                className="w-4 h-4"/>{featuredGuide.views}</span>
                            <span className="flex items-center gap-2 text-nexus-warning"><Star
                                className="w-4 h-4"/>{featuredGuide.rating}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {featuredGuide.tags.map(tag => <span key={tag}
                                                                 className="text-xs font-matrix bg-nexus-surface px-2 py-1 rounded">#{tag}</span>)}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-nexus-primary/20">
                            <NeonButton variant="primary" size="sm"><Play className="w-4 h-4 mr-2"/>Start
                                Guide</NeonButton>
                            <div className="flex items-center space-x-3">
                                <button className="text-nexus-text-muted hover:text-nexus-accent"><ThumbsUp
                                    className="w-5 h-5"/></button>
                                <button className="text-nexus-text-muted hover:text-nexus-primary"><MessageCircle
                                    className="w-5 h-5"/></button>
                                <button className="text-nexus-text-muted hover:text-nexus-secondary"><Bookmark
                                    className="w-5 h-5"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </CyberFrame>
        </div>
    );
};
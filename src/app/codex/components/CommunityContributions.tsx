'use client';

import React from 'react';
import { GlassCard, NeonButton } from '@/components/ui';
import { HologramEffect } from '@/components/cyberpunk';
import { Eye, Star, Download, Bookmark } from 'lucide-react';

const submissions = [
    { title: 'Ultimate AE2 Setup Guide', author: 'TechExpert_99', rating: 4.8, downloads: 1234, status: 'featured' as const },
    { title: 'Cyberpunk Skyscraper Blueprint', author: 'ArchitectPro', rating: 4.9, downloads: 892, status: 'approved' as const },
    { title: 'Newbie Survival Tips 101', author: 'HelpfulPlayer', rating: 4.7, downloads: 567, status: 'approved' as const },
];

const statusConfig = {
    featured: { className: 'border-nexus-warning text-nexus-warning' },
    approved: { className: 'border-nexus-accent text-nexus-accent' },
};

export const CommunityContributions = () => {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <HologramEffect>
                    <h2 className="text-3xl font-cyber text-nexus-primary">COMMUNITY GUIDES</h2>
                </HologramEffect>
                <p className="text-nexus-text-muted font-matrix">Player-created guides and tutorials</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {submissions.map(sub => {
                    const config = statusConfig[sub.status];
                    return (
                        <GlassCard key={sub.title} hover={false} className="flex flex-col">
                            <div className="space-y-3 flex-grow">
                                <span className={`text-xs font-matrix border px-2 py-0.5 rounded-full ${config.className}`}>{sub.status}</span>
                                <h4 className="font-matrix font-bold text-lg text-white">{sub.title}</h4>
                                <p className="text-sm text-nexus-text-muted">by {sub.author}</p>
                            </div>
                            <div className="pt-4 mt-4 border-t border-white/10">
                                <div className="flex justify-between items-center text-sm font-matrix mb-4">
                                    <span className={`flex items-center gap-2 ${config.className}`}><Star className="w-4 h-4"/>{sub.rating}</span>
                                    <span className="flex items-center gap-2 text-nexus-text-muted"><Download className="w-4 h-4"/>{sub.downloads}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <NeonButton variant="primary" size="sm" className="flex-1"><Eye className="w-4 h-4 mr-2"/>View</NeonButton>
                                    <NeonButton variant="secondary" size="sm" className="px-3"><Bookmark className="w-4 h-4"/></NeonButton>
                                </div>
                            </div>
                        </GlassCard>
                    );
                })}
            </div>
        </div>
    );
};
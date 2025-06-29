'use client';

import React from 'react';
import { GlassCard } from '@/components/ui';
import { Users, Activity, MessageCircle, Crown, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// --- DATA (No changes needed here) ---
const stats = {
    totalMembers: 2847,
    onlineNow: 342,
    totalPosts: 15834,
    weeklyGrowth: 12.5,
    topContributors: [
        { name: 'CyberBuilder_Pro', posts: 234 },
        { name: 'TechMaster_Alex', posts: 189 },
        { name: 'CreativeQueen', posts: 167 },
    ]
};

// --- FIX: Define the props type for the StatCard component ---
type StatCardProps = {
    icon: LucideIcon;
    title: string;
    value: number;
    growth?: number; // The '?' makes this prop optional
    colorClass: 'primary' | 'accent' | 'secondary' | 'warning';
};

// --- StatCard Component with types applied ---
const StatCard = ({ icon: Icon, title, value, growth, colorClass }: StatCardProps) => (
    <GlassCard glowColor={`var(--color-nexus-${colorClass})`}>
        <div className="text-center space-y-3">
            <Icon className={`w-8 h-8 mx-auto text-nexus-${colorClass}`} />
            <div>
                <p className={`text-3xl font-cyber text-nexus-${colorClass}`}>{value.toLocaleString()}</p>
                <p className="text-sm font-matrix text-nexus-text-muted">{title}</p>
            </div>
            {growth && ( // This conditional rendering is fine because the prop is optional
                <div className="flex items-center justify-center space-x-1 text-nexus-accent">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-matrix">+{growth}% this week</span>
                </div>
            )}
        </div>
    </GlassCard>
);

// --- Main Component (No changes needed here) ---
export const CommunityStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Users} title="Total Members" value={stats.totalMembers} growth={stats.weeklyGrowth} colorClass="primary" />
            <StatCard icon={Activity} title="Online Now" value={stats.onlineNow} colorClass="accent" />
            <StatCard icon={MessageCircle} title="Total Posts" value={stats.totalPosts} colorClass="secondary" />
            <GlassCard glowColor="var(--color-nexus-warning)">
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Crown className="w-6 h-6 text-nexus-warning" />
                        <h4 className="font-cyber text-nexus-warning">TOP CONTRIBUTORS</h4>
                    </div>
                    <div className="space-y-2">
                        {stats.topContributors.map((contributor, index) => (
                            <div key={index} className="flex items-center justify-between text-sm bg-nexus-darker/50 p-2 rounded">
                                <span className="font-matrix text-white truncate">{contributor.name}</span>
                                <span className="font-matrix text-nexus-warning">{contributor.posts} posts</span>
                            </div>
                        ))}
                    </div>
                </div>
            </GlassCard>
        </div>
    );
};

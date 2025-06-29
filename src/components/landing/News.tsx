'use client';

import React from 'react';
import {GlassCard, NeonButton} from '@/components/ui';
import {HologramEffect} from '@/components/cyberpunk';
import {Calendar, ExternalLink} from 'lucide-react';

const newsItems = [
    {
        type: 'UPDATE',
        title: 'Server v2.1.0 Released',
        content: 'New cyberpunk buildings and enhanced mod compatibility.',
        priority: 'high' as const
    },
    {
        type: 'EVENT',
        title: 'Cyberpunk Building Contest',
        content: 'Show off your futuristic architectural skills! Prizes available.',
        priority: 'medium' as const
    },
    {
        type: 'NOTICE',
        title: 'Scheduled Maintenance',
        content: 'Server will restart for performance optimization on Sunday.',
        priority: 'low' as const
    },
];

const events = [
    {name: 'Tech Expo 2024', date: 'Dec 15'},
    {name: 'Nexus PvP Tournament', date: 'Dec 20'},
    {name: 'Winter Festival', date: 'Dec 25'},
];

const priorityConfig = {
    high: {className: 'border-l-nexus-error text-nexus-error', bgClassName: 'bg-nexus-error/20'},
    medium: {className: 'border-l-nexus-warning text-nexus-warning', bgClassName: 'bg-nexus-warning/20'},
    low: {className: 'border-l-nexus-accent text-nexus-accent', bgClassName: 'bg-nexus-accent/20'},
};

export const News = () => {
    return (
        <section className="py-20 px-6 bg-nexus-dark/50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <HologramEffect>
                        <h2 className="text-3xl md:text-4xl font-cyber text-nexus-primary mb-4">NEWS & EVENTS</h2>
                    </HologramEffect>
                    <p className="text-nexus-text-muted font-matrix">Latest updates and upcoming activities</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <GlassCard hover={false} className="h-full">
                            <div className="space-y-4">
                                {newsItems.map((item, index) => {
                                    const config = priorityConfig[item.priority];
                                    return (
                                        <div key={index}
                                             className={`bg-nexus-darker/50 rounded-lg p-4 border-l-4 transition-all hover:bg-nexus-surface ${config.className}`}>
                                            <span
                                                className={`text-xs px-2 py-1 rounded font-matrix font-bold uppercase mb-2 inline-block ${config.bgClassName}`}>{item.type}</span>
                                            <h4 className="font-matrix font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-sm text-nexus-text-muted">{item.content}</p>
                                        </div>
                                    );
                                })}
                                <div className="text-center pt-4">
                                    <NeonButton variant="primary">
                                        <ExternalLink className="w-4 h-4 mr-2"/>VIEW ALL NEWS
                                    </NeonButton>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    <div className="lg:col-span-1">
                        <GlassCard glowColor="var(--color-nexus-accent)" className="h-full">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-6 h-6 text-nexus-accent"/>
                                    <h3 className="text-xl font-cyber text-nexus-accent">UPCOMING EVENTS</h3>
                                </div>
                                <div className="space-y-3">
                                    {events.map((event, index) => (
                                        <div key={index}
                                             className="bg-nexus-darker/50 rounded-md p-3 border-l-2 border-nexus-accent">
                                            <p className="font-matrix text-white text-sm">{event.name}</p>
                                            <p className="text-xs text-nexus-text-muted">{event.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
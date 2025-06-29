'use client';

import React from 'react';
import {CyberFrame, HologramEffect} from '@/components/cyberpunk';
import {NeonButton} from '@/components/ui';
import type {LucideIcon} from 'lucide-react';
import {ArrowRight, Globe, Users, Zap} from 'lucide-react';

const features: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string,
    variant: 'primary' | 'success' | 'secondary',
    details: string[]
}[] = [
    {
        icon: Globe,
        title: 'CYBERPUNK WORLD',
        description: 'An immersive cyberpunk world with futuristic architecture and neon aesthetics.',
        color: 'var(--color-nexus-primary)',
        variant: 'primary',
        details: ['Futuristic Builds', 'Neon Decorations', 'High-Tech Facilities', 'Cyberpunk Ambience']
    },
    {
        icon: Zap,
        title: 'TECH MODS',
        description: 'A curated selection of high-tech mods for an authentic tech-survival experience.',
        color: 'var(--color-nexus-accent)',
        variant: 'success',
        details: ['Applied Energistics 2', 'Thermal Expansion', 'Industrial Craft', 'Tech Reborn']
    },
    {
        icon: Users,
        title: 'ACTIVE COMMUNITY',
        description: 'A vibrant community of players building the future digital world together.',
        color: 'var(--color-nexus-secondary)',
        variant: 'secondary',
        details: ['Discord Community', 'Building Contests', 'Tech Exchange', 'Player Events']
    }
];

export const Features = () => {
    return (
        <section className="py-20 px-6 bg-nexus-dark">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <HologramEffect>
                        <h2 className="text-3xl md:text-4xl font-cyber text-nexus-primary mb-4">NEXUS FEATURES</h2>
                    </HologramEffect>
                    <p className="text-nexus-text-muted font-matrix">Experience the infinite possibilities of future
                        technology</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <CyberFrame key={index} color={feature.color} corners>
                            <div className="p-6 h-full flex flex-col text-center space-y-4">
                                <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                                    <feature.icon className="w-12 h-12 relative z-10" style={{color: feature.color}}/>
                                    <div className="absolute inset-0 animate-ping rounded-full"
                                         style={{backgroundColor: feature.color, opacity: 0.2}}/>
                                </div>
                                <h3 className="text-xl font-cyber" style={{color: feature.color}}>{feature.title}</h3>
                                <p className="text-nexus-text-muted text-sm leading-relaxed flex-grow">{feature.description}</p>
                                <div className="space-y-2 pt-4 border-t" style={{borderColor: `${feature.color}20`}}>
                                    {feature.details.map(detail => (
                                        <p key={detail}
                                           className="text-xs font-matrix text-nexus-text-muted">{detail}</p>
                                    ))}
                                </div>
                                <NeonButton variant={feature.variant} size="sm" className="w-full mt-4">
                                    EXPLORE <ArrowRight className="w-4 h-4 ml-2"/>
                                </NeonButton>
                            </div>
                        </CyberFrame>
                    ))}
                </div>
            </div>
        </section>
    );
};
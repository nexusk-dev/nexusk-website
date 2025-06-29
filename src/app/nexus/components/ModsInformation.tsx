'use client';

import React from 'react';
import { GlassCard, NeonButton } from '@/components/ui';
import { CheckCircle, Download } from 'lucide-react';

const categoryConfig = {
    Tech: { className: 'bg-nexus-primary/20 text-nexus-primary' },
    Tools: { className: 'bg-nexus-warning/20 text-nexus-warning' },
    World: { className: 'bg-nexus-accent/20 text-nexus-accent' },
    Utility: { className: 'bg-nexus-secondary/20 text-nexus-secondary' },
    Transport: { className: 'bg-nexus-electric-purple/20 text-nexus-electric-purple' },
};

export const ModsInformation = () => {
    const mods = [
        { name: 'Applied Energistics 2', version: '15.0.7', category: 'Tech' as const, description: 'Advanced storage and automation' },
        { name: 'Thermal Expansion', version: '10.0.4', category: 'Tech' as const, description: 'Machines and energy systems' },
        { name: 'Tinkers Construct', version: '3.7.1', category: 'Tools' as const, description: 'Customizable tools and weapons' },
        { name: 'Biomes O Plenty', version: '18.0.2', category: 'World' as const, description: 'Additional biomes and blocks' },
        { name: 'JEI', version: '11.6.0', category: 'Utility' as const, description: 'Just Enough Items recipe viewer' },
        { name: 'Waystones', version: '12.3.2', category: 'Transport' as const, description: 'Fast travel waypoints' }
    ];

    return (
        <GlassCard hover={false} className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-cyber text-nexus-primary">MODS & PLUGINS</h3>
                <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-nexus-accent" />
                    <span className="text-sm font-matrix text-nexus-accent">All Systems Loaded</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mods.map((mod) => (
                    <div key={mod.name} className="bg-nexus-darker/50 rounded-lg p-4 hover:bg-nexus-surface transition-colors">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h4 className="font-matrix font-bold text-white">{mod.name}</h4>
                                <p className="text-xs text-nexus-text-muted font-matrix">v{mod.version}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded font-matrix ${categoryConfig[mod.category].className}`}>
                {mod.category}
              </span>
                        </div>
                        <p className="text-sm text-nexus-text-muted">{mod.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center pt-4">
                <NeonButton variant="primary">
                    <Download className="w-4 h-4 mr-2" />
                    Download Modpack
                </NeonButton>
            </div>
        </GlassCard>
    );
};
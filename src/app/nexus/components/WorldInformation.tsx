'use client';

import React from 'react';
import {GlassCard} from '@/components/ui';

export const WorldInformation = () => {
    const worldData = {
        name: 'NexusK Cyberpunk World',
        seed: '2077-NEXUSK-CYBER',
        size: '15.2 GB',
        chunks: '24,567',
        entities: '156,789',
        tileEntities: '8,432',
        biomes: ['Cyberpunk City', 'Tech Valley', 'Neon Forest', 'Digital Desert'],
        structures: ['Central Hub', 'Tech District', 'Mining Complex', 'Trading Post']
    };

    const InfoRow = ({label, value, valueClass = 'text-white'}: {
        label: string,
        value: string,
        valueClass?: string
    }) => (
        <div className="flex justify-between items-baseline">
            <span className="text-nexus-text-muted font-matrix">{label}:</span>
            <span className={`font-matrix text-right ${valueClass}`}>{value}</span>
        </div>
    );

    return (
        <GlassCard hover={false} className="space-y-6">
            <h3 className="text-xl font-cyber text-nexus-primary">WORLD INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h4 className="text-lg font-cyber text-nexus-accent border-b border-nexus-accent/20 pb-2">BASIC
                        INFO</h4>
                    <div className="space-y-3">
                        <InfoRow label="World Name" value={worldData.name}/>
                        <InfoRow label="Seed" value={worldData.seed} valueClass="text-nexus-primary"/>
                        <InfoRow label="Size" value={worldData.size}/>
                        <InfoRow label="Chunks" value={worldData.chunks}/>
                        <InfoRow label="Entities" value={worldData.entities}/>
                        <InfoRow label="Tile Entities" value={worldData.tileEntities}/>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-cyber text-nexus-accent border-b border-nexus-accent/20 pb-2">FEATURES</h4>
                    <div className="space-y-4">
                        <div>
                            <h5 className="font-matrix text-nexus-text-muted mb-2">BIOMES</h5>
                            <div className="flex flex-wrap gap-2">
                                {worldData.biomes.map((biome) => (
                                    <span key={biome}
                                          className="bg-nexus-primary/10 text-nexus-primary text-xs font-matrix px-2 py-1 rounded">{biome}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-matrix text-nexus-text-muted mb-2">MAJOR STRUCTURES</h5>
                            <div className="flex flex-wrap gap-2">
                                {worldData.structures.map((structure) => (
                                    <span key={structure}
                                          className="bg-nexus-electric-purple/10 text-nexus-electric-purple text-xs font-matrix px-2 py-1 rounded">{structure}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};
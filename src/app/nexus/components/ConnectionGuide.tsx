'use client';

import React, { useState } from 'react';
import { GlassCard, NeonButton } from '@/components/ui';
import { Code, Download, Terminal } from 'lucide-react';

const guides = {
    java: {
        title: 'Java Edition',
        steps: [
            'Open Minecraft: Java Edition',
            'Click "Multiplayer", then "Add Server"',
            'Server Name: NexusK',
            'Server Address: play.nexusk.net',
            'Click "Done" and connect!'
        ]
    },
    bedrock: {
        title: 'Bedrock Edition',
        steps: [
            'Open Minecraft (Bedrock)',
            'Click "Play", go to "Servers" tab',
            'Scroll down and "Add Server"',
            'Server Name: NexusK',
            'Server Address: bedrock.nexusk.net',
            'Port: 19132',
            'Click "Save" and connect!'
        ]
    }
};

export const ConnectionGuide = () => {
    const [activeTab, setActiveTab] = useState<'java' | 'bedrock'>('java');


    return (
        <GlassCard hover={false} className="space-y-6">
            <h3 className="text-xl font-cyber text-nexus-primary">CONNECTION GUIDE</h3>
            <div className="flex space-x-2 border-b border-nexus-primary/20 pb-4">
                {Object.entries(guides).map(([key, { title }]) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key as 'java' | 'bedrock')}
                        className={`px-4 py-2 font-matrix text-sm transition-all duration-300 rounded-t-md ${
                            activeTab === key ? 'bg-nexus-primary/10 text-nexus-primary border-b-2 border-nexus-primary' : 'text-nexus-text-muted hover:text-nexus-primary'
                        }`}
                    >
                        {title}
                    </button>
                ))}
            </div>

            <div className="space-y-3">
                {guides[activeTab].steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-nexus-darker/50 p-3 rounded-md">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexus-primary/20 border border-nexus-primary/50 flex items-center justify-center">
                            <span className="text-xs font-bold text-nexus-primary">{index + 1}</span>
                        </div>
                        <span className="text-nexus-text font-matrix text-sm">{step}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-nexus-primary/20">
                <NeonButton variant="primary" onClick={() => navigator.clipboard.writeText('play.nexusk.net')}>
                    <Terminal className="w-4 h-4 mr-2" />Copy IP
                </NeonButton>
                <NeonButton variant="secondary">
                    <Download className="w-4 h-4 mr-2" />Download Launcher
                </NeonButton>
                <NeonButton variant="success">
                    <Code className="w-4 h-4 mr-2" />Modpack Guide
                </NeonButton>
            </div>
        </GlassCard>
    );
};
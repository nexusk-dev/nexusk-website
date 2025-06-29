'use client';

import React, { useState } from 'react';
import { HologramEffect, GlitchText, NeonGrid, CyberFrame } from '@/components/cyberpunk';
import { NeonButton } from '@/components/ui';
import { Zap, Download, Info, Terminal, Copy, ChevronDown } from 'lucide-react';

export const Hero = () => {
    const [copied, setCopied] = useState(false);

    const copyIP = () => {
        navigator.clipboard.writeText('play.nexusk.fun');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            <NeonGrid gridSize={40} color="var(--color-nexus-primary)" />
            <NeonGrid gridSize={20} color="var(--color-nexus-secondary)" className="opacity-50" />

            <div className="text-center space-y-8 max-w-4xl mx-auto px-6 z-10">
                <HologramEffect glitchChance={0.1} scanSpeed={2}>
                    <GlitchText
                        text="NEXUSK"
                        className="text-6xl md:text-8xl font-bold font-cyber text-transparent bg-clip-text bg-gradient-to-r from-nexus-primary to-nexus-accent"
                        trigger="auto"
                    />
                    <p className="text-xl md:text-2xl text-nexus-text-muted font-matrix mt-4">
                        THE FUTURE NEXUS • 未来连接点
                    </p>
                </HologramEffect>

                <CyberFrame color="var(--color-nexus-primary)" corners className="max-w-2xl mx-auto">
                    <div className='p-6 space-y-4'>
                        <div className="flex items-center justify-center space-x-4 bg-nexus-darker/50 p-3 rounded-md border border-nexus-primary/20">
                            <Terminal className="w-5 h-5 text-nexus-primary" />
                            <span className="font-matrix text-nexus-primary text-lg">play.nexusk.net</span>
                            <button onClick={copyIP} className="text-nexus-text-muted hover:text-nexus-primary transition-colors">
                                <Copy className="w-5 h-5" />
                            </button>
                        </div>
                        {copied && <p className="text-center text-nexus-accent font-matrix text-sm animate-pulse">✓ IP Copied!</p>}

                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <NeonButton variant="primary" size="lg">
                                <Zap className="w-5 h-5 mr-2" />CONNECT NOW
                            </NeonButton>
                            <NeonButton variant="secondary">
                                <Download className="w-5 h-5 mr-2" />MODPACK
                            </NeonButton>
                        </div>
                    </div>
                </CyberFrame>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-nexus-primary/70" />
                </div>
            </div>
        </section>
    );
};
// src/app/cyberpunk-basic_ui_showcase/page.tsx
'use client';

import React, {useState} from 'react';
import {
    CyberFrame,
    DigitalRain,
    GlitchText,
    HologramEffect,
    HoloHUD,
    MatrixRain,
    NeonGrid,
    PulseEffect,
} from '@/components/cyberpunk'; // 导入我们的特效组件
import {Cpu} from 'lucide-react';
import {NeonButton} from '@/components/ui'; // 引入 NeonButton


const CyberpunkEffectsShowcase = () => {

    const hudData = {
        'Players': '77/100',
        'Ping': '19ms',
        'Uptime': '128h',
        'CPU Load': '42%',
        'Memory': '9.8GB',
        'Network': '2.5Gb/s',
    };

    const demos = {
        hud: {
            title: 'HoloHUD',
            component: (
                <div className="flex h-96 items-center justify-center bg-black p-4">
                    <HoloHUD title="NEXUSK CONTROL CENTER" status="online" data={hudData} color="#00d4ff" />
                </div>
            ),
        },
        hologram: {
            title: 'Hologram & Pulse',
            component: (
                <div className="flex h-96 items-center justify-center bg-black">
                    <HologramEffect glitchChance={0.2} color="#00d4ff">
                        <PulseEffect color="#00d4ff">
                            <div className="flex h-48 w-48 flex-col items-center justify-center space-y-4 rounded-full border-2 border-nexus-primary/50 bg-nexus-primary/10">
                                <Cpu className="h-16 w-16 text-nexus-primary" />
                                <p className="font-cyber text-nexus-primary">CORE ONLINE</p>
                            </div>
                        </PulseEffect>
                    </HologramEffect>
                </div>
            ),
        },
        matrix: {
            title: 'Matrix Rain',
            component: (
                <MatrixRain className="h-96" density={1.2} speed={1}>
                    <div className="flex h-full flex-col items-center justify-center text-center">
                        <GlitchText text="WAKE UP, NEXUS..." trigger="auto" className="text-4xl font-bold text-nexus-accent" />
                        <p className="mt-4 font-matrix text-nexus-accent/80">The Matrix has you...</p>
                    </div>
                </MatrixRain>
            ),
        },
        glitch: {
            title: 'Glitch Text',
            component: (
                <div className="flex h-96 flex-col items-center justify-center space-y-8 bg-black">
                    <GlitchText text="SYSTEM BREACH" trigger="auto" colors={['#ff073a', '#ff2a6d', '#ffaa00']} className="text-3xl text-nexus-error" />
                    <GlitchText text="> Hover to Glitch" trigger="hover" className="text-2xl font-matrix text-nexus-primary" />
                    <GlitchText text="> Click to Glitch" trigger="click" className="text-xl font-matrix text-nexus-accent" />
                </div>
            ),
        },
        grid: {
            title: 'Neon Grid & Frame',
            component: (
                <div className="relative h-96 overflow-hidden bg-black">
                    <NeonGrid gridSize={30} color="#8a2be2" />
                    <NeonGrid gridSize={20} color="#ff2a6d" className="opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <CyberFrame color="#00d4ff" className="p-8">
                            <h3 className="text-center font-cyber text-2xl text-nexus-primary">NEURAL NETWORK</h3>
                            <p className="text-center font-matrix text-sm text-nexus-primary/80">GRID ACTIVE</p>
                        </CyberFrame>
                    </div>
                </div>
            ),
        },
    };

    type DemoKey = keyof typeof demos;

    const [activeDemo, setActiveDemo] = useState<DemoKey>('hud');


    return (
        <div className="relative min-h-screen bg-black text-nexus-text">
            {/* 全局背景特效 */}
            <DigitalRain density={0.3} speed={0.5} binary />

            <main className="relative z-10 p-4 sm:p-8">
                <div className="mx-auto max-w-7xl space-y-12">

                    <div className="text-center">
                        <HologramEffect>
                            <h1 className="text-4xl font-bold sm:text-6xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-nexus-primary to-nexus-secondary">
                                CYBERPUNK FX
                            </h1>
                        </HologramEffect>
                        <p className="mt-4 font-matrix text-nexus-text-muted">赛博朋克高级特效组件库</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {Object.entries(demos).map(([key, { title }]) => (
                            <NeonButton
                                key={key}
                                onClick={() => setActiveDemo(key as keyof typeof demos)}
                                variant={activeDemo === key ? 'primary' : 'secondary'}
                                size="sm"
                                className={activeDemo === key ? 'opacity-100 scale-110' : 'opacity-60'}
                            >
                                {title}
                            </NeonButton>
                        ))}
                    </div>

                    <CyberFrame color={activeDemo === 'glitch' ? '#ff073a' : '#00d4ff'} corners>
                        <div className="bg-black/50">
                            <div className="border-b px-6 py-3" style={{ borderColor: (activeDemo === 'glitch' ? '#ff073a' : '#00d4ff') + '40' }}>
                                <h3 className="font-cyber text-lg" style={{ color: (activeDemo === 'glitch' ? '#ff073a' : '#00d4ff') }}>
                                    {`// DEMO: ${demos[activeDemo].title}`}
                                </h3>
                            </div>
                            <div className="relative">
                                {demos[activeDemo].component}
                            </div>
                        </div>
                    </CyberFrame>

                    <div className="text-center">
                        <GlitchText text="[ ALL SYSTEMS NOMINAL ]" trigger="auto" className="text-sm font-matrix text-nexus-accent/80" />
                    </div>

                </div>
            </main>
        </div>
    );
};

export default CyberpunkEffectsShowcase;
// src/app/basic_ui_showcase/page.tsx

'use client'; // 声明为客户端组件，因为我们使用了 hooks (useState, etc.)

import React, { useState } from 'react';
import {
    NeonButton,
    GlassCard,
    CyberInput,
    CyberModal,
    Toast,
    CyberProgress,
    CyberSelect,
    CyberBadge,
    CyberLoading,
    StatCard,
} from '@/components/ui'; // 使用 @ 别名从索引文件导入

import {
    Terminal, Zap, Users, Server, Globe, Activity, Copy, ExternalLink,
    X, Check, AlertTriangle, Info, ChevronDown, Search, Settings,
    Play, Pause, Volume2, Download, Upload, Shield, Cpu, HardDrive
} from 'lucide-react';

const ComponentShowcasePage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'info' | 'warning' | 'error'>('info');
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('survival');
    const [loading, setLoading] = useState(false);

    const selectOptions = [
        { value: 'survival', label: 'Survival Mode' },
        { value: 'creative', label: 'Creative Mode' },
        { value: 'adventure', label: 'Adventure Mode' },
        { value: 'spectator', label: 'Spectator Mode' }
    ];

    const handleLoadingDemo = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    };

    const showToast = (type: typeof toastType, message: string) => {
        setToastType(type);
        setToastMessage(message);
        setToastVisible(true);
    }

    return (
        <main className="min-h-screen bg-nexus-darker text-nexus-text p-4 sm:p-8 font-matrix">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* 标题 */}
                <div className="text-center space-y-4 pt-8">
                    <h1 className="text-4xl md:text-5xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-nexus-primary to-nexus-accent">
                        NEXUSK UI SHOWCASE
                    </h1>
                    <p className="text-nexus-text-muted">赛博朋克风格组件功能测试</p>
                </div>

                {/* 按钮 */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-cyber text-nexus-primary tracking-widest">NEON BUTTONS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard hover={false}>
                            <h3 className="text-lg font-cyber text-nexus-text-muted mb-4">Variants</h3>
                            <div className="flex flex-col items-start space-y-3">
                                <NeonButton variant="primary"><Zap className="w-4 h-4 mr-2" />Primary</NeonButton>
                                <NeonButton variant="secondary"><Settings className="w-4 h-4 mr-2" />Secondary</NeonButton>
                                <NeonButton variant="success"><Check className="w-4 h-4 mr-2" />Success</NeonButton>
                                <NeonButton variant="warning"><AlertTriangle className="w-4 h-4 mr-2" />Warning</NeonButton>
                                <NeonButton variant="danger"><Shield className="w-4 h-4 mr-2" />Danger</NeonButton>
                            </div>
                        </GlassCard>
                        <GlassCard hover={false}>
                            <h3 className="text-lg font-cyber text-nexus-text-muted mb-4">Sizes</h3>
                            <div className="flex flex-col items-start space-y-3">
                                <NeonButton size="sm">Small</NeonButton>
                                <NeonButton size="md">Medium</NeonButton>
                                <NeonButton size="lg">Large</NeonButton>
                            </div>
                        </GlassCard>
                        <GlassCard hover={false}>
                            <h3 className="text-lg font-cyber text-nexus-text-muted mb-4">States</h3>
                            <div className="flex flex-col items-start space-y-3">
                                <NeonButton loading={loading} onClick={handleLoadingDemo}>Click to Test Loading</NeonButton>
                                <NeonButton disabled>Disabled</NeonButton>
                            </div>
                        </GlassCard>
                    </div>
                </section>

                {/* 卡片 & 统计 */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-cyber text-nexus-primary tracking-widest">CARDS & STATS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title="Players Online" value="42/100" icon={Users} variant="accent" trend="+12%" />
                        <StatCard title="Server Load" value="23%" icon={Cpu} variant="warning" trend="-5%" trendDirection="down" />
                        <StatCard title="Latency" value="32ms" icon={Activity} variant="primary" />
                        <StatCard title="Status" value="Offline" icon={Shield} variant="error" trend="since 1h ago" trendDirection="down" />
                    </div>
                </section>

                {/* 输入 & 选择 */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-cyber text-nexus-primary tracking-widest">INPUTS & FORMS</h2>
                    <GlassCard hover={false}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                            <div className="space-y-6">
                                <CyberInput label="Server Address" placeholder="play.nexusk.net" value={inputValue} onChange={(e) => setInputValue(e.target.value)} icon={Server} />
                                <CyberInput label="Password" type="password" placeholder="Enter your password" />
                                <CyberInput label="Error State" placeholder="Invalid input" error="This field is required." />
                            </div>
                            <div className="space-y-6">
                                <CyberSelect label="Game Mode" options={selectOptions} value={selectValue} onChangeAction={setSelectValue} />
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* 进度条 & 徽章 */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-cyber text-nexus-primary tracking-widest">PROGRESS & BADGES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <GlassCard hover={false} className="space-y-4">
                            <CyberProgress label="Server Health" value={85} variant="accent" />
                            <CyberProgress label="Memory Usage" value={67} variant="warning" animated={false} />
                            <CyberProgress label="Data Upload" value={34} variant="primary" />
                        </GlassCard>
                        <GlassCard hover={false} className="space-y-6">
                            <div className="flex flex-wrap items-center gap-4">
                                <CyberBadge variant="primary">ONLINE</CyberBadge>
                                <CyberBadge variant="success">STABLE</CyberBadge>
                                <CyberBadge variant="warning">MAINTENANCE</CyberBadge>
                                <CyberBadge variant="danger">OFFLINE</CyberBadge>
                                <CyberBadge variant="secondary">EVENT</CyberBadge>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <CyberBadge size="sm">v2.1.0</CyberBadge>
                                <CyberBadge size="md">MODDED</CyberBadge>
                                <CyberBadge size="lg">PREMIUM</CyberBadge>
                            </div>
                        </GlassCard>
                    </div>
                </section>

                {/* 模态框 & 弹窗通知 */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-cyber text-nexus-primary tracking-widest">MODAL & TOAST</h2>
                    <GlassCard hover={false}>
                        <div className="flex flex-wrap gap-4 p-4">
                            <NeonButton onClick={() => setModalOpen(true)}>
                                <Terminal className="w-4 h-4 mr-2"/>Open Modal
                            </NeonButton>
                            <NeonButton variant="success" onClick={() => showToast('success', 'Connection established.')}>
                                Show Success Toast
                            </NeonButton>
                            <NeonButton variant="warning" onClick={() => showToast('warning', 'High latency detected.')}>
                                Show Warning Toast
                            </NeonButton>
                            <NeonButton variant="danger" onClick={() => showToast('error', 'Authentication failed.')}>
                                Show Error Toast
                            </NeonButton>
                        </div>
                    </GlassCard>
                </section>

                {/* 加载动画 */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-cyber text-nexus-primary tracking-widest">LOADING ANIMATIONS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard hover={false}><CyberLoading type="spinner" size="lg" text="Loading Data..." /></GlassCard>
                        <GlassCard hover={false}><CyberLoading type="pulse" variant="accent" size="lg" text="Connecting..." /></GlassCard>
                        <GlassCard hover={false}><CyberLoading type="dots" variant="secondary" text="Processing..." /></GlassCard>
                    </div>
                </section>

            </div>

            {/* 模态框和 Toast 的渲染逻辑 */}
            <CyberModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="System Access Panel">
                <div className="space-y-6">
                    <p className="text-nexus-text-muted">
                        Authorize connection to NexusK main server. Please confirm your credentials.
                    </p>
                    <CyberInput label="Player Name" placeholder="Enter your callsign" icon={Users} />
                    <div className="flex justify-end space-x-4">
                        <NeonButton variant="secondary" onClick={() => setModalOpen(false)}>Decline</NeonButton>
                        <NeonButton variant="primary" onClick={() => setModalOpen(false)}>Authorize</NeonButton>
                    </div>
                </div>
            </CyberModal>

            <Toast
                isVisible={toastVisible}
                onCloseAction={() => setToastVisible(false)}
                message={toastMessage}
                type={toastType}
            />
        </main>
    );
};

export default ComponentShowcasePage;
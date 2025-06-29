'use client';

import React, {useState} from 'react';
import {Activity, Clock, Users, Zap} from 'lucide-react';
import {CyberFrame, HologramEffect} from '@/components/cyberpunk';
import {CyberProgress} from '@/components/ui';

export const ServerStatusHUD = () => {
    // 在真实应用中，这些数据会通过 props 传入或从 API 获取
    const [serverData] = useState({
        players: {current: 77, max: 100},
        uptime: '128h 15m',
        ping: 19,
        tps: 19.9,
        memory: {used: 9.8, total: 16},
        cpu: 42,
        disk: {used: 250, total: 500},
    });

    return (
        <CyberFrame color="var(--color-nexus-primary)" corners>
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-nexus-primary/20 pb-4">
                    <HologramEffect>
                        <h3 className="text-2xl font-cyber text-nexus-primary">LIVE STATUS</h3>
                    </HologramEffect>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-nexus-accent animate-pulse"/>
                        <span className="text-nexus-accent font-matrix text-sm">SYSTEM NOMINAL</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <Users className="w-8 h-8 text-nexus-primary mx-auto mb-2"/>
                        <div
                            className="text-2xl font-cyber text-nexus-primary">{serverData.players.current}/{serverData.players.max}</div>
                        <div className="text-xs text-nexus-text-muted font-matrix">PLAYERS</div>
                    </div>
                    <div>
                        <Activity className="w-8 h-8 text-nexus-accent mx-auto mb-2"/>
                        <div className="text-2xl font-cyber text-nexus-accent">{serverData.ping}ms</div>
                        <div className="text-xs text-nexus-text-muted font-matrix">PING</div>
                    </div>
                    <div>
                        <Clock className="w-8 h-8 text-nexus-warning mx-auto mb-2"/>
                        <div className="text-2xl font-cyber text-nexus-warning">{serverData.uptime}</div>
                        <div className="text-xs text-nexus-text-muted font-matrix">UPTIME</div>
                    </div>
                    <div>
                        <Zap className="w-8 h-8 text-nexus-electric-purple mx-auto mb-2"/>
                        <div className="text-2xl font-cyber text-nexus-electric-purple">{serverData.tps}</div>
                        <div className="text-xs text-nexus-text-muted font-matrix">TPS</div>
                    </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-nexus-primary/20">
                    <h4 className="text-lg font-cyber text-nexus-primary">SYSTEM RESOURCES</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CyberProgress label="CPU" value={serverData.cpu} variant="primary"/>
                        <CyberProgress label="MEMORY" value={(serverData.memory.used / serverData.memory.total) * 100}
                                       variant="accent"/>
                        <CyberProgress label="DISK" value={(serverData.disk.used / serverData.disk.total) * 100}
                                       variant="warning"/>
                    </div>
                </div>
            </div>
        </CyberFrame>
    );
};
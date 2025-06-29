'use client';

import React, {useState} from 'react';
import {GlassCard, NeonButton} from '@/components/ui';
import {AlertTriangle, Bell, CheckCircle} from 'lucide-react';

const alertConfig = {
    critical: {className: 'border-l-nexus-error text-nexus-error', icon: <AlertTriangle className="w-5 h-5"/>},
    warning: {className: 'border-l-nexus-warning text-nexus-warning', icon: <AlertTriangle className="w-5 h-5"/>},
    info: {className: 'border-l-nexus-primary text-nexus-primary', icon: <Bell className="w-5 h-5"/>},
};

export const AlertSystem = () => {
    const [alerts, setAlerts] = useState([
        {id: 1, type: 'critical' as const, title: 'High CPU Usage', acknowledged: false},
        {id: 2, type: 'warning' as const, title: 'Player "GrieferBot" detected', acknowledged: true},
        {id: 3, type: 'info' as const, title: 'Daily backup completed', acknowledged: true},
        {id: 4, type: 'critical' as const, title: 'Memory Leak Detected', acknowledged: false},
    ]);

    const acknowledgeAlert = (id: number) => setAlerts(alerts.map(a => a.id === id ? {...a, acknowledged: true} : a));

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-cyber text-nexus-primary">ALERT SYSTEM</h3>
            <GlassCard hover={false}>
                <div className="space-y-4">
                    {alerts.map(alert => {
                        const config = alertConfig[alert.type];
                        return (
                            <div key={alert.id}
                                 className={`bg-nexus-darker/50 rounded-lg p-4 border-l-4 flex items-center justify-between ${config.className} ${alert.acknowledged ? 'opacity-60' : ''}`}>
                                <div className="flex items-center space-x-4">
                                    {config.icon}
                                    <div>
                                        <h4 className="font-matrix font-bold text-white">{alert.title}</h4>
                                        <span className={`text-xs uppercase ${config.className}`}>{alert.type}</span>
                                    </div>
                                </div>
                                {!alert.acknowledged && (
                                    <NeonButton variant="success" size="sm" onClick={() => acknowledgeAlert(alert.id)}>
                                        <CheckCircle className="w-4 h-4 mr-2"/>Acknowledge
                                    </NeonButton>
                                )}
                            </div>
                        );
                    })}
                </div>
            </GlassCard>
        </div>
    );
};
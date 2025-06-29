'use client';

import React from 'react';
import { GlassCard } from '@/components/ui';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const severityConfig = {
    high: { className: 'border-l-nexus-error text-nexus-error', icon: <AlertTriangle className="w-5 h-5" /> },
    medium: { className: 'border-l-nexus-warning text-nexus-warning', icon: <Info className="w-5 h-5" /> },
    low: { className: 'border-l-nexus-accent text-nexus-accent', icon: <CheckCircle className="w-5 h-5" /> },
};

export const ServerRules = () => {
    const rules = [
        { id: 1, title: 'No Griefing or Stealing', description: 'Do not destroy, modify, or take other players\' builds and items without explicit permission.', severity: 'high' as const },
        { id: 2, title: 'Respect All Players & Staff', description: 'No harassment, hate speech, or excessive toxicity. Be respectful in all interactions.', severity: 'high' as const },
        { id: 3, title: 'No Cheating or Exploiting', description: 'Using hacks, client-side mods that provide an unfair advantage, or abusing server bugs is strictly forbidden.', severity: 'high' as const },
        { id: 4, title: 'Keep Chat Clean', description: 'Use English in global channels. Avoid spamming, excessive caps, and inappropriate topics.', severity: 'medium' as const },
        { id: 5, title: 'Claim Your Land', description: 'Use the provided claiming system to protect your base. Unclaimed areas are considered wild.', severity: 'medium' as const },
        { id: 6, title: 'No Lag Machines', description: 'Do not build contraptions that cause significant server or client-side lag.', severity: 'medium' as const },
        { id: 7, title: 'Report Issues Responsibly', description: 'Report bugs, cheaters, or rule violations to staff via the appropriate channels (e.g., Discord ticket).', severity: 'low' as const },
    ];

    return (
        <GlassCard hover={false} className="space-y-6">
            <h3 className="text-xl font-cyber text-nexus-primary">SERVER RULES & GUIDELINES</h3>
            <div className="space-y-4">
                {rules.map(rule => (
                    <div key={rule.id} className={`bg-nexus-darker/50 rounded-lg p-4 border-l-4 ${severityConfig[rule.severity].className}`}>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 pt-1">{severityConfig[rule.severity].icon}</div>
                            <div className="flex-1">
                                <h4 className="font-matrix font-bold text-white mb-1">{rule.title}</h4>
                                <p className="text-sm text-nexus-text-muted">{rule.description}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded font-matrix font-bold uppercase ${severityConfig[rule.severity].className.replace('border-l-', 'bg-').replace('text-', 'text-')}/20`}>
                                {rule.severity}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};
'use client';

import React from 'react';
import { GlassCard, NeonButton } from '@/components/ui';
import { Bot, Users, Send, MessageSquare, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const socialPlatforms: { name: string; icon: LucideIcon; color: string; members: string; description: string; link: string; }[] = [
    { name: 'Discord', icon: Bot, color: '#5865F2', members: '1,247', description: '实时聊天和语音交流', link: '#' },
    { name: 'QQ Group', icon: Users, color: '#12B7F5', members: '892', description: '中文玩家交流群', link: '#' },
    { name: 'Telegram', icon: Send, color: '#0088CC', members: '543', description: '国际玩家频道', link: '#' },
    { name: 'WeChat Group', icon: MessageSquare, color: '#07C160', members: '234', description: '微信交流群', link: '#' },
];

export const SocialIntegration = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                    <GlassCard key={platform.name} glowColor={platform.color}>
                        <div className="text-center space-y-4">
                            <Icon className="w-12 h-12 mx-auto" style={{ color: platform.color }} />
                            <div className="space-y-1">
                                <h3 className="font-cyber text-lg" style={{ color: platform.color }}>{platform.name}</h3>
                                <p className="text-sm text-nexus-text-muted">{platform.description}</p>
                                <p className="text-lg font-bold text-white">{platform.members} 成员</p>
                            </div>
                            <NeonButton variant="primary" size="sm" className="w-full" style={{ borderColor: platform.color, color: platform.color }}>
                                <ExternalLink className="w-4 h-4 mr-2" />加入我们
                            </NeonButton>
                        </div>
                    </GlassCard>
                );
            })}
        </div>
    );
};
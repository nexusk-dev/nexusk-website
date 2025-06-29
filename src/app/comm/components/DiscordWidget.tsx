'use client';

import React, { useState } from 'react';
import { CyberFrame } from '@/components/cyberpunk';
import { NeonButton } from '@/components/ui';
import { Bot, ExternalLink, Mic, MessageCircle, Send, Users } from 'lucide-react';

// 示例数据
const discordData = {
    serverName: 'NexusK Community',
    onlineMembers: 342,
    totalMembers: 1247,
    channels: [
        { name: 'general-chat', type: 'text', users: 45 },
        { name: 'tech-support', type: 'text', users: 23 },
        { name: 'build-showcase', type: 'text', users: 67 },
        { name: 'Voice Chat 1', type: 'voice', users: 12 },
        { name: 'Gaming Session', type: 'voice', users: 8 }
    ],
    recentMessages: [
        { user: 'TechMaster', message: '新的 AE2 设置教程太棒了！', time: '2分钟前', avatar: '🔧' },
        { user: 'BuilderPro', message: '快来看看我最新的赛博朋克高塔。', time: '5分钟前', avatar: '🏗️' },
        { user: 'AdminBot', message: '服务器将在10分钟后重启。', time: '8分钟前', avatar: '🤖' }
    ]
};

export const DiscordWidget = () => {
    const [selectedChannel, setSelectedChannel] = useState('general-chat');

    return (
        <CyberFrame color="#5865F2" corners>
            <div className="p-6 space-y-6">
                {/* 头部信息 */}
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-indigo-400/30">
                        <Bot className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-cyber text-indigo-400">{discordData.serverName}</h3>
                        <div className="flex items-center space-x-4 text-sm font-matrix text-nexus-text-muted">
                            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-nexus-accent animate-pulse"/>{discordData.onlineMembers} 在线</span>
                            <span className="flex items-center gap-2"><Users className="w-4 h-4"/>{discordData.totalMembers} 成员</span>
                        </div>
                    </div>
                    <NeonButton variant="primary" size="sm" className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:shadow-[0_0_20px_#5865F2]">
                        <ExternalLink className="w-4 h-4 mr-2" />加入服务器
                    </NeonButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 频道列表 */}
                    <div className="lg:col-span-1 space-y-2">
                        {discordData.channels.map(channel => (
                            <button key={channel.name} onClick={() => setSelectedChannel(channel.name)} className={`w-full flex items-center justify-between p-3 rounded-md transition-colors ${selectedChannel === channel.name ? 'bg-indigo-500/20' : 'bg-nexus-darker/50 hover:bg-nexus-surface'}`}>
                                <div className="flex items-center space-x-3">
                                    {channel.type === 'voice' ? <Mic className="w-4 h-4 text-nexus-accent"/> : <MessageCircle className="w-4 h-4 text-nexus-text-muted"/>}
                                    <span className="font-matrix text-sm text-white">#{channel.name}</span>
                                </div>
                                <span className="text-xs font-matrix text-nexus-text-muted">{channel.users}</span>
                            </button>
                        ))}
                    </div>

                    {/* 消息和输入 */}
                    <div className="lg:col-span-2 bg-nexus-darker/50 p-4 rounded-md flex flex-col h-80">
                        <div className="flex-grow space-y-3 overflow-y-auto mb-4">
                            {discordData.recentMessages.map((msg, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-nexus-surface rounded-full flex items-center justify-center text-sm border border-indigo-400/30">{msg.avatar}</div>
                                    <div className="flex-1">
                                        <div className="flex items-baseline space-x-2">
                                            <span className="font-matrix font-bold text-indigo-400 text-sm">{msg.user}</span>
                                            <span className="font-matrix text-xs text-nexus-text-muted">{msg.time}</span>
                                        </div>
                                        <p className="text-sm text-nexus-text leading-snug">{msg.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center space-x-3 border-t border-nexus-surface pt-3">
                            <input type="text" placeholder={`在 #${selectedChannel} 中发消息`} className="flex-1 bg-nexus-darker border border-nexus-surface rounded-md px-3 py-2 text-sm font-matrix text-white placeholder-nexus-text-muted focus:outline-none focus:border-indigo-400" />
                            <button className="text-indigo-400 hover:text-white transition-colors"><Send className="w-5 h-5" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </CyberFrame>
    );
};
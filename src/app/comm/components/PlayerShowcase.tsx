'use client';

import React, {useState} from 'react';
import {GlassCard} from '@/components/ui';
import {Camera, Download, Eye, Globe, Heart, Share, ThumbsUp, Video} from 'lucide-react';

const showcaseData = {
    builds: [
        {id: 1, title: '赛博朋克巨塔', author: 'ArchitectPro', likes: 234, views: 1247},
        {id: 2, title: '全自动科技工厂', author: 'IndustrialMaster', likes: 189, views: 892},
        {id: 3, title: '霓虹街头市场', author: 'CityPlanner', likes: 156, views: 678},
    ],
    screenshots: [
        {id: 1, title: '赛博都市日落', author: 'PhotoMaster', likes: 345, views: 1500},
        {id: 2, title: '不夜城霓虹', author: 'NightCrawler', likes: 289, views: 1300},
    ],
    videos: [
        {id: 1, title: '服务器巡游 2024', author: 'ContentCreator', likes: 456, views: 2345},
        {id: 2, title: 'AE2 自动化指南', author: 'TechGuru', likes: 234, views: 1876},
    ],
};

const categories = [
    {id: 'builds', name: '建筑', icon: Globe},
    {id: 'screenshots', name: '截图', icon: Camera},
    {id: 'videos', name: '视频', icon: Video},
];

export const PlayerShowcase = () => {
    const [activeCategory, setActiveCategory] = useState<'builds' | 'screenshots' | 'videos'>('builds');

    return (
        <div className="space-y-6">
            <div className="flex justify-center space-x-2 md:space-x-4">
                {categories.map(({id, name, icon: Icon}) => (
                    <button key={id} onClick={() => setActiveCategory(id as any)}
                            className={`flex items-center space-x-2 px-4 md:px-6 py-3 font-matrix text-sm border-2 transition-all duration-300 ${activeCategory === id ? 'border-nexus-secondary text-nexus-secondary bg-nexus-secondary/10' : 'border-nexus-surface text-nexus-text-muted hover:border-nexus-secondary hover:text-nexus-secondary'}`}
                            style={{clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'}}>
                        <Icon className="w-4 h-4"/>
                        <span>{name}</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {showcaseData[activeCategory].map(item => (
                    <GlassCard key={item.id} glowColor="var(--color-nexus-secondary)" hover={false}>
                        <div className="space-y-4">
                            <div
                                className="h-48 bg-nexus-darker rounded-md flex items-center justify-center bg-cover bg-center"
                                style={{backgroundImage: `url(https://placehold.co/600x400/0a0a0f/ff2a6d?text=${item.title.replace(/\s/g, '+')})`}}>
                                <div
                                    className="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <Eye className="w-8 h-8 text-nexus-secondary"/>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-matrix font-bold text-white truncate">{item.title}</h4>
                                <p className="text-sm text-nexus-text-muted">作者: {item.author}</p>
                            </div>
                            <div
                                className="flex items-center justify-between text-sm font-matrix text-nexus-text-muted">
                                <span className="flex items-center gap-2 text-nexus-secondary"><Heart
                                    className="w-4 h-4"/>{item.likes}</span>
                                <span className="flex items-center gap-2"><Eye className="w-4 h-4"/>{item.views}</span>
                                <div className="flex items-center gap-3">
                                    <button className="hover:text-nexus-accent"><ThumbsUp className="w-4 h-4"/></button>
                                    <button className="hover:text-nexus-primary"><Share className="w-4 h-4"/></button>
                                    <button className="hover:text-white"><Download className="w-4 h-4"/></button>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};
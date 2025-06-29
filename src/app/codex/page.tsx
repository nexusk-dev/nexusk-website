// src/app/codex/page.tsx
'use client';

import React, {useCallback, useState} from 'react';
import {HologramEffect} from '@/components/cyberpunk';
import {NeonButton} from '@/components/ui';
import {Upload} from 'lucide-react';

// 导入我们将要创建的子组件
import {SearchInterface} from './components/SearchInterface';
import {GuideCategories} from './components/GuideCategories';
import {FeaturedGuides} from './components/FeaturedGuides';
import {FAQSection} from './components/FAQSection';
import {CommunityContributions} from './components/CommunityContributions';

type SearchParams = {
    term?: string;
    category?: string;
    tags?: string[];
};

type CategoryId = 'all' | 'newbie' | 'building' | 'mods' | 'pvp' | 'advanced' | 'community';


export default function CodexPage() {
    const sections = {
        categories: {title: 'Guide Categories', component: GuideCategories},
        featured: {title: 'Featured Guides', component: FeaturedGuides},
        faq: {title: 'FAQ', component: FAQSection},
        community: {title: 'Community', component: CommunityContributions}
    };

    type SectionKey = keyof typeof sections;

    const [activeSection, setActiveSection] = useState<SectionKey>('categories');
    const [filters, setFilters] = useState<SearchParams>({
        term: '',
        category: 'all',
        tags: [],
    });

    // 使用 useCallback 避免不必要的函数重渲染
    const handleSearch = useCallback((newFilters: SearchParams) => {
        setFilters(prev => ({...prev, ...newFilters}));
        // 在这里可以添加基于筛选条件获取数据的逻辑
    }, []);

    const handleCategorySelect = (categoryId: string) => {
        if (['newbie', 'building', 'mods', 'pvp', 'advanced', 'community'].includes(categoryId)) {
            setFilters(prev => ({...prev, category: categoryId as CategoryId}));
            setActiveSection('featured');
        } else {
            console.warn('Unknown category:', categoryId);
        }
    };


    const renderContent = () => {
        if (activeSection === 'categories') {
            return <GuideCategories onCategorySelectAction={handleCategorySelect}/>;
        }

        const ActiveComponent = sections[activeSection].component;
        return <ActiveComponent filters={filters}/>;
    };


    return (
        <div className="min-h-screen bg-nexus-darker text-nexus-text">
            {/* 背景装饰 */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-nexus-accent/5 via-transparent to-nexus-primary/5"/>
            </div>

            <div className="relative z-10">
                <header className="sticky top-0 z-30 bg-nexus-dark/60 backdrop-blur-md border-b border-nexus-accent/20">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <HologramEffect color="var(--color-nexus-accent)">
                            <h1 className="text-2xl font-cyber text-nexus-accent">NEXUSK.CODEX</h1>
                        </HologramEffect>
                        <nav className="hidden md:flex items-center space-x-6">
                            {Object.entries(sections).map(([key, {title}]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveSection(key as SectionKey)}
                                    className={`font-matrix text-sm transition-colors relative group ${activeSection === key ? 'text-nexus-accent' : 'text-nexus-text-muted hover:text-nexus-accent'}`}
                                >
                                    {title}
                                    <div
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-nexus-accent transition-all duration-300 ${activeSection === key ? 'w-full' : 'w-0 group-hover:w-full'}`}/>
                                </button>
                            ))}
                        </nav>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-8">
                    <div className="space-y-8">
                        <SearchInterface onSearchChangeAction={handleSearch}/>
                        <div className="min-h-[600px]">
                            {renderContent()}
                        </div>
                    </div>
                </main>

                <footer className="bg-nexus-dark/50 backdrop-blur-md border-t border-nexus-accent/20 mt-16">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                        <p className="text-sm font-matrix text-nexus-text-muted">NexusK Knowledge Database • Community
                            Driven Content</p>
                        <div className="flex items-center space-x-4">
                            <NeonButton size="sm" variant="success"><Upload className="w-4 h-4 mr-2"/>Submit
                                Guide</NeonButton>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
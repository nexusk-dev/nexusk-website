'use client';

import React, {useState} from 'react';
import {CyberFrame, HologramEffect} from '@/components/cyberpunk';
import {CyberInput, NeonButton} from '@/components/ui';
import {Search} from 'lucide-react';

const categories = [
    {id: 'all', name: 'All', variant: 'primary' as const},
    {id: 'newbie', name: 'Newbie', variant: 'success' as const},
    {id: 'building', name: 'Building', variant: 'secondary' as const},
    {id: 'mods', name: 'Mods', variant: 'warning' as const},
];

type SearchParams = {
    term?: string;
    category?: string;
};

interface SearchInterfaceProps {
    onSearchChangeAction: (params: SearchParams) => void;
}

export const SearchInterface = ({onSearchChangeAction}: SearchInterfaceProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        onSearchChangeAction({term});
    };

    const handleCategory = (category: string) => {
        setSelectedCategory(category);
        onSearchChangeAction({category});
    };

    return (
        <CyberFrame color="var(--color-nexus-primary)" corners>
            <div className="p-6 space-y-4">
                <HologramEffect>
                    <h2 className="text-2xl font-cyber text-nexus-primary">KNOWLEDGE DATABASE</h2>
                </HologramEffect>
                <CyberInput
                    icon={Search}
                    placeholder="Search guides, tutorials, and tips..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <div className="flex flex-wrap gap-2">
                    {categories.map(({id, name, variant}) => (
                        <NeonButton
                            key={id}
                            size="sm"
                            variant={variant}
                            onClick={() => handleCategory(id)}
                            className={selectedCategory !== id ? 'opacity-50' : ''}
                        >
                            {name}
                        </NeonButton>
                    ))}
                </div>
            </div>
        </CyberFrame>
    );
};
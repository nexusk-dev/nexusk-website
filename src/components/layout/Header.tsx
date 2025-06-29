'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {GlitchText, HologramEffect} from '@/components/cyberpunk';
import {NeonButton} from '@/components/ui';
import {Terminal} from 'lucide-react';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {name: 'NEXUS', href: '/nexus'},
        {name: 'CODEX', href: '/codex'},
        {name: 'COMMUNITY', href: '/comm'},
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-nexus-dark/60 border-b border-nexus-primary/20' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="z-10">
                        <HologramEffect>
                            <GlitchText text="NEXUSK" className="text-2xl font-cyber text-nexus-primary"
                                        trigger="hover"/>
                        </HologramEffect>
                    </Link>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href}
                                  className="text-nexus-text-muted hover:text-nexus-primary transition-colors font-matrix relative group">
                                <span>{item.name}</span>
                                <div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexus-primary transition-all duration-300 group-hover:w-full"/>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-nexus-accent animate-pulse"/>
                            <span className="text-sm font-matrix text-nexus-accent">ONLINE</span>
                        </div>
                        <NeonButton size="sm" variant="primary">
                            <Terminal className="w-4 h-4 mr-2"/>
                            CONNECT
                        </NeonButton>
                    </div>
                </div>
            </div>
        </header>
    );
};
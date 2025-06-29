import React from 'react';
import Link from 'next/link';
import { HologramEffect } from '@/components/cyberpunk';

const quickLinks = ['Server Status', 'Player Guide', 'Modpack', 'Support'];
const legalLinks = ['Privacy Policy', 'Terms of Service'];

export const Footer = () => {
    return (
        <footer className="bg-nexus-dark border-t border-nexus-primary/20 py-12">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <HologramEffect>
                            <h3 className="text-2xl font-cyber text-nexus-primary">NEXUSK</h3>
                        </HologramEffect>
                        <p className="text-nexus-text-muted font-matrix text-sm">Connecting Digital Worlds</p>
                    </div>

                    <div>
                        <h4 className="font-cyber text-white mb-4">QUICK LINKS</h4>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link}><Link href="#" className="text-nexus-text-muted hover:text-nexus-primary transition-colors text-sm">{link}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-cyber text-white mb-4">COMMUNITY</h4>
                        <ul className="space-y-2">
                            {['Discord', 'QQ Group', 'GitHub'].map(link => (
                                <li key={link}><Link href="#" className="text-nexus-text-muted hover:text-nexus-primary transition-colors text-sm">{link}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-cyber text-white mb-4">LEGAL</h4>
                        <ul className="space-y-2">
                            {legalLinks.map(link => (
                                <li key={link}><Link href="#" className="text-nexus-text-muted hover:text-nexus-primary transition-colors text-sm">{link}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-nexus-primary/20 text-center">
                    <p className="text-nexus-text-muted font-matrix text-sm">© {new Date().getFullYear()} NexusK Server. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
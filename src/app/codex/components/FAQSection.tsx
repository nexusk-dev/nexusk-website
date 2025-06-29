'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui';
import { HologramEffect } from '@/components/cyberpunk';
import { ChevronDown, ThumbsUp } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: 'How do I join the NexusK server?',
        answer: 'To join NexusK, you need Minecraft Java Edition 1.20.4 with our custom modpack. Download the modpack from our website, install it, and connect to play.nexusk.net.',
    },
    {
        id: 2,
        question: 'What are the most useful server commands?',
        answer: 'Essential commands include /home, /sethome, /tpa (teleport to player), /back, and /help for a full list.',
    },
    {
        id: 3,
        question: 'My game crashes on connect. What should I do?',
        answer: 'Common fixes: 1) Allocate enough RAM (8GB recommended), 2) Check for mod conflicts, 3) Update Java. Contact support if issues persist.',
    }
];

export const FAQSection = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <div className="space-y-6">
            <div className="text-center">
                <HologramEffect color="var(--color-nexus-accent)">
                    <h2 className="text-3xl font-cyber text-nexus-accent">FREQUENTLY ASKED QUESTIONS</h2>
                </HologramEffect>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map(faq => (
                    <GlassCard key={faq.id} hover={false}>
                        <button className="w-full flex justify-between items-center text-left" onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}>
                            <h4 className="font-matrix font-bold text-lg text-white">{faq.question}</h4>
                            <ChevronDown className={`w-5 h-5 text-nexus-primary transition-transform ${expanded === faq.id ? 'rotate-180' : ''}`} />
                        </button>
                        {expanded === faq.id && (
                            <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                                <p className="text-nexus-text-muted leading-relaxed">{faq.answer}</p>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-matrix text-nexus-text-muted">Was this helpful?</span>
                                    <button className="text-nexus-accent hover:text-white"><ThumbsUp className="w-5 h-5"/></button>
                                </div>
                            </div>
                        )}
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};
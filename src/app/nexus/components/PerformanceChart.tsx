'use client';

import React, {useState} from 'react';
import {GlassCard, NeonButton} from '@/components/ui';
import {TrendingUp} from 'lucide-react';

const initialData = {
    '1h': Array.from({length: 6}, (_, i) => ({
        tps: 20 - Math.random(),
        players: 70 + Math.random() * 10,
        memory: 60 + i * 2
    })),
    '6h': Array.from({length: 6}, (_, i) => ({
        tps: 19 + Math.random(),
        players: 50 + Math.random() * 20,
        memory: 50 + i * 5
    })),
    '24h': Array.from({length: 6}, (_, i) => ({
        tps: 18 + Math.random() * 2,
        players: 40 + Math.random() * 30,
        memory: 40 + i * 8
    })),
    '7d': Array.from({length: 6}, (_, i) => ({
        tps: 17 + Math.random() * 3,
        players: 30 + Math.random() * 40,
        memory: 30 + i * 10
    })),
};

type ChartProps = {
    data: number[];
    colorClass: string;
    max: number;
};

export const PerformanceChart = () => {
    const [timeRange, setTimeRange] = useState<'1h' | '6h' | '24h' | '7d'>('1h');
    const chartData = initialData[timeRange];

    const Chart = ({data, colorClass, max}: ChartProps) => (
        <div className="h-24 bg-nexus-darker/50 rounded flex items-end justify-around p-2 gap-2">
            {data.map((value, index) => (
                <div key={index}
                     className={`w-full rounded-t transition-all duration-300 hover:opacity-80 ${colorClass}`}
                     style={{height: `${(value / max) * 100}%`}}/>
            ))}
        </div>
    );

    return (
        <GlassCard hover={false} className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <h3 className="text-xl font-cyber text-nexus-primary">PERFORMANCE METRICS</h3>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                    {Object.keys(initialData).map(range => (
                        <button key={range} onClick={() => setTimeRange(range as any)}
                                className={`px-3 py-1 text-xs font-matrix border rounded transition-colors ${timeRange === range ? 'border-nexus-primary text-nexus-primary bg-nexus-primary/10' : 'border-nexus-surface text-nexus-text-muted hover:border-nexus-primary'}`}>
                            {range}
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <p className="text-sm font-matrix text-nexus-accent mb-2">TPS (Ticks Per Second)</p>
                    <Chart data={chartData.map(p => p.tps)} colorClass="bg-nexus-accent" max={20}/>
                </div>
                <div>
                    <p className="text-sm font-matrix text-nexus-primary mb-2">Players Online</p>
                    <Chart data={chartData.map(p => p.players)} colorClass="bg-nexus-primary" max={100}/>
                </div>
                <div>
                    <p className="text-sm font-matrix text-nexus-secondary mb-2">Memory Usage (%)</p>
                    <Chart data={chartData.map(p => p.memory)} colorClass="bg-nexus-secondary" max={100}/>
                </div>
            </div>
            <div className="flex justify-center pt-4 border-t border-nexus-primary/20">
                <NeonButton>
                    <TrendingUp className="w-4 h-4 mr-2"/>View Detailed Analytics
                </NeonButton>
            </div>
        </GlassCard>
    );
};
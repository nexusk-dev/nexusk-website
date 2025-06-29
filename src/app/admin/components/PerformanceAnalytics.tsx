'use client';

import React, {useEffect, useState} from 'react';
import {GlassCard} from '@/components/ui';


const generateData = (length: number, min: number, max: number): number[] =>
    Array.from({length}, () => min + Math.random() * (max - min));

const chartConfig: Record<'24h' | '7d', {
    length: number;
    tps: [number, number];
    players: [number, number];
    memory: [number, number];
}> = {
    '24h': {length: 24, tps: [18, 20], players: [20, 80], memory: [50, 90]},
    '7d': {length: 7, tps: [15, 20], players: [10, 90], memory: [40, 95]},
};

const Chart = ({data, colorClass, max, loading}: {
    data: number[],
    colorClass: string,
    max: number,
    loading: boolean
}) => (
    <div className="h-40 bg-nexus-darker/50 rounded flex items-end justify-around p-2 gap-1 relative">
        {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-matrix text-nexus-text-muted animate-pulse">Loading data...</p>
            </div>
        ) : (
            data.map((value, index) => (
                <div
                    key={index}
                    className={`w-full rounded-t transition-all duration-300 hover:opacity-80 ${colorClass}`}
                    style={{height: `${(value / max) * 100}%`}}
                />
            ))
        )}
    </div>
);

export const PerformanceAnalytics = () => {
    const [timeRange, setTimeRange] = useState<'24h' | '7d'>('24h');
    // 1. 初始化 state 为 null，表示数据还未生成
    const [chartData, setChartData] = useState<{ tps: number[], players: number[], memory: number[] } | null>(null);

    // 2. 使用 useEffect 在组件挂载到客户端后生成随机数据
    useEffect(() => {
        const config = chartConfig[timeRange];
        const data = {
            tps: generateData(config.length, ...config.tps),
            players: generateData(config.length, ...config.players),
            memory: generateData(config.length, ...config.memory),
        };
        setChartData(data);
    }, [timeRange]); // 当 timeRange 改变时，重新生成数据

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-cyber text-nexus-primary">PERFORMANCE ANALYTICS</h3>
                <div className="flex space-x-2">
                    {Object.keys(chartConfig).map(range => (
                        <button key={range} onClick={() => setTimeRange(range as '24h' | '7d')}
                                className={`px-3 py-1 text-sm font-matrix border-2 rounded transition-colors ${timeRange === range ? 'border-nexus-primary text-nexus-primary bg-nexus-primary/10' : 'border-nexus-surface text-nexus-text-muted hover:border-nexus-primary'}`}>
                            {range}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 3. 在数据加载完成前，显示加载状态 */}
                <GlassCard glowColor="var(--color-nexus-accent)">
                    <p className="font-matrix text-nexus-accent mb-2">TPS</p>
                    <Chart data={chartData?.tps || []} colorClass="bg-nexus-accent" max={20} loading={!chartData}/>
                </GlassCard>
                <GlassCard glowColor="var(--color-nexus-primary)">
                    <p className="font-matrix text-nexus-primary mb-2">Players</p>
                    <Chart data={chartData?.players || []} colorClass="bg-nexus-primary" max={100}
                           loading={!chartData}/>
                </GlassCard>
                <GlassCard glowColor="var(--color-nexus-secondary)">
                    <p className="font-matrix text-nexus-secondary mb-2">Memory (%)</p>
                    <Chart data={chartData?.memory || []} colorClass="bg-nexus-secondary" max={100}
                           loading={!chartData}/>
                </GlassCard>
            </div>
        </div>
    );
};
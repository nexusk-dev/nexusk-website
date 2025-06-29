// src/app/admin/page.tsx
import {SystemMonitor} from './components/SystemMonitor';
import {AlertSystem} from './components/AlertSystem';
import {PerformanceAnalytics} from './components/PerformanceAnalytics';

// 这个页面现在是 /admin 的默认页，也就是我们的仪表盘
export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-cyber text-nexus-primary">Dashboard Overview</h2>
            <SystemMonitor/>
            <AlertSystem/>
            <PerformanceAnalytics/>
        </div>
    );
}
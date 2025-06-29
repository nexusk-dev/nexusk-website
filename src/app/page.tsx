// src/app/page.tsx - 测试所有样式
import ServerStatus from "@/components/ServerStatus";
export default function Home() {
  return (
      <div className="min-h-screen bg-nexus-darker flex items-center justify-center">
        <div className="text-center space-y-8 p-8">
          {/* Hero 区域 */}
          <section className="text-center mb-16">
            <h1 className="hero-title animate-neon-glow mb-6">
              NEXUSK
            </h1>
            <p className="text-xl text-nexus-muted font-matrix mb-8">
              未来科技连接点 · The Future Tech Nexus
            </p>
          </section>

          {/* 动态服务器状态 */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-cyber text-nexus-primary mb-6 text-center">
              SERVER STATUS
            </h2>
            <ServerStatus />
          </section>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button">
              CONNECT TO SERVER
            </button>
            <button className="glass-card border border-nexus-secondary/50 px-6 py-3 text-nexus-secondary hover:bg-nexus-secondary/10 transition-all font-cyber">
              DISCORD
            </button>
          </div>

          {/* 底部文字 */}
          <p className="text-nexus-muted text-sm font-matrix">
            服务器 IP: nexusk.fun | 版本: 1.20.4
          </p>
        </div>
      </div>
  )
}
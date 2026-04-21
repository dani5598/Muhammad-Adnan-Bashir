import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart2, Bell, CheckSquare, Download, FileText, Home, LogOut, MessageSquare, PieChart, Settings, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fake login form
  if (!isAuthenticated) {
    return (
      <div className="flex-1 w-full bg-brand-bg flex items-center justify-center py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)] overflow-hidden border border-brand-border"
        >
          <div className="bg-brand-primary p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-white tracking-tight">BITSOL<span className="text-brand-accent">.</span> Client Area</h2>
            <p className="text-white/70 mt-2 text-sm">Sign in to track your campaign metrics</p>
          </div>
          <div className="p-8">
            <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2 tracking-wide font-bold uppercase text-[11px]">Email Address</label>
                <input 
                  type="email" 
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded border border-brand-border focus:ring-1 focus:ring-brand-accent focus:border-brand-accent transition-all text-brand-text bg-brand-bg"
                  placeholder="client@company.com"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-brand-text tracking-wide font-bold uppercase text-[11px]">Password</label>
                  <a href="#" className="text-[11px] text-brand-accent font-bold hover:underline uppercase tracking-wide">Forgot?</a>
                </div>
                <input 
                  type="password" 
                  autoComplete="current-password"
                  className="w-full px-4 py-3 rounded border border-brand-border focus:ring-1 focus:ring-brand-accent focus:border-brand-accent transition-all text-brand-text bg-brand-bg"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded hover:opacity-90 transition-opacity uppercase tracking-[1px] text-[13px] shadow-sm"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="flex-1 w-full bg-brand-bg flex flex-col md:flex-row h-full absolute inset-0 z-50">
      
      {/* Sidebar relative within full height */}
      <aside className="w-full md:w-64 bg-brand-primary text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center">
              <span className="font-serif font-bold text-xl tracking-tight">BITSOL<span className="text-brand-accent">.</span></span>
          </Link>
        </div>
        <div className="p-4 flex-1">
          <nav className="space-y-1">
            {[
              { icon: Home, label: "Overview", active: true },
              { icon: BarChart2, label: "Campaigns" },
              { icon: User, label: "Lead Pipeline" },
              { icon: PieChart, label: "Analytics" },
              { icon: FileText, label: "Invoices & Reports" }
            ].map((item, i) => (
              <a 
                href="#" 
                key={i} 
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors font-bold tracking-wide uppercase text-[11px]",
                  item.active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-white/10">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-white/60 hover:bg-white/5 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </a>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-red-400 hover:bg-red-500/10 transition-colors mt-2"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full">
        <header className="bg-white border-b border-black/5 px-8 py-5 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-serif font-bold text-brand-primary">Welcome back, Nexus Real Estate</h1>
            <p className="text-[13px] text-brand-subtext mt-1">Here's a breakdown of your campaigns this month.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#718096] hover:text-brand-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-accent rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 bg-brand-bg flex items-center justify-center border border-brand-border">
              <span className="font-bold text-brand-primary text-sm">NR</span>
            </div>
          </div>
        </header>

        <div className="p-8">
          
          {/* Top KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Spend (Meta)", value: "$4,250", trend: "+12.5%", positive: true },
              { label: "Leads Generated", value: "342", trend: "+24.1%", positive: true },
              { label: "Cost Per Lead", value: "$12.42", trend: "-8.3%", positive: true },
              { label: "Est. Pipeline Value", value: "$4.1M", trend: "+10%", positive: true },
            ].map((stat, i) => (
              <div key={i} className="bg-brand-card p-4 border border-brand-border rounded">
                <p className="text-[12px] font-bold uppercase tracking-wide text-[#718096] mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-[28px] font-serif font-bold text-brand-primary lead-none">{stat.value}</h3>
                  <span className={cn(
                    "text-[12px] font-bold tracking-wide flex items-center gap-1",
                    stat.positive ? "text-emerald-500" : "text-red-500"
                  )}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Body Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart Area Fake */}
            <div className="col-span-1 lg:col-span-2 bg-white rounded shadow-[0_10px_20px_rgba(0,0,0,0.02)] border border-brand-border p-6 line-chart-area">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[14px] text-brand-primary">Lead Generation Performance</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-brand-bg border border-brand-border text-brand-subtext text-[11px] uppercase tracking-wide font-bold rounded">7 Days</button>
                  <button className="px-3 py-1 bg-brand-primary text-white text-[11px] uppercase tracking-wide font-bold rounded shadow-sm">30 Days</button>
                  <button className="px-3 py-1 bg-brand-bg border border-brand-border text-brand-subtext text-[11px] uppercase tracking-wide font-bold rounded">All Time</button>
                </div>
              </div>
              
              <div className="h-64 w-full flex items-end justify-between gap-2 overflow-hidden px-2 relative">
                {/* Fake bar chart */}
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="w-full bg-[#EBFFFF] relative group" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}>
                    <div className="absolute bottom-0 w-full bg-brand-primary transition-all group-hover:bg-[#4F566B]" style={{ height: `${Math.max(20, Math.random() * 80)}%` }}></div>
                  </div>
                ))}
                
                {/* Grid lines */}
                <div className="absolute inset-x-0 bottom-0 border-b border-black/5"></div>
                <div className="absolute inset-x-0 bottom-1/4 border-b border-black/5 border-dashed"></div>
                <div className="absolute inset-x-0 bottom-1/2 border-b border-black/5 border-dashed"></div>
                <div className="absolute inset-x-0 bottom-3/4 border-b border-black/5 border-dashed"></div>
              </div>
            </div>

            {/* Recent Leads */}
            <div className="col-span-1 bg-white rounded shadow-[0_10px_20px_rgba(0,0,0,0.02)] border border-brand-border p-6">
              <h3 className="font-bold text-[14px] text-brand-primary mb-6">Recent Leads</h3>
              <div className="space-y-4">
                {[
                  { name: "John Smith", email: "john@example.com", time: "10 mins ago", status: "Hot" },
                  { name: "Sarah Connor", email: "s.connor@test.com", time: "1 hour ago", status: "Warm" },
                  { name: "Tech Corp Inc.", email: "info@techcorp.com", time: "3 hours ago", status: "Hot" },
                  { name: "Mike Johnson", email: "mj@mail.com", time: "5 hours ago", status: "Cold" },
                  { name: "Global Estate", email: "hello@gestate.com", time: "1 day ago", status: "Warm" },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center justify-between pb-4 border-b border-brand-border last:border-0 last:pb-0">
                    <div>
                      <p className="text-[13px] font-bold text-brand-primary">{lead.name}</p>
                      <p className="text-[11px] text-[#718096]">{lead.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={cn(
                        "inline-block px-2 py-0.5 text-[9px] uppercase font-bold tracking-[1px] rounded-[2px] mb-1",
                        lead.status === "Hot" ? "bg-brand-primary text-white" :
                        lead.status === "Warm" ? "bg-[#EBFFFF] text-[#007D9E]" :
                        "bg-brand-bg text-[#718096]"
                      )}>{lead.status}</span>
                      <p className="text-[10px] text-[#718096]">{lead.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border border-brand-primary text-brand-primary text-[11px] uppercase tracking-wide font-bold hover:bg-brand-bg transition-colors rounded">
                View Export Options
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

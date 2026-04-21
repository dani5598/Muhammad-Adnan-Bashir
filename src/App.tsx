import React from 'react';
import { motion } from 'motion/react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Stub pages for Contact, Services, About, Portfolio
const Contact = () => (
  <div className="py-24 bg-white max-w-7xl mx-auto px-4 w-full">
    <div className="text-center mb-16">
      <h1 className="text-[52px] font-serif font-bold text-brand-primary mb-4 leading-tight">Contact Us</h1>
      <p className="text-[18px] text-brand-subtext">Let's discuss how we can scale your business.</p>
    </div>
    <div className="max-w-2xl mx-auto bg-brand-bg p-8 rounded border border-brand-border shadow-sm">
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-300" placeholder="John" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-300" placeholder="Doe" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full p-3 rounded-lg border border-gray-300" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input type="tel" className="w-full p-3 rounded-lg border border-gray-300" placeholder="+92 300 1234567" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message & Goals</label>
          <textarea rows={4} className="w-full p-3 rounded-lg border border-gray-300" placeholder="Tell us about your project..."></textarea>
        </div>
        <button className="w-full bg-brand-primary text-white font-semibold py-4 rounded hover:opacity-90 transition-opacity uppercase tracking-wider text-sm shadow-sm">
          Send Inquiry
        </button>
      </form>
    </div>
  </div>
);

const Services = () => (
    <div className="py-24 bg-brand-bg flex-1 w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-[52px] font-serif font-bold text-brand-primary mb-6 leading-tight">Our Services</h1>
        <p className="text-[18px] text-brand-subtext mb-16 max-w-3xl mx-auto">Comprehensive digital marketing solutions designed for scale, engineered for ROI.</p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-10 rounded shadow-[0_30px_60px_-12px_rgba(50,50,93,0.1),0_18px_36px_-18px_rgba(0,0,0,0.1)] border border-brand-border">
                <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">Facebook & Instagram (Meta) Ads</h3>
                <p className="text-brand-subtext mb-4">We build highly targeted Meta ad funnels that lower CPA and maximize conversions. Detailed tracking, creative testing, and scaling systems.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-brand-text font-medium">
                    <li>Dynamic Creative Optimization</li>
                    <li>Lookalike & Retargeting Audiences</li>
                    <li>Advanced Pixel & CAPI Implementation</li>
                </ul>
            </div>
            <div className="bg-white p-10 rounded shadow-[0_30px_60px_-12px_rgba(50,50,93,0.1),0_18px_36px_-18px_rgba(0,0,0,0.1)] border border-brand-border">
                <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">High-Ticket Lead Generation</h3>
                <p className="text-brand-subtext mb-4">Specialized funnels for B2B, real estate, and high-ticket service industries. We don't just get leads; we get qualified appointments.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-brand-text font-medium">
                    <li>Custom VSL Landing Pages</li>
                    <li>Instant Lead Routing</li>
                    <li>Multi-step Qualifying Forms</li>
                </ul>
            </div>
            <div className="bg-white p-10 rounded shadow-[0_30px_60px_-12px_rgba(50,50,93,0.1),0_18px_36px_-18px_rgba(0,0,0,0.1)] border border-brand-border">
                <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">Website Design & Dev</h3>
                <p className="text-brand-subtext mb-4">Fast-loading, SEO-structured, and beautiful websites strictly designed to funnel visitors into paying customers.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-brand-text font-medium">
                    <li>React & Modern Stacks</li>
                    <li>Conversion Rate Optimization (CRO)</li>
                    <li>Technical SEO Core Vitals</li>
                </ul>
            </div>
            <div className="bg-white p-10 rounded shadow-[0_30px_60px_-12px_rgba(50,50,93,0.1),0_18px_36px_-18px_rgba(0,0,0,0.1)] border border-brand-border">
                <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">WhatsApp AI Chatbots</h3>
                <p className="text-brand-subtext mb-4">Deploy intelligent AI systems on WhatsApp to qualify leads 24/7, answer queries, and book appointments automatically.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-brand-text font-medium">
                    <li>24/7 Response & Qualification</li>
                    <li>CRM Integration</li>
                    <li>Automated Follow-ups</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
);

const About = () => (
    <div className="py-24 bg-brand-bg flex-1 w-full text-center">
        <h1 className="text-[52px] font-serif font-bold text-brand-primary mb-6 leading-tight">About BITSOL</h1>
        <p className="text-[18px] text-brand-subtext max-w-3xl mx-auto">We're an elite agency based in Pakistan, focused relentlessly on generating actual pipeline value for our global clientele. No vanity metrics, just numbers that matter.</p>
    </div>
);

const Portfolio = () => (
    <div className="py-24 bg-white flex-1 w-full text-center">
        <h1 className="text-[52px] font-serif font-bold text-brand-primary mb-6 leading-tight">Our Portfolio</h1>
        <p className="text-lg text-brand-subtext max-w-3xl mx-auto mb-16">Case studies of brands we've scaled.</p>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 text-left">
             <div className="border border-brand-border rounded overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-8 bg-white relative z-10 border-t border-brand-border">
                    <h3 className="text-xl font-bold font-serif mb-2 text-brand-primary">Nexus Luxury Real Estate</h3>
                    <p className="text-brand-subtext mb-4">Achieved a 450% ROI on Meta Ads lead generation for high-ticket properties.</p>
                    <div className="flex gap-4">
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-brand-accent/10 px-2 py-1">Meta Ads</span>
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-brand-accent/10 px-2 py-1">Landing Page</span>
                    </div>
                </div>
             </div>
             <div className="border border-brand-border rounded overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-8 bg-white relative z-10 border-t border-brand-border">
                    <h3 className="text-xl font-bold font-serif mb-2 text-brand-primary">FinServe B2B</h3>
                    <p className="text-brand-subtext mb-4">Automated outreach pipeline generated $1.2M in pipeline value within 90 days.</p>
                    <div className="flex gap-4">
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-brand-accent/10 px-2 py-1">Automation</span>
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-brand-accent/10 px-2 py-1">LinkedIn</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
);


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

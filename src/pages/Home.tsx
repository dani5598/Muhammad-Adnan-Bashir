import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Bot, Globe, Megaphone, Target, Users, PlayCircle, Star, CheckCircle, MapPin, Phone, Mail, Building2, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Home() {
  return (
    <div className="flex-1 w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-bg text-brand-text pb-32 pt-24 lg:pt-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.05)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="col-span-12 lg:col-span-7"
            >
              <motion.div variants={fadeIn} className="inline-block text-[12px] font-bold tracking-[2px] text-brand-accent uppercase mb-4">
                Based in Islamabad, Serving the Globe
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-[52px] leading-[1.1] font-serif font-bold text-brand-primary mb-6">
                Pakistan's Results-Driven Digital Marketing Agency
              </motion.h1>
              <motion.p variants={fadeIn} className="text-[18px] leading-[1.6] text-brand-subtext mb-8 max-w-[500px]">
                We help high-growth brands scale with Meta Ads, AI-Powered Lead Generation, and Premium Web Development solutions that convert.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded font-semibold hover:opacity-90 transition-all">
                  Get Started
                </Link>
                <Link to="/services" className="border-2 border-brand-primary text-brand-primary px-8 py-4 rounded font-semibold hover:bg-brand-primary hover:text-white transition-all">
                  Free Consultation
                </Link>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-12 border-l-[3px] border-brand-accent pl-5 max-w-lg">
                <p className="font-serif italic text-brand-subtext text-[16px]">
                  "BITSOL delivered a 4.5x ROI on our last real estate campaign in just 30 days."
                </p>
                <p className="text-[13px] font-bold mt-2 text-brand-text uppercase uppercase">
                  — Saad Malik, CEO of Urban Deco
                </p>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block col-span-12 lg:col-span-5"
            >
              <div className="bg-white rounded-[12px] shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)] border border-[#E6EBF1] p-6 relative">
                <div className="flex justify-between border-b border-brand-bg pb-4 mb-5">
                  <div>
                    <div className="text-[14px] font-bold text-brand-text">Campaign Performance</div>
                    <div className="text-[11px] text-[#718096]">Real-time metrics for 'Lead Gen Q4'</div>
                  </div>
                  <div className="bg-[#EBFFFF] text-[#007D9E] px-2 py-1 rounded text-[10px] font-bold tracking-wider float-right items-center flex">
                    LIVE NOW
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-card p-4 rounded-lg border border-[#EDF2F7]">
                    <div className="text-[24px] font-bold text-brand-primary">1,284</div>
                    <div className="text-[12px] uppercase text-[#718096] mt-1 font-semibold">Qualified Leads</div>
                  </div>
                  <div className="bg-brand-card p-4 rounded-lg border border-[#EDF2F7]">
                    <div className="text-[24px] font-bold text-brand-primary">$2.14</div>
                    <div className="text-[12px] uppercase text-[#718096] mt-1 font-semibold">Cost per Lead</div>
                  </div>
                  <div className="bg-brand-card p-4 rounded-lg border border-[#EDF2F7]">
                    <div className="text-[24px] font-bold text-brand-primary">342%</div>
                    <div className="text-[12px] uppercase text-[#718096] mt-1 font-semibold">ROI Growth</div>
                  </div>
                  <div className="bg-brand-card p-4 rounded-lg border border-[#EDF2F7]">
                    <div className="text-[24px] font-bold text-brand-primary">98.2k</div>
                    <div className="text-[12px] uppercase text-[#718096] mt-1 font-semibold">Reach</div>
                  </div>
                </div>

                <div className="mt-6 bg-[#EEF2F7] h-24 rounded-md flex items-end p-2 gap-1 overflow-hidden">
                  {[40, 60, 85, 95, 75, 90, 60].map((h, i) => (
                    <div key={i} className={cn("flex-1 rounded-sm", i === 3 ? "bg-brand-accent" : "bg-brand-primary")} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-black text-white px-4 py-2 rounded-full font-bold text-[12px] tracking-wider z-20 shadow-lg">
                VERIFIED PARTNER
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-black/5 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by Fast-Growing Companies Worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale items-center">
            {/* Synthetic logos for visual representation */}
            <div className="font-serif font-bold text-xl text-brand-primary">NEXUS Real Estate</div>
            <div className="font-serif font-bold text-xl tracking-tight text-brand-primary">Apex<span className="italic">Tech</span></div>
            <div className="font-serif transform scale-110 text-brand-primary">Lumina Brands</div>
            <div className="font-sans font-bold text-xl text-brand-primary">STRATOSPHERE</div>
            <div className="font-serif italic text-2xl text-brand-primary">Vanguard</div>
          </div>
        </div>
      </section>

      {/* About Our Legacy (BITSOL MARKETING PVT LTD) */}
      <section className="py-24 bg-brand-bg border-t border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 skew-x-12 -translate-x-10 transform-gpu z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-[12px] font-bold text-brand-accent uppercase tracking-[2px] mb-3">About Us</motion.h2>
              <motion.h3 variants={fadeIn} className="text-[40px] font-serif font-bold text-brand-primary leading-tight mb-6">BITSOL MARKETING PVT LTD.</motion.h3>
              <motion.p variants={fadeIn} className="text-brand-subtext mb-6 text-[18px] leading-[1.6]">
                With a globally recognized footprint, BITSOL MARKETING PVT LTD has redefined the standard for digital growth. Everything from our client success metrics to our established corporate history is available online, built on a foundation of trust, transparency, and relentless execution.
              </motion.p>
              <motion.p variants={fadeIn} className="text-brand-subtext mb-8 text-[18px] leading-[1.6]">
                Our track record is public. Our strategies are proven. We combine the agility of a growth-hacking startup with the robust infrastructure of an enterprise agency.
              </motion.p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded border border-brand-border shadow-sm transform-gpu hover:-translate-y-2 transition-transform duration-300">
                  <Award className="w-8 h-8 text-brand-accent mb-4" />
                  <h4 className="text-[28px] font-bold text-brand-primary font-serif">500+</h4>
                  <p className="text-[12px] text-brand-subtext uppercase tracking-wide font-bold mt-1">Campaigns Scaled</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-white p-6 rounded border border-brand-border shadow-sm transform-gpu hover:-translate-y-2 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-brand-accent mb-4" />
                  <h4 className="text-[28px] font-bold text-brand-primary font-serif">$10M+</h4>
                  <p className="text-[12px] text-brand-subtext uppercase tracking-wide font-bold mt-1">Client Revenue</p>
                </motion.div>
              </div>
              
              <motion.div variants={fadeIn}>
                <Link to="/about" className="bg-brand-primary text-white px-8 py-4 rounded font-semibold hover:opacity-90 transition-all uppercase tracking-[1px] text-[13px] inline-flex items-center gap-2 shadow-sm">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div 
                 animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="relative transform-gpu"
                 style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="BITSOL Marketing Team" 
                  className="rounded shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-[#E6EBF1] relative z-10"
                />
                <div 
                  className="absolute -bottom-10 -left-10 bg-white p-8 rounded shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-brand-border"
                  style={{ transform: 'translateZ(60px)' }}
                >
                   <Building2 className="w-8 h-8 text-brand-primary mb-3" />
                   <p className="text-[11px] font-bold uppercase tracking-wider text-brand-subtext">Registered Entity</p>
                   <p className="text-[20px] font-bold text-brand-primary font-serif mt-1">PVT LTD</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-[40px] font-serif font-bold text-brand-primary mb-4 leading-tight">Execution That Drives Impact.</motion.h2>
            <motion.p variants={fadeIn} className="text-[18px] text-brand-subtext leading-[1.6]">
              We specialize in strategies that deliver measurable ROI. No fluff, just scalable systems for customer acquisition and retention.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Meta & Google Ads", desc: "Precision-targeted campaigns on Facebook, Instagram, and Google generating high-intent leads." },
              { icon: Users, title: "Lead Generation", desc: "End-to-end funnels designed to capture, nurture, and convert prospects for real estate and B2B." },
              { icon: Globe, title: "Web Development", desc: "High-converting, lightning-fast landing pages and corporate websites built to sell." },
              { icon: Bot, title: "AI WhatsApp Chatbots", desc: "Automate your customer service and sales pipeline with intelligent WhatsApp integrations." },
              { icon: Megaphone, title: "Social Media Management", desc: "Premium brand positioning through curated, professional, and engaging content." },
              { icon: BarChart3, title: "Automation Solutions", desc: "Streamline workflows with LinkedIn outreach, email sequences, and CRM integrations." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, rotateX: 2, rotateY: -2, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-brand-border hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 group transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-primary mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-primary mb-3 leading-tight">{service.title}</h3>
                <p className="text-brand-subtext text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-primary font-bold text-xs uppercase tracking-[1px] flex items-center gap-1 hover:text-brand-accent transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-bg border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Meeting" 
                className="rounded shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)] filter contrast-[1.1] grayscale-[0.2]"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-[12px] font-bold text-brand-accent uppercase tracking-[2px] mb-3">Why BITSOL Marketing?</motion.h2>
              <motion.h3 variants={fadeIn} className="text-[40px] font-serif font-bold text-brand-primary leading-tight mb-6">We Don't Just Offer Services. We Build Engines.</motion.h3>
              <motion.p variants={fadeIn} className="text-brand-subtext mb-8 text-[18px] leading-[1.6]">
                Unlike traditional agencies that focus purely on vanity metrics, we focus exclusively on revenue, cost per acquisition (CPA), and scalable ROI.
              </motion.p>
              
              <div className="space-y-4">
                {[
                  "Data-backed decisions over guesswork.",
                  "Exclusive Focus on High-Ticket & Enterprise B2B.",
                  "Dedicated in-house team based in Pakistan servicing global clients.",
                  "Transparent reporting via our Client Dashboard."
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-accent shrink-0" />
                    <p className="text-brand-text font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="mt-10">
                <Link to="/about" className="bg-brand-primary text-white px-8 py-4 rounded font-semibold hover:opacity-90 transition-all uppercase tracking-[1px] text-[13px] inline-block">
                  Discover Our Approach
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[40px] font-serif font-bold text-brand-primary mb-4 leading-tight">Client Success Stories</h2>
            <p className="text-[18px] text-brand-subtext">The results speak for themselves.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { quote: "BITSOL transformed our lead generation. We went from 10 leads a week to over 50 qualified real estate investors daily via Meta Ads.", author: "Ahmed R.", title: "CEO, Nexus Real Estate" },
              { quote: "Their WhatsApp chatbot automation reduced our customer response time to zero and increased conversions by 40% in just two months.", author: "Sarah M.", title: "Director, Lumina Brands" },
              { quote: "The website they built isn't just beautiful; it's a conversion machine. Professional team, exceptional deliverables.", author: "Omer F.", title: "Founder, ApexTech Solutions" }
            ].map((testimonial, i) => (
              <div key={i} className="border-l-[3px] border-brand-accent pl-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-orange-400 mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-[16px] italic font-serif text-brand-subtext leading-[1.6] mb-8">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-brand-text mb-1 uppercase tracking-wide">— {testimonial.author}</p>
                  <p className="text-[11px] text-[#718096] uppercase tracking-wide">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Contact */}
      <section className="py-24 bg-brand-bg border-t border-black/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] font-serif font-bold text-brand-primary mb-4 leading-tight"
            >
              Global Reach, Local Excellence.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[18px] text-brand-subtext"
            >
              Connect with our headquarters or reach out via our dedicated hotlines. We operate globally.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <motion.div 
               whileHover={{ y: -8, scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
               className="bg-white p-10 rounded border border-brand-border text-center group transform-gpu shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-[20px] font-serif font-bold text-brand-primary mb-2">Our Location</h3>
              <p className="text-[15px] text-brand-subtext mb-6">Islamabad, Pakistan<br/>Serving Global Clients</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1px] text-brand-accent hover:text-brand-primary transition-colors">
                Get Directions <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-brand-primary p-10 rounded shadow-[0_30px_60px_-15px_rgba(10,37,64,0.6)] text-center text-white transform scale-105 z-20"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-[20px] font-serif font-bold mb-2">Direct Hotline</h3>
              <p className="text-[28px] font-bold font-serif mb-8 text-brand-accent">+92 342 140 5876</p>
              <a href="tel:+923421405876" className="inline-block bg-brand-accent text-[#0A2540] px-8 py-4 rounded font-bold hover:bg-white transition-all uppercase tracking-[1px] text-[13px] w-full">
                Call Us Now
              </a>
            </motion.div>

            <motion.div 
               whileHover={{ y: -8, scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
               className="bg-white p-10 rounded border border-brand-border text-center group transform-gpu shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-[20px] font-serif font-bold text-brand-primary mb-2">Email Address</h3>
              <p className="text-[15px] text-brand-subtext mb-6">info@bitsolmarketing.com<br/>24/7 Support Available</p>
              <a href="mailto:info@bitsolmarketing.com" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1px] text-brand-accent hover:text-brand-primary transition-colors">
                 Send a Message <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-[52px] font-serif font-bold mb-6 leading-tight">Ready to Scale Your Business?</h2>
          <p className="text-[18px] text-white/70 mb-10 max-w-2xl mx-auto leading-[1.6]">
            Book a complimentary 30-minute strategy call. We'll map out a custom growth engine for your brand.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-brand-accent text-[#0A2540] px-10 py-5 rounded font-bold hover:bg-white transition-all uppercase tracking-[1px] text-[13px] shadow-[0_10px_20px_rgba(0,209,255,0.2)]">
              Schedule Your Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

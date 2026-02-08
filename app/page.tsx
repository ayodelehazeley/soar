import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";
import TankFarms from "@/components/TankFarms";
import Footer from "@/components/Footer";
import { ShieldCheck, Globe, Zap, BarChart3, Ship, Truck } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white selection:bg-energy-green selection:text-black">
      <Navbar />
      <Hero />

      {/* 01. Strategic Identity */}
      <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <span className="stat-label">01 // Identity & Purpose</span>
              <h2 className="text-5xl font-black text-coal uppercase italic leading-[0.9]">
                Building a New <br />
                <span className="text-energy-green">Energy Backbone.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                SOAR Sierra Leone Limited is shifting national infrastructure from a single-city focus to a distributed, resilient system anchored in the southern corridor. We connect deep-water access with inland storage to enable secure flows of refined fuels and gas.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <Globe className="text-energy-green" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Regional Gateway</span>
                  <p className="text-xs text-gray-500">Unlocking the ECOWAS coast for import and export.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Zap className="text-energy-green" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Clean Energy</span>
                  <p className="text-xs text-gray-500">Expanding LPG access for cleaner kitchens and health.</p>
                </div>
              </div>
            </div>

            {/* Strategic Nodes Visual */}
            <div className="bg-coal p-12 text-white border-b-8 border-energy-green shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={120} />
              </div>
              <h4 className="text-energy-green font-bold uppercase text-xs mb-8 tracking-[0.3em] relative z-10">Operational Footprint</h4>
              <ul className="space-y-6 relative z-10">
                {[
                  { name: 'Sulima Gateway', desc: 'Coastal Petroleum Terminal & Jetty' },
                  { name: 'Bo Inland Hub', desc: 'Regional Storage & Staging' },
                  { name: 'Port Loko Node', desc: 'Modular Tank Farm Distribution' },
                  { name: 'Kambia Distribution', desc: 'Cross-border Energy Logistics' }
                ].map((loc, i) => (
                  <li key={loc.name} className="group cursor-default">
                    <div className="flex justify-between items-end border-b border-gray-800 pb-2 group-hover:border-energy-green transition-colors">
                      <span className="font-black italic uppercase tracking-tighter text-xl">{loc.name}</span>
                      <span className="text-energy-green text-[10px] font-mono mb-1">NODE_0{i+1}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 uppercase mt-1 tracking-widest">{loc.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Core Business Divisions */}
      <Divisions />

      {/* 03. Inland Storage Network */}
      <TankFarms />

      {/* 04. Infrastructure Specs */}
      <section id="infrastructure" className="py-24 bg-coal text-white relative">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="stat-label">04 // Engineering</span>
            <h2 className="text-5xl font-black italic uppercase leading-none">
              Built for <br /><span className="text-energy-green">Performance.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-800 bg-white/5">
              <div className="mb-6 w-10 h-10 bg-energy-green/10 flex items-center justify-center">
                <Ship className="text-energy-green" size={20} />
              </div>
              <h4 className="text-energy-green font-bold uppercase mb-4 tracking-widest text-xs font-mono italic">Marine Facility</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Sulima jetty centers on a 100m berth for 5,000-DWT vessels. Adjacent 3-hectare yard for regional feeder traffic and project cargo.
              </p>
            </div>
            
            <div className="p-8 border border-gray-800 bg-white/5">
              <div className="mb-6 w-10 h-10 bg-energy-green/10 flex items-center justify-center">
                <Truck className="text-energy-green" size={20} />
              </div>
              <h4 className="text-energy-green font-bold uppercase mb-4 tracking-widest text-xs font-mono italic">Distribution Logistics</h4>
              <ul className="text-gray-400 space-y-3 text-sm font-light">
                <li>• ISO-Spec Tanker Fleet</li>
                <li>• Digital Route Optimization</li>
                <li>• Real-time Dispatching</li>
                <li>• Automated Stock Reconciliation</li>
              </ul>
            </div>

            <div className="p-8 border border-gray-800 bg-white/5">
              <div className="mb-6 w-10 h-10 bg-energy-green/10 flex items-center justify-center">
                <BarChart3 className="text-energy-green" size={20} />
              </div>
              <h4 className="text-energy-green font-bold uppercase mb-4 tracking-widest text-xs font-mono italic">Digital Dispatch</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Coordinated by digital systems for stock reconciliation and compliance reporting, ensuring clear visibility on product movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Market & Customers (Regional Impact) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-slate-100 p-8 flex flex-col justify-end border-b-4 border-energy-green">
                   <span className="text-3xl font-black italic">SL</span>
                   <span className="text-[10px] font-bold uppercase text-gray-500">Sierra Leone</span>
                </div>
                <div className="aspect-square bg-coal p-8 flex flex-col justify-end border-b-4 border-energy-green">
                   <span className="text-3xl font-black italic text-white">LIB</span>
                   <span className="text-[10px] font-bold uppercase text-energy-green">Liberia</span>
                </div>
                <div className="aspect-square bg-coal p-8 flex flex-col justify-end border-b-4 border-energy-green">
                   <span className="text-3xl font-black italic text-white">GUI</span>
                   <span className="text-[10px] font-bold uppercase text-energy-green">Guinea</span>
                </div>
                <div className="aspect-square bg-slate-100 p-8 flex flex-col justify-end border-b-4 border-energy-green">
                   <span className="text-3xl font-black italic">ECO</span>
                   <span className="text-[10px] font-bold uppercase text-gray-500">ECOWAS Corridor</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="stat-label">05 // Market Scope</span>
              <h2 className="text-4xl font-black text-coal uppercase italic">A Southern Gateway <br /> for Industrial Growth</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                The Sulima location places our terminal nearer to emerging resource and agro-industrial zones. We serve national fuel marketers, industrial mines, and forestry companies across the tri-border region.
              </p>
              <ul className="space-y-3 text-sm font-bold uppercase italic tracking-tighter">
                <li className="flex items-center gap-2 text-coal"><ArrowRight size={14} className="text-energy-green" /> Mineral Producers</li>
                <li className="flex items-center gap-2 text-coal"><ArrowRight size={14} className="text-energy-green" /> Agro-processing Complexes</li>
                <li className="flex items-center gap-2 text-coal"><ArrowRight size={14} className="text-energy-green" /> Cross-border Logisticians</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Safety & Community */}
      <section id="safety" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-coal flex items-center justify-center rounded-full shadow-lg shadow-energy-green/20">
              <ShieldCheck size={32} className="text-energy-green" />
            </div>
          </div>
          <span className="stat-label">HSE Commitment</span>
          <h2 className="text-4xl font-black text-coal uppercase italic mb-8">Safety is the First Metric.</h2>
          <p className="text-gray-500 mb-12 text-lg font-light leading-relaxed">
            From spill prevention systems to transparent community engagement, we prioritize stewardship. Our operations comply with international standards for tank design, handling, and vehicle operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-energy">Download Safety Charter</button>
            <button className="px-8 py-4 border border-slate-300 text-coal font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">
              Community Outreach
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Minimal Arrow component for the list
function ArrowRight({ className, size }: { className?: string; size?: number }) {
  return (
    <svg 
      className={className} 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
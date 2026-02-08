import { ArrowRight, Drill, Ship, Workflow } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-coal flex items-center pt-20 overflow-hidden">
      {/* Background Layer: Large ghosted text for industrial feel */}
      <div className="absolute top-20 left-0 text-[20vw] font-black text-white/[0.02] select-none leading-none tracking-tighter">
        ENERGY_FLOW
      </div>
      
      {/* Background Accent: The "Jetty Line" */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[70%] bg-energy-green/5 -skew-x-12 translate-x-20 border-l border-energy-green/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: The Statement */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-energy-green text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Workflow size={14} /> Operational Backbone
            </div>
            
            <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-8 italic">
              FUELING <br />
              <span className="text-energy-green">NATIONS.</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              Developing Sierra Leone’s most strategic coastal gateway in Sulima. 
              Integrating medium-vessel jetties with nationwide modular storage.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-energy-green text-black px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white transition-all flex items-center gap-3">
                Sulima Port Specs <ArrowRight size={18} />
              </button>
              <button className="px-10 py-5 border-2 border-white/10 text-white font-black uppercase text-xs tracking-widest hover:bg-energy-green hover:text-black hover:border-energy-green transition-all">
                The Network
              </button>
            </div>
          </div>

          {/* Right Side: The "Technical Readout" Dashboard */}
          <div className="relative">
            <div className="relative z-10 bg-white/[0.03] backdrop-blur-md border border-white/10 p-1">
              <div className="border border-white/5 p-8">
                <div className="grid grid-cols-2 gap-8">
                  {/* Stat 1 */}
                  <div className="border-l-2 border-energy-green pl-4">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest block mb-1">Port Capacity</span>
                    <div className="text-3xl font-black text-white">5,000 <span className="text-sm font-mono text-energy-green">DWT</span></div>
                  </div>
                  {/* Stat 2 */}
                  <div className="border-l-2 border-energy-green pl-4">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest block mb-1">Jetty Length</span>
                    <div className="text-3xl font-black text-white">100 <span className="text-sm font-mono text-energy-green">METRES</span></div>
                  </div>
                  {/* Stat 3 */}
                  <div className="border-l-2 border-energy-green pl-4">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest block mb-1">Inland Nodes</span>
                    <div className="text-3xl font-black text-white">04 <span className="text-sm font-mono text-energy-green">HUBS</span></div>
                  </div>
                  {/* Stat 4 */}
                  <div className="border-l-2 border-energy-green pl-4">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest block mb-1">Storage Yard</span>
                    <div className="text-3xl font-black text-white">03 <span className="text-sm font-mono text-energy-green">HECTARES</span></div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4 text-gray-500">
                    <Ship className="text-energy-green" />
                    <div className="text-[9px] font-mono leading-tight tracking-wider uppercase">
                      Vessel Berthing Status: <span className="text-white">Planning_Phase // Sulima_Southern_Gateway</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Decoration: Energy pulses */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-energy-green/20 blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-energy-green/10 blur-[100px]"></div>
          </div>

        </div>
      </div>
      
      {/* Bottom Ticker: Scored from your market copy */}
      <div className="absolute bottom-0 w-full bg-energy-green/10 border-t border-white/5 py-4">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex gap-20 whitespace-nowrap animate-marquee font-mono text-[9px] text-energy-green/60 uppercase tracking-[0.3em]">
            <span>Sulima Petroleum Terminal</span>
            <span>//</span>
            <span>LNG & CNG Regasification</span>
            <span>//</span>
            <span>LPG Bulk Storage</span>
            <span>//</span>
            <span>ECOWAS Trade Corridors</span>
            <span>//</span>
            <span>Bo District Hub</span>
            <span>//</span>
            <span>Modular Tank Farms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
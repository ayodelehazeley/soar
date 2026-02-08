import { MapPin, Database, Activity, ArrowUpRight } from "lucide-react";

const nodes = [
  { 
    id: "HUB_BO", 
    location: "Bo District", 
    role: "Regional Staging", 
    specs: ["Dual Refined-Fuel Tanks", "LPG Spherical Storage", "Digital Inventory Control"] 
  },
  { 
    id: "HUB_PL", 
    location: "Port Loko", 
    role: "Northern Node", 
    specs: ["Modular Expansion Site", "Heavy Fleet Refilling", "Strategic Reserve Unit"] 
  },
  { 
    id: "HUB_KA", 
    location: "Kambia", 
    role: "Cross-Border Logistics", 
    specs: ["Export/Import Buffer", "CNG Compression Station", "High-Volume Metering"] 
  },
];

export default function TankFarms() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Graphic: Connection Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,#00FF41_40px,#00FF41_41px)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="stat-label">Network Distribution</span>
          <h2 className="text-5xl font-black text-coal uppercase italic tracking-tighter">
            INLAND STORAGE <br /><span className="text-energy-green">NODES.</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl font-light">
            Storage is the heart of dependable supply. SOAR is establishing modular tank farms 
            that scale as demand grows, placing safety-compliant storage closer to end-use corridors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {nodes.map((node) => (
            <div key={node.id} className="bg-white p-10 group hover:bg-coal transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-energy-green/10 flex items-center justify-center text-energy-green group-hover:bg-energy-green group-hover:text-black transition-colors">
                  <MapPin size={24} />
                </div>
                <span className="font-mono text-[10px] text-gray-400 group-hover:text-energy-green transition-colors">
                  {node.id} // SECURE
                </span>
              </div>

              <h3 className="text-2xl font-black text-coal uppercase italic group-hover:text-white mb-2">
                {node.location}
              </h3>
              <p className="text-energy-green font-mono text-[10px] uppercase tracking-widest mb-8 font-bold">
                {node.role}
              </p>

              <div className="space-y-4 mb-12">
                {node.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Activity size={14} className="text-gray-300 group-hover:text-energy-green" />
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 font-light">{spec}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-coal group-hover:text-energy-green transition-colors">
                Terminal Specs <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Technical Data Bar */}
        <div className="mt-20 p-8 border-2 border-coal flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Database className="text-energy-green" size={40} />
            <div>
              <h4 className="font-black uppercase text-sm leading-none">Modular Scaling System</h4>
              <p className="text-[10px] text-gray-500 uppercase mt-1">Expansion-ready infrastructure designed for regional ECOWAS growth.</p>
            </div>
          </div>
          <div className="h-px w-full md:w-20 bg-gray-200"></div>
          <div className="text-center md:text-right italic font-black text-xl uppercase italic">
            Safer. More Resilient. <span className="text-energy-green">Better Matched to Demand.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
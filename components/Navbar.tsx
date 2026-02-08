import { Menu, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/95 border-b-2 border-coal">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-energy-green flex items-center justify-center">
            <Zap size={24} fill="black" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-coal font-black text-xl tracking-tighter uppercase">SOAR</span>
            <span className="text-[8px] font-bold text-gray-500 tracking-[0.2em] uppercase">Southern Oil & Resources</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest text-coal">
          <a href="#divisions" className="hover:text-energy-green">Divisions</a>
          <a href="#infrastructure" className="hover:text-energy-green">Infrastructure</a>
          <a href="#market" className="hover:text-energy-green">Market</a>
          <a href="#safety" className="hover:text-energy-green">Safety</a>
        </div>

        <button className="bg-coal text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-energy-green hover:text-black transition-colors">
          Partner Portal
        </button>
      </div>
    </nav>
  );
}
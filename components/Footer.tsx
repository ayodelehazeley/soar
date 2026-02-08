import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-coal text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="col-span-2">
            <div className="mb-6">
              {/* Using your uploaded SOAR logo */}
              <Image 
                src="/soar-logo.png" 
                alt="SOAR Logo" 
                width={180} 
                height={60} 
                className="brightness-0 invert" // Ensures logo is white on dark background
              />
            </div>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
              Southern Oil & Alternative Resources is building the energy 
              and logistics backbone for Sierra Leone and the ECOWAS region.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-gray-400">Headquarters</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Sulima / Freetown<br />
              Sierra Leone<br />
              <span className="text-energy-green">info@soar-sl.com</span>
            </p>
          </div>

          {/* Real-time Status Indicators */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-gray-400">Operations</h4>
            <ul className="text-sm text-gray-500 space-y-3 font-light">
              <li className="flex items-center gap-2">
                Terminal Status: <span className="text-energy-green font-mono text-[10px] uppercase tracking-tighter">Development</span>
              </li>
              <li className="flex items-center gap-2">
                ISO Compliance: <span className="text-energy-green font-mono text-[10px] uppercase tracking-tighter">Certified</span>
              </li>
              <li className="flex items-center gap-2">
                Fleet Status: <span className="text-energy-green font-mono text-[10px] uppercase tracking-tighter">Active</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Resolved TypeScript Error */}
        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-mono text-gray-600">
          <p className="uppercase">
            © 2026 SOAR Sierra Leone Limited // Strategic Energy Infrastructure
          </p>
          <div className="flex gap-8 font-bold">
            <a href="#" className="hover:text-energy-green transition-colors">SAFETY</a>
            <a href="#" className="hover:text-energy-green transition-colors">COMPLIANCE</a>
            <a href="#" className="hover:text-energy-green transition-colors">CAREERS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
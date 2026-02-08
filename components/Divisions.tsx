import { Anchor, Database, Wind, Truck } from "lucide-react";

const divisions = [
  { title: "Sulima Terminal & Port", icon: Anchor, desc: "Private jetty for 5,000 DWT vessels and a 3-hectare regional container yard." },
  { title: "Modular Tank Farms", icon: Database, desc: "Staged distribution nodes in Bo, Port Loko, and Kambia for inland fuel security." },
  { title: "LNG & CNG Logistics", icon: Wind, desc: "First-mover gas logistics providing lower-emission alternatives for industrial power." },
  { title: "LPG Ecosystem", icon: Truck, desc: "Nationwide cylinder-filling and branded distribution for clean household cooking." },
];

export default function Divisions() {
  return (
    <section id="divisions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black text-coal uppercase tracking-tighter italic">Core Divisions<span className="text-energy-green">.</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((item, i) => (
            <div key={i} className="industrial-card group hover:bg-coal transition-all duration-500">
              <item.icon size={32} className="text-energy-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-coal group-hover:text-white mb-4 uppercase">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
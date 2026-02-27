import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import farm from "../assets/farm.JPG"; // Placeholder image for brand portfolio items
import hospi from "../assets/hospi.JPG";
import third from "../assets/third.JPG";

const brands = [
  {
    name: "TOPCARE",
    type: "Pediatric Healthcare",
    strategy: "Focusing on 'Empathetic Professionalism'—balancing clinical excellence with a warm, approachable atmosphere to reduce parent anxiety.",
    visuals: "Soft rounded geometry, a calming pastel palette with safety-blue accents, and playful custom iconography.",
    color: "bg-[#4A90E2]",
    vibe: "Compassionate",
    image: hospi // Add your image path here
  },
  {
    name: "GOLDEN HARVEST",
    type: "Organic Agriculture",
    strategy: "Emphasizing 'Farm-to-Table Transparency'—connecting urban consumers to heritage farming through authentic storytelling.",
    visuals: "Deep forest greens, sun-drenched amber tones, and raw, high-contrast photography of soil and produce.",
    color: "bg-[#DAA520]",
    vibe: "Bountiful",
    image: farm // Add your image path here
  },
  {
    name: "DOXA ART",
    type: "Personal Creative Brand",
    strategy: "Defining the 'Artist as Architect'—showcasing the structural logic and philosophical depth behind abstract creative works.",
    visuals: "Monochromatic high-fashion aesthetics, stark brutalist layouts, and experimental kinetic typography.",
    color: "bg-[#1A1A1A]",
    vibe: "Avant-Garde",
    image: third // Add your image path here
  }
];

const pillars = [
  { id: "01", label: "DISCOVERY", title: "The Core Identity", text: "We strip away the noise to find the 'Spot'—the unique value your business provides." },
  { id: "02", label: "STRATEGY", title: "Visual Language", text: "Color theory and typography are psychological tools used to build trust and authority." },
  { id: "03", label: "EXECUTION", title: "Market Presence", text: "We ensure your brand feels the same at every touchpoint, from a favicon to a billboard." }
];

export const BrandPage = () => {
  return (
    <div className="bg-[#05070A] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            Let's Brand <br /> your <span className="italic font-light text-blue-500/80 underline decoration-1 underline-offset-8">spot.</span> 😉
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We don't just make logos; we build digital legacies. From core strategy 
            to visual systems that live and breathe.
          </p>
        </motion.div>
      </section>

      {/* 2. BRAND PHILOSOPHY GRID */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#080A0F]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group space-y-4"
              >
                <div className="text-blue-500 font-mono text-xs tracking-[0.3em] group-hover:translate-x-2 transition-transform duration-300">
                  {pillar.id} / {pillar.label}
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND PORTFOLIO */}
      <section className="px-6 py-40 max-w-7xl mx-auto">
        <div className="space-y-48">
          {brands.map((brand, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}
            >
              {/* Visual Preview - Now with Image Support */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-3/5 aspect-[16/10] relative group overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/10 shadow-2xl"
              >
                {/* 1. The Image Background */}
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                />

                {/* 2. The Color Overlay (Maintains your original hover effect) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${brand.color}`} />
                
                {/* 3. The Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                   <h3 className="text-5xl md:text-7xl font-black tracking-[0.2em] opacity-40 group-hover:opacity-100 group-hover:tracking-[0.3em] transition-all duration-700 pointer-events-none">
                    {brand.name}
                   </h3>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20 rounded-tr-xl z-10" />
              </motion.div>

              {/* Text Content */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="space-y-2">
                  <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">{brand.type}</span>
                  <h4 className="text-4xl font-bold tracking-tight">{brand.vibe} Identity</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <p className="text-white text-sm font-semibold mb-2 italic">The Strategy</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{brand.strategy}</p>
                  </div>
                  <div className="px-6">
                    <p className="text-white text-sm font-semibold mb-2 italic">Visual Direction</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{brand.visuals}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FINAL FOOTER-STYLE CTA */}
      <section className="py-40 text-center border-t border-white/5">
        <h2 className="text-3xl font-bold mb-8">Ready to define your visual legacy?</h2>
        <Link to="/contact" className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
          Start Your Project
        </Link>
      </section>

      {/* 5. THE TECH STACK STRIP */}
      <section className="py-20 border-t border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-sm font-mono tracking-widest">
            © {new Date().getFullYear()} spotHub/&gt;. All rights reserved.
        </div>
      </section>
    </div>
  );
};
import { motion } from 'framer-motion';
import hos from "../assets/hos.JPG"; // Placeholder image for brand portfolio items
import myport from "../assets/myport.JPG";
import farmty from "../assets/farmty.JPG";
import limits from "../assets/limits.JPG";

const portfolioItems = [
  { title: "Health UI", category: "Web Design", size: "col-span-2 row-span-2", img: hos },
  { title: "Ethereal Logos", category: "Branding", size: "col-span-1 row-span-1", img: limits },
  { title: "Glassmorphic Apps", category: "Mobile View", size: "col-span-1 row-span-2", img: myport },
  { title: "Green Art", category: "Graphics", size: "col-span-1 row-span-1", img: farmty },
];

const trends = ["Glassmorphism", "Bentogrid", "Micro-interactions", "Grainy Gradients", "Dark Mode First"];

export const DesignPage = () => {
  return (
    <div className="bg-[#05070A] text-white min-h-screen">
      
      {/* 1. THE TREND TICKER */}
      <div className="py-4 border-b border-white/5 overflow-hidden flex whitespace-nowrap bg-blue-600/5">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center uppercase tracking-[0.2em] text-[10px] font-bold text-blue-400"
        >
          {Array(10).fill(trends).flat().map((trend, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"/> {trend}
            </span>
          ))}
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-6xl font-black tracking-tight mb-4">The Design Studio</h1>
            <p className="text-gray-400 max-w-md text-lg">
              We don't just follow trends—we spot them. From visual identity to immersive web experiences.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            You in good hands
          </button>
        </div>

        {/* 2. THE PORTFOLIO BENTO GRID - Updated with Image Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`${item.size} group relative overflow-hidden rounded-[2rem] bg-[#0F1219] border border-white/10`}
            >
              {/* Overlay Content (Title & Category) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end pointer-events-none">
                <span className="text-blue-400 text-sm font-mono mb-2 uppercase tracking-widest">{item.category}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>

              {/* The Image Tag */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0"
              />

              {/* Fallback Gradient (keeps the look if image is missing) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 z-10"/>
            </motion.div>
          ))}
        </div>

        {/* 3. INTERACTIVE SECTION */}
        <section className="mt-32">
          <div className="p-1 border border-white/10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent">
             <div className="bg-[#05070A] rounded-[calc(1.5rem-1px)] p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Interactive Samples</h2>
                <p className="text-gray-500 mb-8">Hover over the elements below to see our motion design philosophy in action.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Magnetic', 'Fluid', 'Elastic', 'Minimal'].map((style) => (
                    <motion.div
                      key={style}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className="px-6 py-3 border border-white/20 rounded-full cursor-pointer hover:bg-white hover:text-black transition-colors"
                    >
                      {style}
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
        </section>
      </main>

      {/* 4. THE TECH STACK STRIP */}
      <section className="py-20 border-t border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-sm font-mono tracking-widest">
            © {new Date().getFullYear()} spotHub/&gt;. All rights reserved.
        </div>
      </section>
    </div>
  );
};
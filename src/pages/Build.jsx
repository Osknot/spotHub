/*export const BuildPage = ()=>{
    return(
        <div>
            <h2>Your very self comes out when we hub your spot...</h2>
            <section>
                It shows everythin being put together, all things integrated into each other to actually become functional and work well for a business... example a business having all their design assets, website, and automation all working together seamlessly. this can be a really cool section to show the "magic" of how we bring everything together. we can have some interactive elements here, like a before-and-after slider to show the transformation, or maybe a dynamic flowchart that illustrates how all the pieces connect. and of course, this will be animated and visually engaging to really drive home the value of our services in creating a cohesive digital presence for our clients. a business that has its grahics, web design, and automation all working together seamlessly...this is where to show that.
                You can use dummy data for that, then I will replace it with real ones
                actual development...databases, CRMS, email systems, and all that good stuff
            </section>
        </div>
    )
}*/


import { motion } from 'framer-motion';

const integrations = [
  { tech: "Frontend", tools: "Brand Experience", role: "A high-speed, pixel-perfect interface that turns visitors into believers." },
  { tech: "Database", tools: "The Brain Trust", role: "A secure, organized vault for your business intelligence and user profiles." },
  { tech: "CRM", tools: "The Sales Engine", role: "A hands-free system that captures, scores, and nurtures every single lead." },
  { tech: "Email", tools: "The Growth Loop", role: "Automated touchpoints that keep your brand top-of-mind without you lifting a finger." },
  { tech: "AI/Bots", tools: "The Digital Workforce", role: "Intelligent systems that handle customer support, data analysis, and even content creation." },
];

export const BuildPage = () => {
  return (
    <div className="bg-[#05070A] text-white min-h-screen font-sans">
      
      {/* 1. THE VISION HERO */}
      <section className="pt-32 pb-24 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            Your very self comes out when we <span className="text-blue-500">hub</span> your spot.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            This is where the magic becomes functional. We integrate your designs, 
            assets, and automations into a single, cohesive engine.
          </p>
        </motion.div>
      </section>

      {/* 2. THE INTEGRATION HUB (Static & Clean) */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Subtle grid background for a "Technical" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((item, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-[#0F1219] border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                </div>
                <h3 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2">{item.tech}</h3>
                <h4 className="text-xl font-bold mb-4">{item.tools}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE "BEFORE & AFTER" SYSTEM VIEW */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="bg-white/5 rounded-[3rem] p-8 md:p-16 border border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">The Transformation</h3>
              <p className="text-gray-400 mb-8">
                We take fragmented processes—messy spreadsheets, disconnected designs, 
                and manual emails—and turn them into a unified digital ecosystem.
              </p>
              
              <ul className="space-y-4">
                {['Unified Branding', 'Automated Lead Capture', 'Real-time Analytics', 'Scalable Infrastructure'].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <span className="text-green-500">✓</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Simple Visual Representing Integration */}
            <div className="relative aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-spin-slow" />
                <div className="w-40 h-40 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl font-bold shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                  HUB
                </div>
                {/* Small Orbiting Nodes */}
                {[0, 90, 180, 270].map((deg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "120px" }}
                    className="absolute w-4 h-4 bg-white/20 backdrop-blur-md border border-white/20 rounded-full"
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TECH STACK STRIP */}
      <section className="py-20 border-t border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-sm font-mono tracking-widest">
            © {new Date().getFullYear()} spotHub/&gt;. All rights reserved.
        </div>
      </section>
    </div>
  );
};
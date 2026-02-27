import { motion } from 'framer-motion';
import n8n from '../assets/n8nn.JPG'; // Placeholder image for n8n workflow visualization
const automationServices = [
  { 
    title: "Intelligent Chatbots", 
    desc: "24/7 Customer support that actually understands context.",
    icon: "💬",
    stats: "Reduces manual tickets by 70%"
  },
  { 
    title: "Workflow Automation", 
    desc: "Connecting your apps so you never copy-paste again.",
    icon: "⚡",
    stats: "Saves 15+ hours/week"
  },
  { 
    title: "Smart Email Routing", 
    desc: "AI that categorizes and drafts responses automatically.",
    icon: "📧",
    stats: "3x faster response times"
  }
];

export const AutomatePage = () => {
  return (
    <div className="bg-[#05070A] text-white min-h-screen font-sans overflow-hidden">
      
      {/* HERO: The "Brain" of the Business */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Your spot has to be <span className="text-blue-500">smarter.</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Stop doing $10/hr tasks. We build AI-driven systems that scale your 
            operations while you sleep.
          </p>
        </motion.div>
        
        {/* Visual Decoration: Animated Grid/Nodes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
      </section>

      {/* INTERACTIVE SHOWCASE: The "Demo" Node */}
      <section className="max-w-5xl mx-auto px-6 mb-40">
        <div className="bg-[#0F1219] border border-blue-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="relative z-10">
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest">Live Capability Demo</span>
            <h3 className="text-3xl font-bold mt-4 mb-6">Visualizing the Workflow</h3>
            
            {/* Minimalist Automation Visualizer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">
                <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500 flex items-center justify-center text-2xl">User</div>
                <motion.div 
                    animate={{ x: [0, 50, 0] }} 
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-transparent hidden md:block"
                />
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center animate-spin-slow">
                    <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center font-bold">AI CORE</div>
                </div>
                <motion.div 
                    animate={{ x: [0, -50, 0] }} 
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="h-[2px] w-20 bg-gradient-to-l from-blue-500 to-transparent hidden md:block"
                />
                <div className="w-20 h-20 rounded-2xl bg-green-600/20 border border-green-500 flex items-center justify-center text-2xl">Result</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-40 grid grid-cols-1 md:grid-cols-3 gap-8">
        {automationServices.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-[#0F1219] border border-white/5 hover:border-blue-500/50 transition-all"
          >
            <div className="text-4xl mb-6">{item.icon}</div>
            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
            <p className="text-gray-400 mb-6">{item.desc}</p>
            <div className="pt-6 border-t border-white/5">
                <span className="text-blue-400 font-mono text-sm">{item.stats}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* UPGRADED CASE STUDY / CTA SECTION */}
<section className="relative py-32 px-6 overflow-hidden">
  {/* Background Decor */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />

  <div className="max-w-4xl mx-auto">
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      className="relative z-10 bg-[#0F1219]/50 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] text-center shadow-2xl"
    >
      <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono tracking-widest uppercase">
        Next Step
      </div>

      <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
        Ready to see your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Workflows in action?
        </span>
      </h3>

      {/* n8n Workflow Image Placeholder */}
      <div className="my-10 overflow-hidden rounded-xl border border-white/10 bg-black/20">
        <img 
          src={n8n} 
          alt="n8n WhatsApp Chatbot Workflow" 
          className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

      <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
        Let’s map out your existing workflows and identify exactly where AI can save you 20+ hours a week. No fluff, just logic.
      </p>

      {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/20"
        >
          Book a System Audit
        </motion.button>
      </div>*/}

      {/* Updated "Active System" Indicator */}
      <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm font-mono">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Workflow Status: Active & Monitoring 24/7
      </div>
    </motion.div>
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
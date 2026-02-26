/*export const BrandPage = () =>{
    return(
        <div>
            <h2>Let's Brand your spot😉</h2>
            <section>
                This can have a lot of branding related content, like a portfolio of brands we've built, or a brand strategy tool, or something like that. we can brainstorm on this later..
                different sections for different types of branding services, like brand strategy, visual identity, etc. we can also have a section for branding inspiration, where we showcase some of our favorite brands and trends in the industry. and this will be animated and interactive, of course, to make it more engaging for users.
                just come up with some names of different brands and small visual descriptions for each one, to show off our capabilities and get people inspired....i will replace them with real ones later, but i can have like 4-5 different brands with different vibes, like a luxury brand, a tech startup, a lifestyle brand, etc. and each one can have a little blurb about the strategy behind it and the visual elements we created...use some dummy data for now. i will replace them with real ones later.
            </section>
        </div>
    )
}*/



import { motion } from 'framer-motion';

const brands = [
  {
    name: "AUREA",
    type: "Luxury Skincare",
    strategy: "Positioning through 'Silent Luxury'—focusing on minimalism and high-end typography.",
    visuals: "Gold leaf accents, serif typography, and expansive negative space.",
    color: "bg-[#D4AF37]",
    vibe: "Sophisticated"
  },
  {
    name: "NEO-FLUX",
    type: "Tech SaaS",
    strategy: "Humanizing complex AI through soft gradients and approachable, rounded shapes.",
    visuals: "Cyber-lime accents, dark mode interface, and fluid motion paths.",
    color: "bg-[#32CD32]",
    vibe: "Futuristic"
  },
  {
    name: "ROOT & SOUL",
    type: "Lifestyle/Wellness",
    strategy: "Building community trust using organic textures and an earthy color palette.",
    visuals: "Hand-drawn illustrations, earthy clay tones, and recycled paper textures.",
    color: "bg-[#8B4513]",
    vibe: "Grounded"
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

      {/* 2. BRAND PHILOSOPHY GRID (Now positioned as the "Why") */}
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

      {/* 3. BRAND PORTFOLIO - The "Result" */}
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
              {/* Visual Preview with a "Float" effect */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-3/5 aspect-[16/10] relative group overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/10 shadow-2xl"
              >
                <div className={`absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 ${brand.color}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <h3 className="text-5xl md:text-7xl font-black tracking-[0.2em] opacity-20 group-hover:opacity-100 group-hover:tracking-[0.3em] transition-all duration-700">
                    {brand.name}
                   </h3>
                </div>
                {/* Decorative corner element */}
                <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20 rounded-tr-xl" />
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
        <button className="bg-white text-black font-bold px-12 py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
          Start Your Project
        </button>
      </section>
    </div>
  );
};
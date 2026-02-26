import essy from "../assets/automation.png";
import growth from "../assets/growth.png";
import creative from "../assets/creative.png";
import { Footer } from "../components/Footer";
import { ChevronDown } from "lucide-react"; // Import the icon
import { motion } from "framer-motion";


export const HomePage = () => {
    return (
        <div className="relative min-h-screen pt-[90px] px-6 bg-[#0B0F19] text-[#F9FAFB] overflow-x-hidden">

             {/* Global Background Glow
             <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[140px] rounded-full"></div>
                </div>*/}

            <div className="relative z-10 max-w-5xl mx-auto text-center py-28 min-h-screen flex flex-col justify-center">


                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    <span className="block text-gray-300">
                    
                    </span>

                    <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    <span className="text-white">Elevate your brand with visually intelligent systems</span> 
                    </span>

                    <span className="block text-gray-300 mt-4 text-2xl md:text-3xl font-semibold">
                    Brand it. Design it. Automate it. Build it.
                    </span>

                    <span className="block mt-4 text-lg md:text-xl text-gray-400 font-normal">
                    Smart solutions designed for the modern entrepreneur
                    </span>
                </h1>

                <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Your hub for graphics, web design, and AI automation.
                </p>

                {/* --- ADD THIS BLOCK BELOW --- */}
                   <div 
                            className="absolute bottom-24 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-3 group"
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400/60 group-hover:text-blue-400 transition-all">
                                Explore
                            </span>
                            
                            <motion.div
                                animate={{ 
                                    y: [0, 8, 0],
                                    opacity: [0.5, 1, 0.5] 
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                                className="text-blue-500 group-hover:text-blue-300"
                            >
                                <ChevronDown size={30} strokeWidth={1.5} />
                            </motion.div>
                        </div>
                {/* --- END OF BLOCK --- */}

            </div>
            
            <section className="relative py-28 px-6 bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19] overflow-hidden">

            {/* Background Glow Effect */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_70%)]"></div>

                <div className="relative max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                         <h2 className="text-4xl h-[60px] md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                                Our Digital Solutions
                        </h2>
                        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                                {/*We build powerful brands, websites, and automation systems that scale.*/}
                         </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                            {/* Card 1 */}
                                            <div className="group relative bg-[#111827]/80 backdrop-blur-xl border border-[#1F2937] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">

                                                <div className="overflow-hidden rounded-xl border border-[#1F2937]">
                                                <img 
                                                    src={essy} 
                                                    alt="AI Chatbot" 
                                                    className="w-full transition duration-700 group-hover:scale-105"
                                                />
                                                </div>

                                                <h3 className="text-2xl font-semibold mt-6 group-hover:text-blue-400 transition">
                                                Smart Automation
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed mt-3">
                                                Reclaim your time. We build intelligent workflows and AI assistants that handle repetitive tasks, so you can focus on high-level strategy.
                                                </p>

                                            </div>

                                            {/* Card 2 */}
                                            <div className="group relative bg-[#111827]/80 backdrop-blur-xl border border-[#1F2937] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">

                                                <div className="overflow-hidden rounded-xl border border-[#1F2937]">
                                                <img 
                                                    src={growth} 
                                                    alt="CRM Dashboard" 
                                                    className="w-full transition duration-700 group-hover:scale-105"
                                                />
                                                </div>

                                                <h3 className="text-2xl font-semibold mt-6 group-hover:text-purple-400 transition">
                                                Growth Infrastructure
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed mt-3">
                                                Foundations built to scale. From custom CRMs to robust web platforms, we provide the digital architecture your business needs to expand.
                                                </p>

                                            </div>

                                            {/* Card 3 */}
                                            <div className="group relative bg-[#111827]/80 backdrop-blur-xl border border-[#1F2937] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">

                                                <div className="overflow-hidden rounded-xl border border-[#1F2937]">
                                                <img 
                                                    src={creative} 
                                                    alt="Graphic Design" 
                                                    className="w-full transition duration-700 group-hover:scale-105"
                                                />
                                                </div>

                                                <h3 className="text-2xl font-semibold mt-6 group-hover:text-pink-400 transition">
                                                Creative Branding
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed mt-3">
                                                Design that demands attention. We craft premium visual identities and assets that turn first impressions into lasting brand loyalty.
                                                </p>

                                            </div>

                                            </div>
                                        </div>
                             </section>

                            <section className="py-20 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Ready to elevate your business?
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Let’s build something powerful together.
                                </p>
                                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
                                    Start Your Project
                                </button>
                            </section>
                <Footer />  
                </div>
             );
     }
import essy from "../assets/check.png";
import { Footer } from "../components/Footer";



export const HomePage = () => {
    return (
        <div className="relative min-h-screen pt-[90px] px-6 bg-[#0B0F19] text-[#F9FAFB] overflow-x-hidden">

             {/* Global Background Glow */}
             <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[140px] rounded-full"></div>
                </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center py-28">

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    <span className="block text-gray-200">
                    Let’s
                    </span>

                    <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    <span className="text-white">spot</span>Hub/&gt; your business
                    </span>

                    <span className="block text-gray-300 mt-4 text-2xl md:text-3xl font-semibold">
                    Brand it. Design it. Automate it. Build it.
                    </span>

                    <span className="block mt-4 text-lg md:text-xl text-gray-400 font-normal">
                    So smart, you deserve that.
                    </span>
                </h1>

                <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Your hub for graphics, web design, and AI automation.
                </p>

            </div>
            
            <section className="relative py-28 px-6 bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19] overflow-hidden">

            {/* Background Glow Effect */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_70%)]"></div>

                <div className="relative max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                                Our Digital Solutions
                        </h2>
                        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                                We build powerful brands, websites, and automation systems that scale.
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
                                                AI Chatbot Widget
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed mt-3">
                                                Engage customers 24/7 with intelligent automation systems that convert visitors into clients.
                                                </p>

                                            </div>

                                            {/* Card 2 */}
                                            <div className="group relative bg-[#111827]/80 backdrop-blur-xl border border-[#1F2937] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">

                                                <div className="overflow-hidden rounded-xl border border-[#1F2937]">
                                                <img 
                                                    src={essy} 
                                                    alt="CRM Dashboard" 
                                                    className="w-full transition duration-700 group-hover:scale-105"
                                                />
                                                </div>

                                                <h3 className="text-2xl font-semibold mt-6 group-hover:text-purple-400 transition">
                                                CRM Dashboard
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed mt-3">
                                                Manage leads, automate workflows, and scale your business with smart systems.
                                                </p>

                                            </div>

                                            {/* Card 3 */}
                                            <div className="group relative bg-[#111827]/80 backdrop-blur-xl border border-[#1F2937] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">

                                                <div className="overflow-hidden rounded-xl border border-[#1F2937]">
                                                <img 
                                                    src={essy} 
                                                    alt="Graphic Design" 
                                                    className="w-full transition duration-700 group-hover:scale-105"
                                                />
                                                </div>

                                                <h3 className="text-2xl font-semibold mt-6 group-hover:text-pink-400 transition">
                                                Graphic Design Tool
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed mt-3">
                                                Create stunning visuals and branding assets that make your business unforgettable.
                                                </p>

                                            </div>

                                            </div>
                                        </div>
                             </section>

                <Footer />  
                </div>
             );
     }
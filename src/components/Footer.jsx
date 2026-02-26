//import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";

export const Footer = ()=>{
    return(
        <footer className="mt-32 border-t border-[#1F2937] bg-[#0B0F19]">

                                    <div className="max-w-7xl mx-auto px-6 py-20">

                                        {/* Top Section */}
                                        <div className="grid md:grid-cols-3 gap-12">

                                        {/* Brand */}
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">
                                            spot<span className="text-blue-500">Hub/&gt;</span>
                                            </h2>

                                            <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                                            We build powerful digital systems for modern businesses —
                                            from brand identity to intelligent automation.
                                            Smart systems. Clean design. Scalable growth.
                                            </p>
                                        </div>

                                        {/* Ecosystem */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-6">
                                            Ecosystem
                                            </h3>

                                            <ul className="space-y-4 text-gray-400">
                                            <li className="hover:text-blue-400 transition cursor-pointer">osknot</li>
                                            <li className="hover:text-blue-400 transition cursor-pointer">essykeys</li>
                                            <li className="hover:text-blue-400 transition cursor-pointer">Bobvisuals</li>
                                            </ul>
                                        </div>

                                        {/* Connect */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-6">
                                            Connect
                                            </h3>

                                            <ul className="space-y-4 text-gray-400">
                                            <li className="hover:text-blue-400 transition cursor-pointer">
                                                LinkedIn
                                            </li>
                                            <li className="hover:text-blue-400 transition cursor-pointer">
                                                Business Inquiries
                                            </li>
                                            <li className="hover:text-blue-400 transition cursor-pointer">
                                                Partnerships
                                            </li>
                                            </ul>
                                        </div>

                                        </div>

                                        {/* Bottom Section */}
                                        <div className="mt-16 pt-8 border-t border-[#1F2937] text-center text-gray-500 text-sm">
                                        © {new Date().getFullYear()} spotHub/&gt;. All rights reserved.
                                        <div className="mt-2">
                                            Designed & Built with precision.
                                        </div>
                                        </div>

                                    </div>
                    </footer>
    )
}

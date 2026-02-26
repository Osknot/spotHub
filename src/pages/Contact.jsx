//import { ContactCardPicture } from "../components/ContactCardPicture";
//import { ContactForm } from "../components/ContactFom";
import { useState } from "react";
import esse from "../assets/esse.JPG";
import ini from "../assets/myself.png";


//import { Footer } from "../components/Footer";


// Child component: CONTACT CARD PICTURE
export const ContactCardPicture = ({src, name, about, socialLinks}) => {
    return(
         <div className="group bg-[#111827] border border-[#1F2937] rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">

            <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-[#1F2937] group-hover:border-blue-500/40 transition">
                <img 
                    src={src} 
                    alt="contact picture" 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
            </div>

            <h2 className="text-2xl font-semibold">
                Meet {name}
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
                {about}
            </p>
        <div className="flex justify-center gap-6 mt-6">

                <a 
                href={socialLinks?.linkedin || "#"}
                className="group/icon"
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0B0F19] border border-[#1F2937] transition duration-300 group-hover/icon:border-blue-500 group-hover/icon:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    <i className="fab fa-linkedin-in text-gray-400 group-hover/icon:text-blue-400 transition"></i>
                    </div>
                </a>

                <a 
                href={socialLinks?.twitter || "#"}
                className="group/icon"
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0B0F19] border border-[#1F2937] transition duration-300 group-hover/icon:border-blue-500 group-hover/icon:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    <i className="fab fa-twitter text-gray-400 group-hover/icon:text-blue-400 transition"></i>
                    </div>
                </a>

        </div>
    </div>
    )
}



//Child Component: CONTACT FORM
export const ContactForm =()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [status, setStatus] = useState('');

    const handleChange = (e) => setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus("Sending...");
    try {
            const res = await fetch("https://osknot3.app.n8n.cloud/webhook/9d35285e-295f-4dae-8b39-864717ea247c", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error("Failed to send");

            setStatus("Thank you for contacting me 😉");
            setFormData({ name: "", email: "", message: ""});
        } catch (err) {
            console.error(err);
            setStatus("Something went wrong ❌");
        }

         setTimeout(() => {
                setStatus('');
                setFormData({ name: "", email: "", message: ""});
            }, 3000);
    }

    return(
        <form onSubmit={handleSubmit} className="space-y-6 text-left">

            <input 
                type="text" 
                name="name" 
                placeholder="Name..." 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0B0F19] border border-[#1F2937] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />

            <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0B0F19] border border-[#1F2937] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />

            <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                rows={5}
                onChange={handleChange}
                className="w-full bg-[#0B0F19] border border-[#1F2937] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
            />

            <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 transition rounded-xl py-3 font-semibold shadow-lg shadow-blue-600/20"
            >
                Send Message
            </button>
            <p className="text-center">{status}</p>
        </form>
    )
}


//Main CONTACT PAGE
export const ContactPage = () =>{

    return(

        <>
        <div className="relative min-h-screen bg-[#0B0F19] text-[#F9FAFB] px-6 pt-[120px] pb-24 overflow-x-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[140px] rounded-full"></div>
            </div>

            {/* Page Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold">
                Meet Us
            </h1>
            <p className="text-gray-400 mt-6 leading-relaxed">
                The minds behind spotHub — building intelligent digital systems for modern businesses.
            </p>
            </div>

            {/* Founder Cards */}
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactCardPicture 
                src={ini} 
                name="Iniobong" 
                about="Software Developer • AI Automations Specialist • Amongst others😉"
                socialLinks={{ 
                    linkedin: "https://www.linkedin.com/in/esse-profile-name", 
                    twitter: "https://twitter.com/esse-handle" 
    }}
            />

            <ContactCardPicture 
                src={esse} 
                name="Esse"
                about="Creative Designer • Brand Architect • Visual Storyteller"
                socialLinks={{ 
                    linkedin: "https://www.linkedin.com/in/esse-profile-name", 
                    twitter: "https://twitter.com/esse-handle" 
    }}
            />
            </div>

             <section className="mt-32 text-center relative">

                    <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to Build Something Powerful?
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Let’s transform your ideas into intelligent digital systems that scale.
                    </p>

                    <button className="mt-10 bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-600/30">
                        Book a Strategy Call
                    </button>

            </section>

            {/* Contact Form Section */}
            <div className="mt-32 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">
                Let’s Build Something Smart Together
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
                Have a project in mind? Reach out and let’s create something powerful.
            </p>

            <div className="mt-12 bg-[#111827] border border-[#1F2937] rounded-2xl p-10 backdrop-blur-xl shadow-xl shadow-black/40">
                <ContactForm />
            </div>
            </div>

            {/* Footer Placeholder */}
            <div className="mt-32 text-center text-gray-500">
            Then the footer is here
            </div>

        </div>
        </>    
    )
}
//In this page, you will have the picture of both of us talking just a bit of us, phone number to contact us, form  to fill and then social media contact links
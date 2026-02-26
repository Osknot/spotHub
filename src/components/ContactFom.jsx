/*import { useState } from "react"

//Child Component: CONTACT FORM
export const ContactForm =()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
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

        </form>
    )
}*/
import { useState } from "react"

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
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name..." 
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                rows={5}
                onChange={handleChange}
            />
            <button type="submit">Send Message</button>
        </form>
    )
}
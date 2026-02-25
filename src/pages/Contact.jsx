import { ContactCardPicture } from "../components/ContactCardPicture";
import { ContactForm } from "../components/ContactFom";
//import { Footer } from "../components/Footer";

export const ContactPage = () =>{
    const Iniobong = {
        name: "Iniobong",
        phone: "",
        email: "",
        socialMedia: {
            twitter: "",
            facebook: "",
            instagram: ""
        },
        about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
    const Esse = {
        name: "Esse",
        phone: "",
        email: "",
        socialMedia: {
            twitter: "",
            facebook: "",
            instagram: ""
        },
        about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
    return(

        <>
            <div>
                <ContactCardPicture 
                src="/src/assets/iniobong.jpg" 
                name={Iniobong.name} 
                about={Iniobong.about}
                />

                <ContactCardPicture 
                src="/src/assets/esse.jpg" 
                name={Esse.name} 
                about={Esse.about}
                />
            </div>
            
            
            <div>
                <h2>Be sure to contact us</h2>
                <ContactForm />
            </div>
            
            <div>Then the footer is here</div>
        </>      
    )
}
//In this page, you will have the picture of both of us talking just a bit of us, phone number to contact us, form  to fill and then social media contact links
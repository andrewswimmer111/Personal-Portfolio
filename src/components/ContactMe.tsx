import { useState } from "react";
import ContactForm from "./ContactForm"

const ContactMe:React.FC = () => {

    const [showForm, setShowForm] = useState(false)
    let i = 0

    const handleEmailClick = () => {
        const form = document.getElementById("email-form");
        if (form) {

            if (!showForm) {
                setShowForm(true);
                form.classList.add("visible");

                if (i === 0) {
                    setTimeout(() => {
                        form.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                        i++;
                    }, 200);
                }
                
            } else {
                setShowForm(false);
                form.classList.remove("visible");

            }
            
        }
    };

    return (
        <div id="Contact" className="contact-section">
            <div className="footer-grid-practice">
                <h2 className="contact-call"> Contact me! </h2>
                <div className="contact-column">
                    <a onClick={handleEmailClick}> Email</a>
                    <a href="/files/Andrew_Li.pdf" target="_blank"> Resume</a>
                </div>
                <div className="contact-column">
                    <a href="https://github.com/andrewswimmer111" target="_blank"> Github</a>
                    <a href="https://www.linkedin.com/in/andrew-li-0b2025224/" target="_blank"> LinkedIn</a>
                </div>
            </div>
            <div id="email-form" className="email-wrapper hidden">
                <ContactForm/>
            </div>
        </div>
    )
}

export default ContactMe
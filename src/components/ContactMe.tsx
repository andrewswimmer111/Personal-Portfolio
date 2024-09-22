import ContactForm from "./ContactForm"

const ContactMe:React.FC = () => {

    const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        document.getElementById("email-form")?.classList.remove("hidden");
        document.getElementById("email-form")?.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
        });
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
                <h1 id="contact-form-h1" className="contact-form-h1"> Contact Form </h1>
                <ContactForm/>
            </div>
        </div>
    )
}

export default ContactMe
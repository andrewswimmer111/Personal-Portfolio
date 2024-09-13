
const ContactMe:React.FC = () => {
    return (
        <div id="Contact Me" className="contact-section">
            <h2 className="contact-call"> Contact me! </h2>
            <div className="contact-column">
                <a href="mailto:andrew.li.duke@gmail.com"> Email </a>
                <a href="/public/files/Andrew_Li.pdf" target="_blank"> Resume</a>
            </div>
            <div className="contact-column">
                <a href="https://github.com/andrewswimmer111" target="_blank"> Github</a>
                <a href="https://www.linkedin.com/in/andrew-li-0b2025224/" target="_blank"> LinkedIn</a>
            </div>
        </div>
    )
}

export default ContactMe
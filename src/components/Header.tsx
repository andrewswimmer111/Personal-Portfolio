import { useState } from "react";

const Header: React.FC = () => {

    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className="header">
            <h1 className="header-name"> Andrew Li </h1>
            <nav className="header-nav">
                {['About Me', 'Personal Projects', 'Extracurriculars', 'Skills', 'Contact Me'].map((link) => (
                    <div
                        key={link}
                        className={`nav-link ${activeLink === link ? 'active' : ''}`}
                        onClick={() => handleClick(link)}
                    >
                        {link}
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default Header;
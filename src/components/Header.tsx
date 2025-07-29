const Header: React.FC = () => {

    const handleClick = (link: string) => {
        const section = document.getElementById(link); 
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); 
        } else {
            console.error(`section with ID '${link}' not found`);
        }
    };

    return (
        <div className="header" id="header">
            <h1 className="header-name"> Andrew Li </h1>
            <nav className="header-nav">
                {['About', 'Projects', 'Extracurriculars / Experiences', 'Skills', 'Contact'].map((link) => (
                    <div
                        key={link}
                        className='nav-link'
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
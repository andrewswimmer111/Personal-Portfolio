import { useState, useEffect } from "react";

interface SkillCardProps {
    skillName: string,
    proficiency: string,
    description?: string,
    style: string,
}

const SkillCard:React.FC<SkillCardProps> = ( {skillName, proficiency, description, style}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div 
            className={`skill-block ${style}`}
            onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
            onMouseLeave={!isMobile ? () => setIsHovered(false) : undefined}
            onClick={isMobile ? () => setIsHovered(!isHovered) : undefined} 
        >
            <div className="skill-name"> {skillName} </div>
            <div className={`skill-clarification ${isHovered ? 'visible' : 'hidden'}`}>
                <div>{proficiency}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}

export default SkillCard;
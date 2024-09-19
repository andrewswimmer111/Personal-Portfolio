import { useState } from "react";

interface SkillCardProps {
    skillName: string,
    proficiency: string,
    description?: string,
    style: string,
}

const SkillCard:React.FC<SkillCardProps> = ( {skillName, proficiency, description, style}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`skill-block ${style}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
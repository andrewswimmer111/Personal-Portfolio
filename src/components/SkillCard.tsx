import { useState } from "react";

interface SkillCardProps {
    skillName: string,
    proficiency: string,
    description?: string,
}

const SkillCard:React.FC<SkillCardProps> = ( {skillName, proficiency, description}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="skill-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="skill-name"> {skillName} </div>
            <div className={`skill-clarification ${isHovered ? 'visible' : 'hidden'}`}>
                {proficiency}
            </div>
            <div className={`skill-clarification ${isHovered ? 'visible' : 'hidden'}`}>
                {description}
            </div>
        </div>
    )
}

export default SkillCard;
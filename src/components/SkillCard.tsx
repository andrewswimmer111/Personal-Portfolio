interface SkillCardProps {
    skillName: string,
    proficiency: string,
}

const SkillCard:React.FC<SkillCardProps> = ( {skillName, proficiency}) => {
    return (
        <div className="skill-block">
            <div className="skill-name"> {skillName} </div>
            <div> {proficiency} </div>
        </div>
    )
}

export default SkillCard;
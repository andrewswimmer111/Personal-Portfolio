import SkillCard from "./SkillCard"

type SkillCategoryProps = {
    category: string;
    skills: {
        name: string,
        proficiency: string,
    }[];
}

const SkillsCategory:React.FC<SkillCategoryProps> = ({category, skills}) => {    

    return (
        <div className={`skill-category skillData`}>
            <h2>{category}</h2>
            <div className="skill-cards-line">
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index} 
                        skillName={skill.name}
                        proficiency={skill.proficiency} 
                        style='skillData'
                    />
                ))}
            </div>
        </div>
    )
}

export default SkillsCategory;
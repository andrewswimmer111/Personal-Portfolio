import SkillCard from "./SkillCard"

type SkillCategoryProps = {
    category: string;
    skills: {
        name: string,
        proficiency: string,
        description?: string,
    }[];
    styleType: 'keyData' | 'skillData';
}

const SkillsCategory:React.FC<SkillCategoryProps> = ({category, skills, styleType}) => {    

    return (
        <div className={`skill-category ${styleType}`}>
            <h2>{category}</h2>
            <div className="skill-cards-line">
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index} 
                        skillName={skill.name}
                        proficiency={skill.proficiency} 
                        description={skill.description}
                        style={styleType}
                    />
                ))}
            </div>
        </div>
    )
}

export default SkillsCategory;
import SkillsCategory from "./SkillsCategory";

const Skills:React.FC = () => {
    const skillData = [
        {
          categoryName: "Programming Languages",
          skills: [
            { name: "JavaScript", proficiency: "Expert" },
            { name: "Python", proficiency: "Intermediate" }
          ]
        },
        {
          categoryName: "Frameworks",
          skills: [
            { name: "React", proficiency: "Advanced", description: "I have a max of 3 lines for this"},
            { name: "Node.js", proficiency: "Intermediate" }
          ]
        }
    ];

    return (
        <div className="skills-section">
            <h1> Skills</h1>
            <div className="skills-grid">
                {skillData.map((category, index) => (
                    <SkillsCategory 
                        key={index}
                        category={category.categoryName}
                        skills={category.skills}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;
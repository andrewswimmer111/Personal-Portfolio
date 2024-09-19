import SkillsCategory from "./SkillsCategory";

const Skills:React.FC = () => {

    const keyData = [
      {
        categoryName: "Levels (hover)",
        skills: [
          {name: "Novice", proficiency: "", description: "Simple task completion"},
          {name: "Basic", proficiency: "", description: "Fundamental knowledge, simple tasks"},
          {name: "Intermediate", proficiency: "", description: "Solid understanding with practical experience"},
          {name: "Proficient", proficiency: "", description: "Deep knowledge and extensive experience"}
        ]
      }
    ]

    const skillData = [
        {
          categoryName: "Programming Languages",
          skills: [
            { name: "JavaScript", proficiency: "Expert" },
            { name: "Python", proficiency: "Intermediate" }
          ]
        },
        {
          categoryName: "Web dev",
          skills: [
            { name: "React", proficiency: "Intermediate" },
            { name: "Ruby on Rails", proficiency: "Intermediate" },
            { name: "Express.js", proficiency: "Beginner" },
            { name: "TailwindCSS", proficiency: "Basic" },
            { name: "BootStrapCSS", proficiency: "Basic" },
            { name: "HTML Canvas", proficiency: "Basic" },
        ]
        },
        {
          categoryName: "Tools",
          skills: [
            {name: "Git", proficiency: "Intermediate"},
            {name: "Docker", proficiency: "Intermediate"},
            {name: "Command Line", proficiency: "Basic"}


          ]
        }
    ];

    return (
        <div id="Skills" className="skills-section section-correction">
            <h1> Skills</h1>
            <div className="skills-grid">

                {keyData.map((category, index) => (
                  <SkillsCategory 
                    key={index}
                    category={category.categoryName}
                    skills={category.skills}
                    styleType="keyData"
                  />
                ))}

                {skillData.map((category, index) => (
                    <SkillsCategory 
                        key={index}
                        category={category.categoryName}
                        skills={category.skills}
                        styleType="skillData"
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;
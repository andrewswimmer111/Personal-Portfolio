import SkillsCategory from "./SkillsCategory";

const Skills:React.FC = () => {

    const keyData = [
      {
        categoryName: "Hover (or tap for mobile) to see descriptions",
        skills: [
          {name: "Proficient", proficiency: "", description: "Has deep knowledge, extensive experience, and can solve complex problems"},
          {name: "Intermediate", proficiency: "", description: "Has both solid understanding and experience in more complex tasks"},
          {name: "Basic", proficiency: "", description: "Understands core concepts and fundamentals, and is able to complete tasks independently"},
          {name: "Novice", proficiency: "", description: "Able to complete simple tasks with guidance, but only has functional knowledge"},
        ]
      }
    ]

    const skillData = [
        {
          categoryName: "Programming Languages",
          skills: [
            { name: "Java", proficiency: "Intermediate" },
            { name: "JavaScript", proficiency: "Intermediate" },
            { name: "TypeScript", proficiency: "Intermediate" },
            { name: "Python", proficiency: "Basic" },
            { name: "Ruby", proficiency: "Novice" },
          ]
        },
        {
          categoryName: "Web dev",
          skills: [
            { name: "React", proficiency: "Intermediate" },
            { name: "Ruby on Rails", proficiency: "Intermediate" },
            { name: "TailwindCSS", proficiency: "Basic" },
            { name: "BootStrapCSS", proficiency: "Basic" },
            { name: "HTML Canvas", proficiency: "Basic" },
            { name: "Express.js", proficiency: "Novice" },
        ]
        },
        {
          categoryName: "Tools",
          skills: [
            {name: "Git", proficiency: "Intermediate"},
            {name: "Docker", proficiency: "Intermediate"},
            {name: "Command Line", proficiency: "Basic"},
            {name: "AWS EC2", proficiency: "Basic"},
            {name: "DNS", proficiency: "Novice"},

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
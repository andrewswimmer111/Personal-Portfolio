import SkillsCategory from "./SkillsCategory";
import SkillFilter from "./SkillFilter";
import { useState } from "react";

const Skills:React.FC = () => {

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filterData = [
      {
          level: "Intermediate",
          description: "Has both solid understanding and experience in more complex tasks",
      },
      {
          level: "Basic",
          description: "Understands core concepts and is able to complete tasks independently",
      },
      {
          level: "Novice",
          description: "Able to complete simple tasks with guidance, but only has functional knowledge",
      },
  ];

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
            { name: "React Native", proficiency: "Basic" },
            { name: "TailwindCSS", proficiency: "Basic" },
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
            {name: "Heroku", proficiency: "Basic"},
            {name: "AWS EC2", proficiency: "Novice"},
            {name: "DNS", proficiency: "Novice"},

          ]
        }
    ];

    const filteredSkills = selectedFilter
        ? skillData.map((category) => ({
              ...category,
              skills: category.skills.filter((skill) => skill.proficiency === selectedFilter),
          })).filter((category) => category.skills.length > 0)
        : skillData;

    return (
        <div id="Skills" className="skills-section section-correction">
            <h1> Skills</h1>
            <div className="skills-grid">
              <div className="filter-instructions"> (Click to filter by skill level) </div>
              <SkillFilter
                  selectedFilter={selectedFilter}
                  onFilterChange={setSelectedFilter}
                  filterData = {filterData}
              />

                {filteredSkills.map((category, index) => (
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
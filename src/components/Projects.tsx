import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {

    const projects = [
        {
            title: "Community Capital",
            description: "When families move to a new neighborhood, finding nearby community resources can be challenging. To address this, I worked with a team of five other students through the Duke Code+ summer program, developing a website that visualizes public schools and surrounding resources (which are curated by community leaders). While the current site only covers Durham County in North Carolina, this semester, I’m working as a Student Developer Intern for Duke OIT to help expand the website to other counties and to make additional improvements.",
            imageURL: "/images/community.png",
            projectLink: "https://community-capital-test.oit.duke.edu/",
        },
        {
            title: "Duke Food Tracker",
            description: "Many Duke students, especially first-years, struggle to manage their food points effectively throughout the semester. To help, I developed a website where students can log their meals and view stats such as their most ordered meals, favorite restaurants, and total food point consumption. While functional, the initial version had issues like inefficient data storage, messy code structure, and requiring manual input for each meal. I’m now working on a second version with significant improvements in both design and functionality.",
            imageURL: "/images/food.png",
            projectLink: "",
        },
    ]

    return (
        <div id="Projects" className="project-section section-correction">
            <h1> Previous Projects </h1>
            <div className="project-grid"> 
                {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageURL={project.imageURL}
                    projectLink={project.projectLink}
                />
            ))}
            </div>
        </div>
    )
}

export default Projects;
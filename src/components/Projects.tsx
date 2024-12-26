import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {

    const projects = [
        {
            title: "Community Capital",
            description: "When families move to a new neighborhood, finding nearby community resources can be challenging. To address this, I worked with a team of five students to design a school-centered, resource visualization website that covers the Durham and Vance counties of North Carolina.",
            imageURL: "/images/community.png",
            projectLink: "https://community-capital-test.oit.duke.edu/",
        },
        {
            title: "Custom Sports Newsletter",
            description: "In order to help those with busy schedules stay up to date on their favorite sports teams, a partner and I developed a personalized sports newsletter platform. Users can subscribe to receive weekly emails featuring the latest updates and game results of their favorite teams.",
            imageURL: "/images/sports.png",
            projectLink: "",
        },
        {
            title: "Duke Food Tracker",
            description: "Managing food point budgets can be a major struggle for many college students. To address this problem, I created a website where students can log their meals and view stats such as their most ordered meals, favorite restaurants, and total food point consumption. ",
            imageURL: "/images/food6.png",
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
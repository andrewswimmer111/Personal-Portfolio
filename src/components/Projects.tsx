import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {

    const projects = [
        {
            title: "Test",
            description: "Hi! I’m a sophomore at Duke University majoring in computer science. I want to make peoples’ lives easier and more enjoyable using technology. While I currently have a strong interest in software engineering, I’m also open to exploring other areas within the tech field where I can learn and grow. I love personal development, so I’m always looking for opportunities to take on new challenges and expand my skills.",
            imageURL: "/public/images/head.jpg",
            projectLink: "https://www.dukefood-test.com",
        },
        {
            title: "Test",
            description: "Hi! I’m a sophomore at Duke University majoring in computer science. I want to make peoples’ lives easier and more enjoyable using technology. While I currently have a strong interest in software engineering, I’m also open to exploring other areas within the tech field where I can learn and grow. I love personal development, so I’m always looking for opportunities to take on new challenges and expand my skills.",
            imageURL: "/public/images/head.jpg",
            projectLink: "https://www.dukefood-test.com",
        },
        {
            title: "Test",
            description: "Hi! I’m a sophomore at Duke University majoring in computer science. I want to make peoples’ lives easier and more enjoyable using technology. While I currently have a strong interest in software engineering, I’m also open to exploring other areas within the tech field where I can learn and grow. I love personal development, so I’m always looking for opportunities to take on new challenges and expand my skills.",
            imageURL: "/public/images/head.jpg",
            projectLink: "https://www.dukefood-test.com",
        }
    ]

    return (
        <div className="project-section">
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
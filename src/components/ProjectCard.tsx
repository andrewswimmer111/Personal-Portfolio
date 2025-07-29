interface ProjectCardProps {
    title: string,
    description: string,
    imageURL: string,
    projectLink: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageURL, projectLink}) => {

    return (
        <div className="project-card">
            <div className="project-title">{title}</div>
            <a href={projectLink} target="_blank" className="project-image-container">
                <img src={imageURL} className="project-image"></img>
            </a>
            <div className="project-body">{description}</div>
            <a className="project-link" href={projectLink} target="_blank">{projectLink} </a>
        </div>
    )
}

export default ProjectCard;
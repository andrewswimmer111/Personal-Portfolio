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
            <div className="project-image-container">
                <img src={imageURL} className="project-image"></img>
            </div>
            <div className="project-body">{description}</div>
            <div className="project-link">{projectLink}</div>
        </div>
    )
}

export default ProjectCard;
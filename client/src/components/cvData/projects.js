const Projects = ({projects}) => {
    return (
        <div className="cvb-personal-info">
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.projectTitle}</h2>
                    <p>{project.description}</p>
                    <a href={project.link}>{project.link}</a>
                </div>
            ))}

        </div>
    )
}

export default Projects
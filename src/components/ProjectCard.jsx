export default function ProjectCard({project}) {
    return (
        <div className="ProjectCard">
            <h5>{project.title}</h5>

            <div className="project-card-content">
                <img
                    src={project.imageUrl}
                />
                <div className="project-card-description">
                    <p>
                        {project.content}
                    </p>

                    <button className="button-icon button-github">
                        <span>Go to GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
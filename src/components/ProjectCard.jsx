import Button from "./Button";

export default function ProjectCard({project}) {

    // Abre url del proyecto
    function onGithubButtonClick() {
        window.open(project.repoUrl, '_blank')
    }


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

                    <Button onClick={onGithubButtonClick}> Go to Github </Button>
                </div>
            </div>
        </div>
    );
}
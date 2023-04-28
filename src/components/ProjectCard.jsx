export default function ProjectCard() {

    return (
        <div className="ProjectCard">
            <h5>🐤 Tweety</h5>

            <div className="project-card-content">
                <img
                    src="https://i0.wp.com/www.fcme.org/wp-content/uploads/Twitter-logo.jpg?fit=600%2C436&ssl=1"
                />
                <div className="project-card-description">
                    <p>
                        Tweety is a web application that generates an image using a Twitter user's most recent tweets. It connects to the Twitter API, retrieves the latest tweets, and utilizes Hugging Face's stable diffusion model to create the image.
                    </p>

                    <button className="button-icon button-github">
                        <span>Go to GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
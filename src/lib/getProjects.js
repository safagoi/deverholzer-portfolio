
// Obtiene la lista de proyectos
export default function getProjects() {
    return projects;
}

export const projects = [
    {
        id: 1,
        title: "🐤 Tweety",
        content: "Tweety is a web application that generates an image using a Twitter user's most recent tweets. It connects to the Twitter API, retrieves the latest tweets, and utilizes Hugging Face's stable diffusion model to create the image",
        imageUrl: "https://i0.wp.com/www.fcme.org/wp-content/uploads/Twitter-logo.jpg?fit=600%2C436&ssl=1",
        repoUrl: "https://github.com/safagoi/tweety"
    },
]
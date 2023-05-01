import { projects } from "@/lib/getProjects";

export default function handler(req, res) {
    res.status(200).json(projects);
}
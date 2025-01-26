import { ProjectsRender } from "@/components/ProjectsRender";
import projects from "./data/ProjectsData";

const Projects = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
            <ProjectsRender renderCount={projects.length}></ProjectsRender>
        </div>
    )
}


export default Projects;
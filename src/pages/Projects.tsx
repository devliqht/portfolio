import { ProjectsRender } from "@/components/ProjectsRender";

const Projects = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
            
            <ProjectsRender renderCount={3}></ProjectsRender>
        </div>
    )
}


export default Projects;
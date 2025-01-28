import { ProjectsRender } from "@/components/ProjectsRender";
import { UIDesigns } from "./data/ProjectsData";

const Projects = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
            <ProjectsRender renderCount={6} animateDelay={100} showMore={false}></ProjectsRender>
            <ProjectsRender data={UIDesigns} renderCount={3} title="UI Designs" animateDelay={300} showMore={false}></ProjectsRender>
        </div>
    )
}


export default Projects;
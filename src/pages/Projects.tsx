import { ProjectsRender, ProjectCount } from "@/components/ProjectsRender";
import { UIDesigns } from "./data/ProjectsData";
import { AnimatedContainer } from "@/components/Containers";

const Projects = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
            <AnimatedContainer delay={100}>
                <ProjectsRender renderCount={ProjectCount} showMore={false}></ProjectsRender>
                <ProjectsRender data={UIDesigns} renderCount={3} title="UI Designs" showMore={false}></ProjectsRender>
            </AnimatedContainer>
        </div>
    )
}


export default Projects;
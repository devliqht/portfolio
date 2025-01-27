import { AnimatedContainer, BasicContainer, ProjectsContainer } from "@/components/Containers";
import projects from "@/pages/data/ProjectsData";

interface ProjectsRenderProps {
    renderCount: number;
    animateDelay?: number;
}

const ProjectsRender: React.FC<ProjectsRenderProps> = ({renderCount = 0, animateDelay = 0}) => {
  return (
      <AnimatedContainer delay={animateDelay}>
        <BasicContainer className="border-none" noPadding={true}>
          <h3 className="text-3xl md:text-5xl text-[var(--white)] lexend-deca-700 md:text-left mb-4 w-full" id="projects">
            PROJECTS
          </h3>
          <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-2 mb-4 w-full">
            {projects.slice(0, renderCount).map((project, index) => (
              <ProjectsContainer
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                tags={project.tags}
                link={project.link}
              >
                {project.description}
              </ProjectsContainer>
            ))}
          </div>
          <div className="text-white ibm-plex-mono-medium flex flex-row justify-end"></div>
        </BasicContainer>
      </AnimatedContainer>
  );
};

export {
    ProjectsRender
}
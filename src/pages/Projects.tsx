import { AnimatedContainer, BasicContainer, ProjectsContainer } from "@/components/Containers";
import projects from "./data/ProjectsData";

const Projects = () => {
  return (
    <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
      <AnimatedContainer delay={200}>
        <BasicContainer className="border-none mt-0 p-0">
          <h3 className="text-3xl md:text-5xl text-[var(--white)] lexend-deca-700 md:text-left mb-4 w-full" id="projects">
            PROJECTS
          </h3>
          <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-2 mb-4 w-full">
            {projects.map((project, index) => (
              <ProjectsContainer
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                tags={project.tags}
              >
                {project.description}
              </ProjectsContainer>
            ))}
          </div>
          <div className="text-white ibm-plex-mono-medium flex flex-row justify-end"></div>
        </BasicContainer>
      </AnimatedContainer>
    </div>
  );
};

export default Projects;
import { BasicContainer, ProjectsContainer } from "@/components/Containers";
import { Project, projects } from '@/pages/data/ProjectsData';
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectsRenderProps {
    renderCount: number;
    title?: string;
    data?: Project[];
    showMore?: boolean;
}

const ProjectsRender: React.FC<ProjectsRenderProps> = ({
  renderCount = 0, 
  title = "PROJECTS", 
  data = projects,
  showMore = true,
}) => {
  return (
        <BasicContainer className="border-none" noPadding={true}>
        <h3
          className={`relative flex items-center text-3xl md:text-5xl bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent lexend-deca-700 tracking-tighter ${showMore ? '' : 'mb-8'} md:text-left w-full`}
          id="projects"
        >
          {title}
          <span className="flex-grow h-[1px] bg-gray-600 ml-4"></span>
          </h3>
            {showMore && (
              <div className="text-white ibm-plex-mono-medium flex flex-row justify-start mt-2 mb-4">
                <Link
                    to="/projects"
                    className="flex flex-row items-center gap-2 text-xl text-gray-400 ibm-plex-mono-medium mb-3 relative group"
                >
                    View More Projects
                    <FaArrowUpRightFromSquare size={15} />
                    <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-[240px]"></span>
                </Link>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 w-full">
            {data.slice(0, renderCount).map((project, index) => (
              <ProjectsContainer
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                tags={project.tags}
                link={project.link}
                accordionContent={project.accordionContent}
              >
                {project.description}
              </ProjectsContainer>
            ))}
          </div>
          <div className="p-4"></div>
        </BasicContainer>
  );
};

export const ProjectCount = projects.length;
export {
    ProjectsRender
}
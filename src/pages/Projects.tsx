import { AnimatedContainer, BasicContainer, ProjectsContainer } from "@/components/Containers";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "OSA Violation Tracker",
    imageUrl: "/osa.png",
    tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express"],
    description: "A full-stack CRUD web application for tracking and handling student violations.",
  },
  {
    title: "Lab Database System",
    imageUrl: "/res.png",
    tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express"],
    description: "A full-stack web application that streamlines the documentation of laboratory sessions using QR code scanning for quick experiment identification.",
  },
  {
    title: "Canticum",
    imageUrl: "/canticum.png",
    tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Google API", "Spotify API"],
    description:
      "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
  },
];

const Projects = () => {
  return (
    <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
      <AnimatedContainer delay={200}>
        <BasicContainer className="border-none mt-0">
          <h3 className="text-5xl text-[var(--white)] lexend-deca-700 md:text-left mb-4 w-full" id="projects">
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
import React, { ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { MdArrowOutward } from "react-icons/md";


interface ProjectsContainerProps {
  title: string;
  imageUrl: string;
  children: ReactNode;
  tags?: string[];
}

interface AnimatedContainerProps {
    children: React.ReactNode; 
    from?: object;
    to?: object; 
    config?: object; 
    duration?: number;
    delay?: number;
    className?: string;
}

interface BasicContainerProps {
    children: React.ReactNode;
    outline?: boolean;
    className?: string;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ 
  title, 
  imageUrl, 
  children, 
  tags = [],
}) => {
  return (
    <div className="container flex flex-col h-full border-2 border-[var(--dblue-l)] md:p-6 w-fit rounded-lg shadow-md">
    <div className="mb-4 h-[220px] p-2 border-[var(--dblue-ll)] border-2 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
      <div className="flex flex-col items-start">
        <a
          href="https://github.com"
          className="flex flex-row items-center gap-2 text-xl text-gray-400 ibm-plex-mono-medium mb-3 relative group"
        >
          {title}
          <MdArrowOutward />
          <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="text-gray-300 text-justify h-full text-sm">{children}</div>
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
    children,
    from = { opacity: 0, transform: "translateY(20px)" },
    to = { opacity: 1, transform: "translateY(0)" },
    config = { tension: 80, friction: 20 }, 
    duration,
    delay = 0, 
    className = "",
  }) => {
    const animation = useSpring(
      duration
        ? { from, to, config: { duration }, delay } 
        : { from, to, config, delay }
    );
  
    return <animated.div style={animation} className={`${className} justify-center w-full`}>{children}</animated.div>;
};


const BasicContainer: React.FC<BasicContainerProps> = ({
  children,
  outline = true, 
  className = ""
}) => {
  return (
    <div
      className={`container ${className} mx-auto mt-4 p-4 md:p-6 lg:w-[70%] rounded-lg shadow-md ${
        outline ? 'border-2 border-[var(--dblue-ll)]' : 'border-none'
      }`}
    >
      {children}
    </div>
  );
};

export {
    ProjectsContainer,
    AnimatedContainer,
    BasicContainer
}


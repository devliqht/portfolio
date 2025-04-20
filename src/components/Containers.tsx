import React, { ReactNode, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface ProjectsContainerProps {
  title: string;
  imageUrl: string;
  children: ReactNode;
  accordionContent?: string;
  tags?: string[];
  link?: string;
}

interface AnimatedContainerProps {
  children: React.ReactNode; 
  from?: object;
  to?: object; 
  config?: object; 
  duration?: number;
  delay?: number;
  className?: string;
  fullWidth?: boolean;
}

interface BasicContainerProps {
    children: React.ReactNode;
    outline?: boolean;
    className?: string;
    noPadding?: boolean;
    paddingMobile?: boolean;
    centred?: boolean;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  title,
  imageUrl,
  children,
  accordionContent,
  tags = [],
  link,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className="flex flex-col w-full bg-[var(--dblue-l)] p-5 rounded-lg shadow-md border-[1px] border-[var(--dblue-ll)] justify-between">
      <div className="flex flex-col">
      <div className="mb-4 h-[220px] w-full p-2 border-[var(--dblue-ll)] border-2 rounded-lg overflow-hidden">
        {!isImageLoaded && (
          <div className="h-full w-full bg-gray-300 animate-pulse rounded-lg"></div>
        )}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt={title}
            className={`h-full w-full object-cover transform transition-transform duration-500 hover:scale-105 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </a>
      </div>
      <div className="flex flex-col items-start">
      <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row w-fit items-center gap-2 text-xl text-gray-400 ibm-plex-mono-medium mb-3 relative group tracking-tight"
        >
          {title}
          <FaArrowUpRightFromSquare size={15} />
          <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="text-gray-300 h-full text-sm italic w-full lexend-deca-400 tracking-tight">
          {children}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-gray-400">More Info</AccordionTrigger>
              <AccordionContent>{accordionContent}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 tracking-tight rounded-lg ibm-plex-mono-light"
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
  fullWidth = true
}) => {
  const animation = useSpring(
    duration
      ? { from, to, config: { duration }, delay } 
      : { from, to, config, delay }
  );

  return <animated.div style={animation} className={`${className} ${fullWidth ? 'w-full' : ''}`}>{children}</animated.div>;
};

const BasicContainer: React.FC<BasicContainerProps> = ({
  children,
  outline = true, 
  className = "",
  noPadding = false,
  paddingMobile = false,
  centred = true
}) => {
  return (
    <div
      className={`container ${className} ${centred ? 'mx-auto' : ''} my-4 ${noPadding ? 'p-0' : `${paddingMobile ? 'p-4 md:p-6' : 'p-0 md:p-6'}`} rounded-lg ${
        outline ? 'border-0 border-[var(--dblue-ll)]' : 'border-none'
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


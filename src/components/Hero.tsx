import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma,  } from "react-icons/fa";
import { RiTailwindCssFill, RiNotionFill, RiNextjsFill } from "react-icons/ri";
import { SiVite, SiAdobeaftereffects, SiAdobelightroomclassic, SiCanva, SiTypescript, SiDeno, SiBun } from "react-icons/si";
import { DiVisualstudio, DiApple, DiGithubBadge, DiTerminal, DiMongodb, DiGoogleCloudPlatform } from "react-icons/di";
import { ProjectsContainer, AnimatedContainer, BasicContainer } from "./Containers";
import { COriginal } from 'devicons-react';
import { CplusplusOriginal } from 'devicons-react';
import { CsharpOriginal } from 'devicons-react';
import { PythonOriginal } from 'devicons-react';
import { JavaOriginal } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { ROriginal } from 'devicons-react';


const Hero = () => {
    const FaIconSize: number = 50;
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
        <AnimatedContainer delay={300} className="pl-2 md:pl-0 md:mt-8">
            <div className="flex flex-col items-start md:justify-center md:items-center">
                <h1 className="text-5xl text-[var(--white)] lexend-deca-700">Hi. Hello. Welcome.</h1>
                <h2 className="text-2xl text-gray-400 lexend-deca-300 mt-3">Matt Cabarrubias</h2>
                <img src="/me.png" alt="Me" className="w-64 h-auto rounded-full my-6" />
            </div>
        </AnimatedContainer>
        <AnimatedContainer delay={500}>
            <BasicContainer>
                <div className="me-description text-white lexend-deca-300 text-left flex flex-col justify-between">
                    <h3 className="font-bold text-2xl mb-2">Hello, world.</h3>
                    <p className="mb-4 text-justify md:text-left">
                        I am a BSCS student at the University of San Carlos, specializing in
                        web development, UI/UX design, and video editing. As a quick learner
                        with a lifelong passion for coding, I bring creativity and technical
                        expertise to my projects. I thrive in collaborative settings, often
                        stepping up as a group leader, and I approach challenges methodically,
                        driven by curiosity and a desire to solve problems effectively.
                    </p>
                </div>
            </BasicContainer>
        </AnimatedContainer>
        <AnimatedContainer delay={700}>
            <BasicContainer outline={false}>
            <h3 className="text-2xl text-gray-300 ibm-plex-mono-medium md:text-center mb-4">Programming Languages</h3>
                <div className="flex flex-row md:justify-center gap-4 flex-wrap mb-8">
                    <COriginal size={FaIconSize} color="white"></COriginal>
                    <CplusplusOriginal size={FaIconSize} color="white"></CplusplusOriginal>
                    <CsharpOriginal size={FaIconSize} color="white"></CsharpOriginal>
                    <JavascriptOriginal size={FaIconSize} color="white"></JavascriptOriginal>
                    <JavaOriginal size={FaIconSize} color="white"></JavaOriginal>
                    <PythonOriginal size={FaIconSize} color="white"></PythonOriginal>
                    <ROriginal size={FaIconSize} color="white"></ROriginal>
                </div>
            <h3 className="text-2xl text-gray-300 ibm-plex-mono-medium md:text-center mb-4">Web</h3>
                <div className="flex flex-row md:justify-center mb-8 gap-4 flex-wrap">
                    <FaHtml5 size={FaIconSize} color="white"/>
                    <FaCss3 size={FaIconSize} color="white" />
                    <SiTypescript size={FaIconSize} color="white" />
                    <FaNodeJs size={FaIconSize} color="white" />
                    <SiDeno size={FaIconSize} color="white" />
                    <SiBun size={FaIconSize} color="white" />
                    <FaReact size={FaIconSize} color="white" />
                    <RiNextjsFill size={FaIconSize} color="white" />
                    <SiVite size={FaIconSize} color="white" />
                    <RiTailwindCssFill size={FaIconSize} color="white" />
                    <FaFigma size={FaIconSize} color="white" />
                </div>
                <h3 className="text-2xl text-gray-300 ibm-plex-mono-medium md:text-center mb-4">Tools</h3>
                <div className="flex flex-row md:justify-center gap-4 flex-wrap mb-4">
                    <DiVisualstudio size={FaIconSize} color="white"/>
                    <DiApple size={FaIconSize} color="white"/>
                    <DiGithubBadge size={FaIconSize} color="white"/>
                    <DiTerminal size={FaIconSize} color="white"/>
                    <DiMongodb size={FaIconSize} color="white"/>
                    <DiGoogleCloudPlatform size={FaIconSize} color="white"/>
                    <SiAdobeaftereffects size={FaIconSize} color="white"/>
                    <SiAdobelightroomclassic size={FaIconSize} color="white"/>
                    <SiCanva size={FaIconSize} color="white"/>
                    <RiNotionFill size={FaIconSize} color="white"/>
                </div>
            </BasicContainer>
        </AnimatedContainer>
        <AnimatedContainer delay={900}>
            <BasicContainer>
                <h3 className="text-2xl text-gray-300 ibm-plex-mono-medium md:text-center mb-4" id="projects">Projects</h3>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <ProjectsContainer title="OSA Violation Tracker" imageUrl="/osa.png" tags={['React', 'Node.js', 'MongoDB', 'Render.com', 'Google API', 'Express']}>
                        A full-stack CRUD web application for a school project. It is essentially a tracking system that tracks students and their corresponding violations. It displays their student information, the details of the violation as well as adding and deleting students/violations.
                        A special project passed to my CFP (Computer Fundamentals and Programming) 01 elective class in order to attain a Grade of 100.
                    </ProjectsContainer>
                    <ProjectsContainer title="Lab Database System" imageUrl="/res.png" tags={['React', 'Node.js', 'MongoDB', 'Render.com', 'Google API', 'Express']}>
                    The Laboratory Database System is a full-stack web application that streamlines the documentation of laboratory sessions using QR code scanning for quick experiment identification. Students can input session details, which are stored in a database and accessed by teachers through a dedicated dashboard. This project demonstrates my expertise in building functional and user-friendly solutions for educational needs.
                    </ProjectsContainer>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <ProjectsContainer title="Canticum" imageUrl="/canticum.png" tags={['React', 'Bun', 'Vite', 'TailwindCSS', 'DaisyUI', 'Google API', 'Spotify API']}>
                    This is a Spotify web application built with React, Vite, Tailwind (with Daisy UI) and Node. It allows users to log in with their Spotify account with the help of the spotify-web-api-js wrapper. The application can view their top tracks, artists and genres and displays them in a fashionable way.
                    </ProjectsContainer>
                    <ProjectsContainer title="Computing Portfolio" imageUrl="/computing.png" tags={['React', 'Deno 2', 'TypeScript', 'Tailwind']}>
                        A full-stack CRUD web application for a school project. It is essentially a tracking system that tracks students and their corresponding violations. It displays their student information, the details of the violation as well as adding and deleting students/violations.
                        A special project passed to my CFP (Computer Fundamentals and Programming) 01 elective class in order to attain a Grade of 100.     
                    </ProjectsContainer>
                </div>
            </BasicContainer>
        </AnimatedContainer>
        </div>
    )
}

export default Hero
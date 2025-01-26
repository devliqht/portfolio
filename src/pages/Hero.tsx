import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill, RiNotionFill, RiNextjsFill } from "react-icons/ri";
import { SiVite, SiAdobeaftereffects, SiAdobelightroomclassic, SiCanva, SiTypescript, SiDeno, SiBun } from "react-icons/si";
import { DiVisualstudio, DiApple, DiGithubBadge, DiTerminal, DiMongodb, DiGoogleCloudPlatform } from "react-icons/di";
import { IoMdDownload } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

import { COriginal } from 'devicons-react';
import { CplusplusOriginal } from 'devicons-react';
import { CsharpOriginal } from 'devicons-react';
import { PythonOriginal } from 'devicons-react';
import { JavaOriginal } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { ROriginal } from 'devicons-react';

import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { ProjectsContainer, AnimatedContainer, BasicContainer } from "../components/Containers";

const Hero = () => {
    const FaIconSize: number = 50;
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
        <AnimatedContainer delay={300} className="pl-2 md:pl-0">
            <div className="flex flex-col items-start md:justify-center md:items-center" id="home">
                <h1 className="text-5xl text-[var(--white)] lexend-deca-700">Hi. Hello. Welcome.</h1>
                <h2 className="text-2xl text-gray-400 lexend-deca-300 mt-3">Matt Cabarrubias</h2>
                <img src="/me.png" alt="Me" className="w-64 h-auto rounded-full my-6" />
            </div>
        </AnimatedContainer>
        <AnimatedContainer delay={500}>
            <BasicContainer className="md:w-[70%]">
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
                    <div className="flex flex-row gap-4">
                    <Button className="w-fit" variant="outline"><DiGithubBadge></DiGithubBadge>GitHub Profile</Button>
                    <Button className="w-fit" variant="outline"><IoMdDownload></IoMdDownload>Download CV</Button>
                    </div>
                </div>
            </BasicContainer>
        </AnimatedContainer>
        <AnimatedContainer delay={700}>
            <BasicContainer outline={false}>
            <h3 className="text-4xl text-gray-300 ibm-plex-mono-medium md:text-center mb-4">Programming Languages</h3>
                <div className="flex flex-row md:justify-center gap-4 flex-wrap mb-8">
                    <COriginal size={FaIconSize} color="white"></COriginal>
                    <CplusplusOriginal size={FaIconSize} color="white"></CplusplusOriginal>
                    <CsharpOriginal size={FaIconSize} color="white"></CsharpOriginal>
                    <JavascriptOriginal size={FaIconSize} color="white"></JavascriptOriginal>
                    <JavaOriginal size={FaIconSize} color="white"></JavaOriginal>
                    <PythonOriginal size={FaIconSize} color="white"></PythonOriginal>
                    <ROriginal size={FaIconSize} color="white"></ROriginal>
                </div>
            <h3 className="text-4xl text-gray-300 ibm-plex-mono-medium md:text-center mb-4">Web</h3>
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
                <h3 className="text-4xl text-gray-300 ibm-plex-mono-medium md:text-center mb-4">Tools</h3>
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
            <BasicContainer className="border-none">
                <h3 className="text-5xl text-[var(--white)] lexend-deca-700 md:text-left mb-4 w-full" id="projects">PROJECTS</h3>
                <div className="flex flex-col md:flex-row gap-8 md:gap-2 mb-4 w-[100%]">
                    <ProjectsContainer title="OSA Violation Tracker" imageUrl="/osa.png" tags={['React', 'Node.js', 'MongoDB', 'Render.com', 'Google API', 'Express']}>
                        A full-stack CRUD web application for tracking and handling student violations. 
                    </ProjectsContainer>
                    <ProjectsContainer title="Lab Database System" imageUrl="/res.png" tags={['React', 'Node.js', 'MongoDB', 'Render.com', 'Google API', 'Express']}>
                        A full-stack web application that streamlines the documentation of laboratory sessions using QR code scanning for quick experiment identification. {/*Students can input session details, which are stored in a database and accessed by teachers through a dedicated dashboard. This project demonstrates my expertise in building functional and user-friendly solutions for educational needs. */}
                    </ProjectsContainer>
                    <ProjectsContainer title="Canticum" imageUrl="/canticum.png" tags={['React', 'Bun', 'Vite', 'TailwindCSS', 'DaisyUI', 'Google API', 'Spotify API']}>
                    This is a Spotify web application built with React, Vite, Tailwind (with Daisy UI) and Node. It allows users to log in with their Spotify account with the help of the spotify-web-api-js wrapper. The application can view their top tracks, artists and genres and displays them in a fashionable way.
                    </ProjectsContainer>
                </div>
                <div className="text-white ibm-plex-mono-medium flex flex-row justify-end">
                    <Link
                        to="/projects"
                        className="flex flex-row items-center gap-2 text-xl text-gray-400 ibm-plex-mono-medium mb-3 relative group"
                    >
                        View More Projects
                        <MdArrowOutward />
                        <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-[240px]"></span>
                    </Link>
                </div>
            </BasicContainer>
        </AnimatedContainer>
        </div>
    )
}

export default Hero
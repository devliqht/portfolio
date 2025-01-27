import { DiGithubBadge } from "react-icons/di";
import { IoMdDownload } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedContainer, BasicContainer } from "@/components/Containers";
import { ProjectsRender } from "@/components/ProjectsRender";
import SkillShowcase from "@/components/Skills";

const Hero = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
        <AnimatedContainer delay={300} className="mt-4 md:mt-0 pl-2 md:pl-0">
            <div className="flex flex-col items-start mt-4 md:justify-center md:items-center" id="home">
                <h1 className="text-5xl text-[var(--white)] lexend-deca-700">Hi. Hello. Welcome.</h1>
                <h2 className="text-2xl text-gray-400 lexend-deca-300 mt-3">Matt Cabarrubias</h2>
                <img src="/me.png" alt="Me" className="w-64 h-auto rounded-full my-6" />
            </div>
        </AnimatedContainer>
        <AnimatedContainer delay={500}>
            <BasicContainer className="md:w-[70%]" noPadding={false} paddingMobile={true}>
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
                    <a href="https://github.com/devliqht" target="_blank" rel="noopener noreferrer">
                        <Button className="w-fit" variant="outline">
                            <DiGithubBadge />
                            GitHub Profile
                        </Button>
                    </a>
                    <Button className="w-fit" variant="outline"><IoMdDownload></IoMdDownload>Download CV</Button>
                    </div>
                </div>
            </BasicContainer>
        </AnimatedContainer>
        <AnimatedContainer delay={700}>
        <SkillShowcase></SkillShowcase>
        </AnimatedContainer>
        <AnimatedContainer delay={900}>
            <BasicContainer className="border-none">
                <ProjectsRender renderCount={3}></ProjectsRender>
                <div className="text-white ibm-plex-mono-medium flex flex-row justify-start">
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
        <AnimatedContainer delay={1000}>
            <BasicContainer>
                <h1>Contact Me</h1>
            </BasicContainer>
        </AnimatedContainer>
        </div>
    )
}

export default Hero
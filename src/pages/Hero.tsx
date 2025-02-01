import { DiGithubBadge } from "react-icons/di";
import { Button } from "@/components/ui/button";
import { AnimatedContainer, BasicContainer } from "@/components/Containers";
import { ProjectsRender } from "@/components/ProjectsRender";
import SkillShowcase from "@/components/Skills";
import { useIsMobile } from "@/components/helpers/isMobile";
import Typewriter from "@/components/Typewriter";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
    const isMobile = useIsMobile();
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">
        <AnimatedContainer delay={300} className="mt-0 md:pl-0">
            <div className="flex flex-col items-start mt-4 md:justify-center md:items-center" id="home">
                <h1 className="text-4xl md:text-5xl bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent lexend-deca-700 tracking-tighter">Hi. Hello. Welcome.</h1>
                <h2 className="text-2xl text-slate-400 lexend-deca-300 mt-3 text-center">Matt Cabarrubias</h2>
                <div
                    className="relative w-64 h-64 rounded-full p-4 m-4 overflow-hidden transition ease-in-out duration-200 bg-radial-dots hover:bg-radial-dots-light bg-10px"
                    >
                    <img src="/me.png" alt="Me" className="w-full h-full object-cover rounded-full" />
                    </div>
            </div>
        </AnimatedContainer>
        <AnimatedContainer delay={500}>
            <BasicContainer className="md:w-[70%] md:border-4" noPadding={false} paddingMobile={true}>
                <div className="text-white lexend-deca-300 text-left flex flex-col justify-between">
                    <h3 className="font-bold text-2xl mb-2 tracking-tighter ibm-plex-mono-semibold bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent border-b-[1px] pb-2 border-gray-700">&gt; <Typewriter text="Hello, world." delay={150} /></h3>
                    <p className="mb-4 text-justify text-md text-slate-300 md:text-[1.105rem] md:leading-6 md:tracking-tight lexend-deca-300">
                        I am a 19 year old BSCS student at the University of San Carlos, specializing in
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
                    <Link to="/contact">
                        <Button className="w-fit" variant="outline"><IoMdContact></IoMdContact>Contact Me</Button>        
                    </Link>
                    </div>
                </div>
            </BasicContainer>
        </AnimatedContainer>
        <AnimatedContainer delay={700}>
            <SkillShowcase centred={isMobile ? false : true}></SkillShowcase>
        </AnimatedContainer>
        <AnimatedContainer delay={900}>
            <BasicContainer className="border-none">
                <ProjectsRender renderCount={3}></ProjectsRender>
            </BasicContainer>
        </AnimatedContainer>
        </div>
    )
}

export default Hero
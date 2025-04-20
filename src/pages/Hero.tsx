import { DiGithubBadge } from "react-icons/di";
import { Button } from "@/components/ui/button";
import { AnimatedContainer, BasicContainer } from "@/components/Containers";
import { ProjectsRender } from "@/components/ProjectsRender";
import SkillShowcase from "@/components/Skills";
// import Typewriter from "@/components/Typewriter";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center px-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-center">
                <AnimatedContainer delay={300}>
                    <BasicContainer className="h-full" noPadding={false} paddingMobile={false} centred={true}>
                    <div className="flex flex-col-reverse md:flex-row sm:mt-4 items-start justify-between" id="home">
                        <div className="flex flex-col md:w-[70%] md:pr-8">
                            <h1 className="text-4xl md:text-6xl text-left bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent lexend-deca-700 tracking-tighter">Hi. Hello. Welcome.</h1>
                            <h2 className="text-2xl md:text-3xl text-slate-400 lexend-deca-400 mt-3 text-left tracking-tighter">Matt Cabarrubias</h2>
                            <div className="text-white lexend-deca-300 text-left flex flex-col h-full">
                                {/* <h3 className="font-bold text-2xl mb-2 tracking-tighter ibm-plex-mono-semibold bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent border-b-[1px] pb-2 border-gray-700">&gt; <Typewriter text="Hello, world." delay={150} /></h3> */}
                                <p className="my-4 text-justify text-md text-slate-300 md:text-[1.105rem] md:leading-6 tracking-tight md:lexend-deca-300 lexend-deca-400">
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
                        </div>
                        <AnimatedContainer delay={200} fullWidth={false}>
                            <div className="relative w-64 h-64 rounded-full p-4 mb-4 sm:m-4 overflow-hidden bg-radial-dots hover:bg-radial-dots-light bg-10px">
                                {/* Animated Border */}
                                <div className="absolute inset-0 animate-spin-slow rounded-full border-[4px] border-transparent before:absolute before:inset-0 before:rounded-full before:border-[6px] before:border-transparent before:border-t-gray-300 before:border-b-gray-500 before:border-l-gray-400 before:border-r-gray-600 before:animate-particle-trail"></div>

                                {/* Profile Image */}
                                <img src="/me.png" alt="Me" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </AnimatedContainer>
                    </div>    
     
                    </BasicContainer>
                </AnimatedContainer>
            </div>
        <AnimatedContainer delay={400}>
            <BasicContainer className="border-none">
                <ProjectsRender renderCount={6}></ProjectsRender>
            </BasicContainer>
        </AnimatedContainer>

        <AnimatedContainer delay={700}>
            <SkillShowcase centred={false}></SkillShowcase>
        </AnimatedContainer>

        </div>
    )
}

export default Hero
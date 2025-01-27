import { AnimatedContainer, BasicContainer } from "@/components/Containers"

const About = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">  
            <AnimatedContainer delay={100}>
                <BasicContainer>
                <h3 className="text-3xl md:text-5xl text-[var(--white)] lexend-deca-700 md:text-left mb-4 w-full" id="about">
                    ABOUT
                </h3>
                </BasicContainer>
            </AnimatedContainer> 
        </div>
    )
}

export default About;
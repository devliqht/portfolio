import { AnimatedContainer, BasicContainer } from "@/components/Containers"

const About = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">  
            <AnimatedContainer delay={100}>
                <BasicContainer paddingMobile={true}>
                <div className="flex  md:flex-row justify-between flex-col-reverse">
                    <div className="flex flex-col">
                    <h3 className="text-2xl md:text-4xl text-[var(--white)] lexend-deca-700 mb-2 md:text-left w-full" id="about">
                        ABOUT
                    </h3>
                    <p className="text-white mb-4 text-justify md:text-left lexend-deca-400 w-[90%]">
                        I am a BSCS student at the University of San Carlos, specializing in
                        web development, UI/UX design, and video editing. As a quick learner
                        with a lifelong passion for coding, I bring creativity and technical
                        expertise to my projects. I thrive in collaborative settings, often
                        stepping up as a group leader, and I approach challenges methodically,
                        driven by curiosity and a desire to solve problems effectively.
                    </p>
                    </div>
                    <img src="/me.png" alt="Me" className="w-32 md:w-64 h-auto rounded-lg mb-4" />
                </div>
    


                </BasicContainer>
            </AnimatedContainer> 
        </div>
    )
}

export default About;
import { AnimatedContainer, BasicContainer } from "@/components/Containers"

const About = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">  
            <AnimatedContainer delay={100}>
                <BasicContainer className="border-none" paddingMobile={false}>
                <div className="flex  md:flex-row justify-between flex-col-reverse">
                    <div className="flex flex-col">
                    <h3 className="text-2xl md:text-4xl text-[var(--white)] lexend-deca-700 mb-2 md:text-left w-full" id="about">
                        BACKGROUND
                    </h3>    
                    </div>
                    <img src="/me.png" alt="Me" className="w-32 md:w-64 h-auto rounded-lg mb-4" />
                </div>
    


                </BasicContainer>
            </AnimatedContainer> 
        </div>
    )
}

export default About;
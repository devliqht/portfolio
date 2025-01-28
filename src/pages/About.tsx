import { AnimatedContainer, BasicContainer } from "@/components/Containers"

interface EducationContainerProps {
    course?: string;
    school?: string;
    year?: string;
}

const EducationContainer: React.FC<EducationContainerProps> = ({course, school, year}) => {
    return (
        <div className="flex flex-col py-4 border-[var(--dblue-ll)] border-b-2">
            <h1 className="text-white text-xl lexend-deca-400">{course}</h1>
            <p className="text-white text-justify md:text-left ibm-plex-mono-regular">
                {school}
            </p>
            <h4 className="text-white text-md">{year}</h4>
        </div>
    );
}
const About = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">  
            <AnimatedContainer delay={100}>
                <BasicContainer className="border-none" paddingMobile={false}>
                <div className="flex md:flex-row justify-between flex-col-reverse">
                    <div className="flex flex-col">
                    <h3 className="text-2xl md:text-4xl text-[var(--white)] lexend-deca-700 mb-2 md:text-left w-full" id="about">
                        BACKGROUND
                    </h3>  
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col"> 
                            <h2 className="text-2xl text-gray-400 lexend-deca-300">Education</h2>
                            <EducationContainer course="Bachelor of Science in Computer Science" school="University of San Carlos" year="2024-2027"></EducationContainer>
                            <EducationContainer course="Senior High School - STEM" school="University of San Carlos" year="2022-2024"></EducationContainer>
                            <EducationContainer course="High School" school="Don Bosco Technical College" year="2018-2022"></EducationContainer>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl text-gray-400 lexend-deca-300">Skills</h2>
                            <div className="flex flex-col py-4 border-b-2 border-[var(--dblue-ll)]">
                                <h1 className="text-white text-xl lexend-deca-400 ">Leadership Skills</h1>
                                <p className="text-gray-400 text-justify md:text-left ibm-plex-mono-regular">
                                    Research Leader (S.Y 2022-2023, 2023-2024) <br /> 
                                    Project Lead (S.Y 2023-2024) <br /> 
                                    Class Representative (S.Y 2024-2025)
                                </p>
                            </div>
                            <div className="flex flex-col py-4 border-b-2 border-[var(--dblue-ll)]">
                                <h1 className="text-white text-xl lexend-deca-400 ">Computer Skills</h1>
                                <p className="text-gray-400 text-justify md:text-left ibm-plex-mono-regular">
                                    Web Development <br /> 
                                    Video Editing <br /> 
                                    UI/UX Design <br /> 
                                    Graphic Design <br /> 
                                    Photography <br /> 
                                    Color Grading <br /> 
                                    Systems Programming (C, C++) <br /> 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </BasicContainer>
            </AnimatedContainer> 
        </div>
    )
}

export default About;
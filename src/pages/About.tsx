import { AnimatedContainer, BasicContainer } from "@/components/Containers"
import { MdOutlineWeb } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { CgIfDesign } from "react-icons/cg";
import { MdOutlineGraphicEq } from "react-icons/md";
import { MdPhoto } from "react-icons/md";
import { SiAdobelightroomclassic } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";

interface EducationContainerProps {
    course?: string;
    school?: string;
    year?: string;
    img?: string;
}

const iconSize: number = 30;
const ComputerSkills = [
    { icon: <MdOutlineWeb size={iconSize}/>, name: "Web Development" },
    { icon: <FaPhotoVideo size={iconSize}/>, name: "Video Editing" },
    { icon: <CgIfDesign size={iconSize}/>, name: "UI/UX Design" },
    { icon: <MdOutlineGraphicEq size={iconSize}/>, name: "Graphic Design" },
    { icon: <MdPhoto size={iconSize}/>, name: "Photography" },
    { icon: <SiAdobelightroomclassic size={iconSize}/>, name: "Color Grading" },
    { icon: <PiFileCpp size={iconSize}/>, name: "Systems Programming (C, C++)" },
]

const ComputerSkillsContainer: React.FC = () => {
    return (
        <>   
            {ComputerSkills.map((item, index) => (
                <div key={index} className="flex flex-row gap-6 items-center p-4 my-4 bg-[var(--dblue-l)] border-[1px] border-[var(--dblue-ll)] rounded-lg">
                    <div className="flex items-center gap-4 text-white">
                        {item.icon}
                        <span className="text-lg">{item.name}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

const EducationContainer: React.FC<EducationContainerProps> = ({course, school, year, img}) => {
    return (
        <div className="flex flex-row items-center gap-4">
            <img src={img} className="w-16 h-auto" />
                <div className="flex flex-col py-4 border-[var(--dblue-ll)] border-b-2 w-full">
                <h1 className="text-white text-xl lexend-deca-400">{course}</h1>
                <p className="text-white text-justify md:text-left ibm-plex-mono-regular">
                    {school}
                </p>
                <h4 className="text-white text-md">{year}</h4>
            </div>
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
                            <EducationContainer course="Bachelor of Science in Computer Science" school="University of San Carlos" year="2024-2027" img="/usc.png"></EducationContainer>
                            <EducationContainer course="Senior High School - STEM" school="University of San Carlos" year="2022-2024" img="/usc.png"></EducationContainer>
                            <EducationContainer course="High School" school="Don Bosco Technical College" year="2018-2022" img="/donbosco.png"></EducationContainer>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl text-gray-400 lexend-deca-300">Computer Skills</h2>
                            <div className="flex flex-col pb-4">
                                <div className="text-gray-400 text-justify md:text-left ibm-plex-mono-regular">
                                    <ComputerSkillsContainer />
                                </div>
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
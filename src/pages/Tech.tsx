import SkillShowcase from "@/components/Skills";
import { AnimatedContainer } from "@/components/Containers";

const Tech = () => {
    return (
        <div className="h-full flex flex-col justify-center md:items-center p-4 md:p-6">    
        <AnimatedContainer>
            <SkillShowcase centred={false}></SkillShowcase>
        </AnimatedContainer>
        </div>
    )
}

export default Tech;
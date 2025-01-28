import { COriginal } from 'devicons-react';
import { CplusplusOriginal } from 'devicons-react';
import { CsharpOriginal } from 'devicons-react';
import { PythonOriginal } from 'devicons-react';
import { JavaOriginal } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { ROriginal } from 'devicons-react';

import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNotionFill, RiNextjsFill } from "react-icons/ri";
import { SiVite, SiAdobeaftereffects, SiAdobelightroomclassic, SiCanva, SiTypescript, SiDeno, SiBun } from "react-icons/si";
import { DiVisualstudio, DiApple, DiGithubBadge, DiTerminal, DiMongodb, DiGoogleCloudPlatform } from "react-icons/di";

import { BasicContainer } from './Containers';
import { Tooltip } from "react-tooltip";
import { useIsMobile } from './helpers/isMobile';

interface SkillShowcaseProps {
  centred?: boolean;
}

const SkillShowcase: React.FC<SkillShowcaseProps> = ({centred = true}) => {
    const isMobile = useIsMobile();
    const IconSize: number = isMobile ? 45 : 55;

    const categories = [
      {
        title: "Programming Languages",
        items: [
          { icon: <COriginal size={IconSize}/>, name: "C" },
          { icon: <CplusplusOriginal size={IconSize}/>, name: "C++" },
          { icon: <CsharpOriginal size={IconSize}/>, name: "C#" },
          { icon: <JavascriptOriginal size={IconSize}/>, name: "JavaScript" },
          { icon: <JavaOriginal size={IconSize}/>, name: "Java" },
          { icon: <PythonOriginal size={IconSize}/>, name: "Python" },
          { icon: <ROriginal size={IconSize}/>, name: "R" },
        ],
      },
      {
        title: "Web",
        items: [
          { icon: <FaHtml5 size={IconSize}/>, name: "HTML5" },
          { icon: <FaCss3 size={IconSize}/>, name: "CSS3" },
          { icon: <SiTypescript size={IconSize}/>, name: "TypeScript" },
          { icon: <FaNodeJs size={IconSize}/>, name: "Node.js" },
          { icon: <SiDeno size={IconSize}/>, name: "Deno" },
          { icon: <SiBun size={IconSize}/>, name: "Bun" },
          { icon: <FaReact size={IconSize}/>, name: "React" },
          { icon: <RiNextjsFill size={IconSize}/>, name: "Next.js" },
          { icon: <SiVite size={IconSize}/>, name: "Vite" },
          { icon: <RiTailwindCssFill size={IconSize}/>, name: "TailwindCSS" },
        ],
      },
      {
        title: "Tools",
        items: [
          { icon: <DiVisualstudio size={IconSize}/>, name: "Visual Studio" },
          { icon: <DiApple size={IconSize}/>, name: "Apple" },
          { icon: <DiGithubBadge size={IconSize}/>, name: "GitHub" },
          { icon: <DiTerminal size={IconSize}/>, name: "Terminal" },
          { icon: <DiMongodb size={IconSize}/>, name: "MongoDB" },
          { icon: <DiGoogleCloudPlatform size={IconSize}/>, name: "Google Cloud" },
          { icon: <SiAdobeaftereffects size={IconSize}/>, name: "After Effects" },
          { icon: <SiAdobelightroomclassic size={IconSize}/>, name: "Lightroom" },
          { icon: <SiCanva size={IconSize}/>, name: "Canva" },
          { icon: <RiNotionFill size={IconSize}/>, name: "Notion" },
        ],
      },
    ];
    return (
      <BasicContainer outline={false} paddingMobile={false}>
        {categories.map((category, index) => (
          <div key={index} className={`flex flex-col ${centred ? 'md:items-center': 'items-left'}`}>
            <h3 className="text-2xl md:text-3xl text-gray-300 lexend-deca-400 border-b-[1px] md:w-fit border-gray-700 md:text-center pb-3 mb-4">
              {category.title}
            </h3>
            <div className={`flex flex-row md:items-center ${centred ? 'justify-center' : 'justify-start'} gap-4 flex-wrap mb-8`}>
              {category.items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 transition-transform hover:scale-110">
                  <div className="text-6xl text-white" data-tooltip-id={`tooltip-${item.name}`}>
                    {item.icon}
                  </div>
                  <Tooltip id={`tooltip-${item.name}`} content={item.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </BasicContainer>
    );
  };
  
  export default SkillShowcase;
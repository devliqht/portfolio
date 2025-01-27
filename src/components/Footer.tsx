import { Link } from "react-router-dom";
import { AnimatedContainer } from "./Containers";
import { FaReact, FaJs } from "react-icons/fa";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiTypescript, SiBun, SiVite, SiShadcnui } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
    const FooterIconSize: number = 35;
  return (
    <AnimatedContainer delay={1000}>
    <footer className="bg-radial-dots bg-10px text-white py-8"
        style={{
            maskImage: "linear-gradient(to top, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
            WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
        }}
    >
    <div className="flex flex-col px-4 items-center">
    <div className="container flex flex-col md:flex-row gap-8 justify-between items-start pt-8 md:p-6">
        <div className="md:text-left">
          <h4 className="text-2xl md:text-4xl font-bold lexend-deca-700">Matt Cabarrubias</h4>
          <p className="text-md md:text-lg opacity-80">© 2025 All rights reserved. Made with love ♥︎</p>
          <div className="flex flex-row my-4 gap-2">
            <FaReact size={FooterIconSize}></FaReact>
            <FaJs size={FooterIconSize}></FaJs>
            <SiTypescript size={FooterIconSize}></SiTypescript>
            <SiBun size={FooterIconSize}></SiBun>
            <SiVite size={FooterIconSize}></SiVite>
            <RiTailwindCssFill size={FooterIconSize}></RiTailwindCssFill>
            <SiShadcnui size={FooterIconSize}></SiShadcnui>
            <RiVercelFill size={FooterIconSize}></RiVercelFill>
          </div>
            <a
                href="https://github.com/devliqht/portfolio"
                className="flex flex-row items-center gap-2 text-md text-gray-400 ibm-plex-mono-medium mb-3 relative group"
            >
                View Repository on GitHub
                <MdArrowOutward />
                <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-[240px]"></span>
            </a>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-2">
                <h4 className="lexend-deca-400">Site</h4>
                <Link to="/" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    Home
                </Link>
                <a href="#about" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    About
                </a>
                <a href="#tech" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    Tech
                </a>
                <a href="#projects" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    Projects
                </a>
                <a href="#contact" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    Contact
                </a>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="lexend-deca-400">Socials</h4>
                <a href="#github" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    GitHub
                </a>
                <a href="#disord" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    Discord
                </a>
                <a href="#instagram" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    Instagram
                </a>
                <a href="#google" className="lexend-deca-400 text-gray-500 hover:text-gray-300 text-md border-transparent transition ease-in-out duration-200">
                    Google
                </a>
            </div>
        </div>
      </div>
    </div>

    </footer>
    </AnimatedContainer>

  );
};

export default Footer;
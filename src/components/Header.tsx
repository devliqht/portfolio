import { useState } from "react";
import { AnimatedContainer } from "./Containers";

import { MdImportContacts } from "react-icons/md";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky top-0 z-50 p-4 text-white bg-[var(--dblue)]">
            <AnimatedContainer delay={100} from={{opacity: 0, transform: "translateY(-20px)"}} to={{opacity: 1, transform: "translateY(0)"}}>
                <div className="inner-nav container md:mx-auto flex md:justify-center items-center">
                    <button
                        className="block md:hidden text-white focus:outline-none justify-start"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? (
                            <span className="text-4xl pl-1 ">X</span>
                        ) : (
                            <span className="text-4xl pl-1">&#9776;</span>
                        )}
                    </button>
                    <nav className="hidden md:flex md:gap-8 justify-between w-full mx-8">
                        <div className="flex flex-row gap-2 items-center">
                        <MdImportContacts size={40} color="white"></MdImportContacts>
                        <h1 className="lexend-deca-400">Matt</h1>
                        </div>
                        <div className="flex gap-4">
                            <a href="#home" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md p-4 border-transparent transition ease-in-out duration-200">
                                Home
                            </a>
                            <a href="#about" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md p-4 border-transparent transition ease-in-out duration-200">
                                About
                            </a>
                            <a href="#tech" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md p-4 border-transparent transition ease-in-out duration-200">
                                Tech
                            </a>
                            <a href="#projects" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md p-4 border-transparent transition ease-in-out duration-200">
                                Projects
                            </a>
                            <a href="#contact" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md p-4 border-transparent transition ease-in-out duration-200">
                                Contact
                            </a>
                        </div>
                    </nav>
                </div>
            </AnimatedContainer>

            {/* Mobile Navigation */}
            {menuOpen && (
                <AnimatedContainer from={{opacity: 0, transform: "translateY(-20px)"}} to={{opacity: 1, transform: "translateY(0)"}}>
                <div className="transition ease-in-out duration-200 md:hidden mt-2 flex flex-col space-y-2 bg-gray-800 p-4 rounded">
                    <a
                        href="#home"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
                </AnimatedContainer>
            )}
        </header>
    );
};

export default Header;
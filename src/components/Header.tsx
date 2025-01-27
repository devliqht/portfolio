import { useState, useEffect } from "react";
import { AnimatedContainer } from "./Containers";
import { MdImportContacts } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 80); 
      };
  
      window.addEventListener("scroll", handleScroll);

      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const handleMediaChange = (e: any) => setIsMobile(e.matches);
      setIsMobile(mediaQuery.matches); 
      mediaQuery.addEventListener("change", handleMediaChange);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className={`sticky top-0 z-50 p-4 text-white ${isMobile ? 'border-b-2 border-gray-800' : ''} bg-[var(--dblue)] ${isSticky ? "bg-[var(--dblue)]" : "bg-radial-dots" } bg-10px`}
        style={{
            maskImage:
              isSticky || isMobile
                ? "none"
                : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
            WebkitMaskImage:
              isSticky || isMobile
                ? "none"
                : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
          }}>
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
                        <div className="flex gap-8">
                            <Link to="/" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md py-4 border-transparent transition ease-in-out duration-200">
                                Home
                            </Link>
                            <a href="#about" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md py-4 border-transparent transition ease-in-out duration-200">
                                About
                            </a>
                            <Link to="/tech" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md py-4 border-transparent transition ease-in-out duration-200">
                                Tech
                            </Link>
                            <Link to="/projects" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md py-4 border-transparent transition ease-in-out duration-200">
                                Projects
                            </Link>
                            <a href="#contact" className="ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md py-4 border-transparent transition ease-in-out duration-200">
                                Contact
                            </a>
                        </div>
                    </nav>
                </div>
            </AnimatedContainer>

            {/* Mobile Navigation */}
            {menuOpen && (
                <AnimatedContainer from={{opacity: 0, transform: "translateY(-20px)"}} to={{opacity: 1, transform: "translateY(0)"}}>
                <div className="transition ease-in-out duration-200 md:hidden mt-2 flex flex-col space-y-2 p-4 rounded-xl">
                    <Link
                        to="/"
                        className="text-white hover:text-gray-300 ibm-plex-mono-medium text-xl border-b-[1px] border-gray-600 py-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-gray-300 ibm-plex-mono-medium text-xl border-b-[1px] border-gray-600 py-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/tech"
                        className="text-white hover:text-gray-300 ibm-plex-mono-medium text-xl border-b-[1px] border-gray-600 py-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Tech
                    </Link>
                    <Link
                        to="/projects"
                        className="text-white hover:text-gray-300 ibm-plex-mono-medium text-xl border-b-[1px] border-gray-600 py-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </Link>
                </div>
                </AnimatedContainer>
            )}
        </header>
    );
};

export default Header;
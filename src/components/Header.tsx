import { useState, useEffect } from "react";
import { AnimatedContainer } from "./Containers";
import { NavLink, links } from "./NavLink";
import { useIsMobile } from "./helpers/isMobile";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 80); 
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className={`sticky top-0 z-50 p-4 text-white ${isMobile ? 'shadow-xl' : ''} bg-[var(--dblue)] ${isSticky ? "bg-[var(--dblue)]" : "bg-radial-dots" } bg-10px md:p-6`}
        style={{
            maskImage:
              isSticky || menuOpen
                ? "none"
                : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0))",
            WebkitMaskImage:
              isSticky || menuOpen
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
                        <img src="/logo_transparent.svg" className="h-auto w-12"></img>
                        <h3 className="lexend-deca-400 text-xl">Matt Cabarrubias</h3>
                        </div>
                        <div className="flex gap-8">
                            {links.map((link) => (
                                <NavLink key={link.to} to={link.to} label={link.label} />
                            ))}
                        </div>
                    </nav>
                </div>
            </AnimatedContainer>
            {menuOpen && (
                <AnimatedContainer from={{opacity: 0, transform: "translateY(-20px)"}} to={{opacity: 1, transform: "translateY(0)"}}>
                <div className="transition ease-in-out duration-200 md:hidden flex flex-col space-y-2 py-4 rounded-xl">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} label={link.label} mobile={true} onClick={() => setMenuOpen(false)}/>
                    ))}
                </div>
                </AnimatedContainer>
            )}
        </header>
    );
};

export default Header;
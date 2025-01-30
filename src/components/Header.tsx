import { useState, useEffect } from "react";
import { AnimatedContainer } from "./Containers";
import { NavLink, links } from "./NavLink";
import { useIsMobile } from "./helpers/isMobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 p-4 text-white bg-[var(--dblue)] ${isSticky ? "bg-[var(--dblue)]" : "bg-radial-dots"} md:p-6 bg-10px`}
            style={{
                maskImage:
                  isSticky 
                    ? "none"
                    : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0))",
                WebkitMaskImage:
                  isSticky 
                    ? "none"
                    : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))",
              }}
        >
            <AnimatedContainer delay={100} from={{ opacity: 0, transform: "translateY(-20px)" }} to={{ opacity: 1, transform: "translateY(0)" }}>
                <div className="inner-nav container md:mx-auto flex justify-between flex-row-reverse md:flex-row items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/logo_transparent.svg" className="h-auto w-12" />
                        <h3 className="hidden md:block lexend-deca-400 text-xl">Matt Cabarrubias</h3>
                    </div>

                    {/* 📌 Render Desktop Navbar */}
                    {!isMobile && (
                        <nav className="hidden md:flex md:gap-8">
                            {links.map((link) => (
                                <NavLink key={link.to} to={link.to} label={link.label} />
                            ))}
                        </nav>
                    )}

                    {/* 📌 Render Mobile Sidebar using ShadCN */}
                    {isMobile && (
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className="text-white text-3xl">
                                    <Menu />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64 bg-[var(--dblue)] text-white">
                                <div className="flex flex-col space-y-6 p-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="lexend-deca-400 text-xl">Menu</h3>
                                        <button className="text-white text-2xl" onClick={() => setIsOpen(false)}>
                                            <X />
                                        </button>
                                    </div>
                                    <nav className="flex flex-col space-y-4">
                                        {links.map((link) => (
                                            <NavLink key={link.to} to={link.to} label={link.label} onClick={() => setIsOpen(false)} />
                                        ))}
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    )}
                </div>
            </AnimatedContainer>
        </header>
    );
};

export default Header;
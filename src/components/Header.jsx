import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="p-4 text-white">
            <div className="container mx-auto md:mt-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold text-[var(--contrastblue)]">MXTT</div>

                {/* Hamburger Button */}
                <button
                    className="block md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? (
                        <span className="text-2xl">X</span>
                    ) : (
                        <span className="text-2xl">&#9776;</span>
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:gap-8">
                    <a href="#home" className="hover:text-gray-300 text-xl p-4 rounded-3xl border-transparent hover:border-[var(--contrastblue)] border-2">
                        Home
                    </a>
                    <a href="#about" className="hover:text-gray-300 text-xl p-4 rounded-3xl border-transparent hover:border-[var(--contrastblue)] border-2">
                        About
                    </a>
                    <a href="#projects" className="hover:text-gray-300 text-xl p-4 rounded-3xl border-transparent hover:border-[var(--contrastblue)] border-2">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-gray-300 text-xl p-4 rounded-3xl border-transparent hover:border-[var(--contrastblue)] border-2">
                        Contact
                    </a>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden mt-2 flex flex-col space-y-2 bg-gray-800 p-4 rounded">
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
            )}
        </header>
    );
};

export default Header;
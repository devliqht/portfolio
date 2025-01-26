import { Link } from "react-router-dom";
import { DiGit, DiGithubBadge } from "react-icons/di";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--dblue)] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="md:text-left">
          <h4 className="text-xl font-bold lexend-deca-700">Matt Cabarrubias</h4>
          <p className="text-sm opacity-80">© 2025 All rights reserved.</p>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/projects" className="hover:underline">
            Projects
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Right Section: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <DiGithubBadge size={40}></DiGithubBadge>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
        
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
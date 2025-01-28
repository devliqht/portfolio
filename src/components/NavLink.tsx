import { Link } from "react-router-dom";

export const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/tech", label: "Tech" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

export interface NavLinkProps {
      to: string;
      label: string;
      onClick?: () => void;
      mobile?: boolean;
  }
    
export const NavLink: React.FC<NavLinkProps> = ({ to, label, onClick, mobile = false}) => {
      return (
        <Link
          to={to}
          className=
          {`${mobile ? 'text-white hover:text-gray-300 ibm-plex-mono-medium text-xl border-b-[1px] border-gray-600 py-4' 
            : 'ibm-plex-mono-regular text-gray-500 hover:text-gray-300 text-md py-4 border-transparent transition ease-in-out duration-200 relative group'}`}
          onClick={onClick}
        >
          {label}
          {mobile ? '': <span className="absolute bottom-4 left-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"></span> }
        </Link>
      );
  };
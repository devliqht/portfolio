export interface Project {
    title: string;
    imageUrl: string;
    tags: string[];
    link: string;
    description: string;
    accordionContent?: string;
  }

  const projects: Project[] = [
    {
      title: "Portfolio",
      imageUrl: "/portfolio.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://github.com/devliqht/portfolio",
      description:
        "A personalized portfolio website built with React, TypeScript, Vite and Bun. It uses TailwindCSS and some Shadcn UI components powered with React Router.",
      accordionContent: "This portfolio showcases interactive animations, reusable components, and a responsive design optimized for performance using Vite and Bun."
    },
    {
      title: "OSA Violation Tracker",
      imageUrl: "/osa.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router"],
      link: "https://github.com/devliqht/violation-tracker",
      description: "A full-stack CRUD web application for tracking and handling student violations.",
      accordionContent: "Features include role-based authentication, data visualization of violations, and integration with Google APIs for streamlined workflows."
    },
    {
      title: "Lab Database System",
      imageUrl: "/res.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router"],
      link: "https://github.com/devliqht/res-proiect",
      description: "A full-stack web application that streamlines the documentation of laboratory sessions using QR code scanning for quick experiment identification.",
      accordionContent: "Includes QR code generation and scanning, a database architecture for storing lab session details, and real-time updates."
    },
    {
      title: "Canticum",
      imageUrl: "/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Spotify API"],
      link: "https://github.com/devliqht/canticum",
      description:
        "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
      accordionContent: "Provides detailed insights into Spotify listening habits, with an elegant UI powered by DaisyUI and spotify API integration."
    },
    {
      title: "Misinformation Website",
      imageUrl: "/misinfo.png",
      tags: ["HTML", "CSS", "JavaScript", "jQuery", "AoS", "Google Forms"],
      link: "https://github.com/devliqht/tech01-website",
      description:
        "A campaign website submitted as the finals project for TECH01 class. It uses vanilla HTML and CSS, jQuery javascript to control the custom page progress bar, and the AoS (Animate-on-scroll) library for visual effects.",
      accordionContent: "A visually dynamic site with smooth scrolling animations, focused on raising awareness against misinformation."
    },
    {
      title: "Genshin Damage Calculator",
      imageUrl: "/genshin.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/devliqht/genshin-damage-calculator",
      description:
        "A simple genshin damage calculator that worked back in 2021. It used a formula provided by the Keqing discord server, now outdated. It uses Vanilla HTML, CSS and JavaScript to do the calculations. It uses Bootstrap for some of its component styles.",
      accordionContent: "Built as a practical tool for Genshin players, it features a clean Bootstrap interface for ease of use."
    },
  ];
  
  const UIDesigns: Project[] = [
    {
      title: "ISMIS Conceptual",
      imageUrl: "/ismis.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com/devliqht/ismis-matt",
      description:
        "A redesign of the USC ISMIS with vanilla html and css. It features a more glassy and modern design with hover animation styles and padding.",
      accordionContent: "This redesign aims to enhance the usability of the ISMIS platform with an aesthetic, user-centered approach."
    },
    {
      title: "DBTC Conceptual",
      imageUrl: "/dbtc.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com/devliqht/school-automate",
      description:
        "The DBTC school automate UI redesigned into a more modern, minimalistic and boxy style.",
      accordionContent: "Focused on clarity and simplicity, this design offers improved navigation and better visual hierarchy."
    },
    {
      title: "Genshin Artifact Simulator UI",
      imageUrl: "/genshinui.png",
      tags: ["HTML", "CSS", "SASS"],
      link: "https://github.com/devliqht/genshin-artifact-simulator",
      description:
        "A web redesign of the old Genshin Artifact UI dated back in 2021. Its supposed to be featured an imaginary artifact creator.",
      accordionContent: "This UI emphasizes creative freedom for users to simulate artifact builds in an immersive environment."
    },
  ];
  
  export {
    projects,
    UIDesigns
  };
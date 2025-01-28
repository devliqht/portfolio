export interface Project {
    title: string;
    imageUrl: string;
    tags: string[];
    link: string;
    description: string;
  }

const projects: Project[] = [
    {
      title: "Portfolio",
      imageUrl: "/portfolio.png",
      tags: ["React", "TypeScript", "Bun", "Vite", "TailwindCSS", "ShadcnUI", "React Router", "Vercel"],
      link: "https://github.com/devliqht/portfolio",
      description:
        "A personalized portfolio website built with React, TypeScript, Vite and Bun. It uses TailwindCSS and some Shadcn UI components powered with React Router.",
    },
    {
      title: "OSA Violation Tracker",
      imageUrl: "/osa.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router"],
      link: "https://github.com/devliqht/violation-tracker",
      description: "A full-stack CRUD web application for tracking and handling student violations.",
    },
    {
      title: "Lab Database System",
      imageUrl: "/res.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express", "React Router"],
      link: "https://github.com/devliqht/res-proiect",
      description: "A full-stack web application that streamlines the documentation of laboratory sessions using QR code scanning for quick experiment identification.",
    },
    {
      title: "Canticum",
      imageUrl: "/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Spotify API"],
      link: "https://github.com/devliqht/canticum",
      description:
        "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
    },
    {
      title: "Misinformation Website",
      imageUrl: "/misinfo.png",
      tags: ["HTML", "CSS", "JavaScript", "jQuery", "AoS", "Google Forms"],
      link: "https://github.com/devliqht/tech01-website",
      description:
        "A campaign website submitted as the finals project for TECH01 class. It uses vanilla HTML and CSS, jQuery javascript to control the custom page progress bar, and the AoS (Animate-on-scroll) library for visual effects.",
    },
    {
      title: "Genshin Damage Calculator",
      imageUrl: "/genshin.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/devliqht/genshin-damage-calculator",
      description:
        "A simple genshin damage calculator that worked back in 2021. It used a formula provided by the Keqing discord server, now outdated. It uses Vanilla HTML, CSS and JavaScript to do the calculations. It uses Bootstrap for some of its component styles.",
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
    },
    {
      title: "DBTC Conceptual",
      imageUrl: "/dbtc.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com/devliqht/school-automate",
      description:
        "The DBTC school automate UI redesigned into a more modern, minimalistic and boxy style.",
    },
    {
      title: "Genshin Artifact Simulator UI",
      imageUrl: "/genshinui.png",
      tags: ["HTML", "CSS", "SASS"],
      link: "https://github.com/devliqht/genshin-artifact-simulator",
      description:
        "A web redesign of the old Genshin Artifact UI dated back in 2021. Its supposed to be featured an imaginary artifact creator.",
    },
  ]
  
  export {
    projects,
    UIDesigns
  };
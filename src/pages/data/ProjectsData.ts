export interface Project {
    title: string;
    imageUrl: string;
    tags: string[];
    description: string;
  }

const projects: Project[] = [
    {
      title: "OSA Violation Tracker",
      imageUrl: "/osa.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express"],
      description: "A full-stack CRUD web application for tracking and handling student violations.",
    },
    {
      title: "Lab Database System",
      imageUrl: "/res.png",
      tags: ["React", "Node.js", "MongoDB", "Render.com", "Google API", "Express"],
      description: "A full-stack web application that streamlines the documentation of laboratory sessions using QR code scanning for quick experiment identification.",
    },
    {
      title: "Canticum",
      imageUrl: "/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Google API", "Spotify API"],
      description:
        "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
    },
    {
      title: "Canticum",
      imageUrl: "/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Google API", "Spotify API"],
      description:
        "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
    },
    {
      title: "Canticum",
      imageUrl: "/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Google API", "Spotify API"],
      description:
        "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
    },
    {
      title: "Canticum",
      imageUrl: "/canticum.png",
      tags: ["React", "Bun", "Vite", "TailwindCSS", "DaisyUI", "Google API", "Spotify API"],
      description:
        "This is a Spotify web application built with React, Vite, Tailwind (with DaisyUI), and Node. It allows users to log in with their Spotify account using the spotify-web-api-js wrapper. The application displays their top tracks, artists, and genres in a fashionable way.",
    },
  ];
  
  export default projects;
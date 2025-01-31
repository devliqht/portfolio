import { lazy } from "react";
const Hero = lazy(() => import("@/pages/Hero.tsx"));
const About = lazy(() => import("@/pages/About.tsx"));
const Projects = lazy(() => import("@/pages/Projects.tsx"));
const Tech = lazy(() => import("@/pages/Tech.tsx"));
const Contact = lazy(() => import("@/pages/Contact.tsx"));
const Layout = lazy(() => import("@/components/Layout.tsx"));

const routes = [
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/tech", element: <Tech /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

export default routes;
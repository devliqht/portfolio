import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "@/pages/Hero.tsx";
import Projects from "@/pages/Projects.tsx";
import Tech from "@/pages/Tech";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div>
        <Header></Header>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    </>
  )
}

export default App

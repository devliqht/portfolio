import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero.tsx";
import Projects from "./pages/Projects.tsx";

import Header from "@/components/Header.tsx";
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
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

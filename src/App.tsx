import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Hero from "./pages/Hero.tsx";
import Projects from "./pages/Projects.tsx";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div>
        <Header></Header>
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

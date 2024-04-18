import './App.css';
import Index from './Pages/Index';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Certificates from './Pages/Certificates';
import Message from "./Pages/Message";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/message" element={<Message />} />
        </Routes>
    </Router>
  );
}

export default App;

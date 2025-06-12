import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Achievements from './pages/Projects';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';
import ResumePage from './pages/ResumePage';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/ResumePage" element={<ResumePage />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
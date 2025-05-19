import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home'; 
import Food from './pages/Food'; 
import About from './pages/AboutUs';
import Tracker from './pages/Tracker';  
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} /> 
        <Route path="/aboutus" element={<About />} /> 
        <Route path="/tracker" element={<Tracker />} />  
        <Route path="/education" element={<Education />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

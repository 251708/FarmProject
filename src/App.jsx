

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 // Adjust the path as necessary
import Home from './Pages/Home'; // Create corresponding pages/components
import About from './Pages/About';
import Contact from './Pages/Contact';
import GovernmentScheme from './Pages/GovernmentScheme';
import Main from './Login/Main';
import CommunityFeed from './CommunityPost/CommunityFeed';





function App() {
  return (
    <Router>
  
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/governmentscheme" element={<GovernmentScheme />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/CommunityFeed" element={<CommunityFeed />} />
       
    
      </Routes>
    </Router>
  );
}

export default App;



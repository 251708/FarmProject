/*import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';

function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
           <Link to = "/">Home</Link>
           <Link to = "/about">About</Link>
           <Link to = "/Contact">Contact</Link>
           <Link to = "/Services">Services</Link>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Service />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'; // Adjust the path as necessary
import Home from './Pages/Home'; // Create corresponding pages/components
import About from './Pages/About';
import Contact from './Pages/Contact';
import GovernmentScheme from './Pages/GovernmentScheme';
import Marketplace from './Pages/Marketplace';
import FrameWorker from './Pages/FrameWorker';
import Cp from './Pages/Cp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/governmentscheme" element={<GovernmentScheme />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/frameworker" element={<FrameWorker />} />
        <Route path="/cp" element={<Cp />} />
      </Routes>
    </Router>
  );
}

export default App;

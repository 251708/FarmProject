import React from 'react';
import Navbar from './Navbar';
import './Farmerworker.css';



/*const fw = () => {
  return (
    <>
    <Navbar />
    <div className="text-container">
    <h1 className="h1">
      Local Workforce Locator for <span style={{ color: 'rgb(50, 160, 50)' }}>Farmers</span>
    </h1>
    <p className="para">
      Locate skilled workers nearby. <br />
      Boost farm productivity effortlessly. <br />
      Connect with local talent seamlessly.
    </p>
    <button className="btn" >
      Find Workers near you
    </button>
  </div>
  </>
  )
}

export default fw;
*/



const App = () => {
  return (
    <>
   
    <div className="text-container">
    <h1 className="h1">
      Local Workforce Locator for <span style={{ color: 'rgb(50, 160, 50)' }}>Farmers</span>
    </h1>
    <p className="para">
      Locate skilled workers nearby. <br />
      Boost farm productivity effortlessly. <br />
      Connect with local talent seamlessly.
    </p>
    <button className="btn" >
      Find Workers near you
    </button>
  </div>
  </>
  )
}


function Fw() {
  return (
    <>
    <Navbar />
    <App />
    </>
  );
}

export default Fw;





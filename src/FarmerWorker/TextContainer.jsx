import React from 'react';

const TextContainer = () => {
  const fetchAvailableWorkers = () => {
    // Fetch workers functionality here
  };

  return (
    <div className="text-container">
      <h1 className="h1">
        Local Workforce Locator for <span style={{ color: 'rgb(50, 160, 50)' }}>Farmers</span>
      </h1>
      <p className="para">
        Locate skilled workers nearby. <br /> Boost farm productivity effortlessly.
        <br /> Connect with local talent seamlessly.
      </p>
      <button onClick={fetchAvailableWorkers} className="btn">Find Workers near you</button>
    </div>
  );
};

export default TextContainer;

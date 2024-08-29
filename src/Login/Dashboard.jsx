import React from 'react';


const Dashboard = () => {
  const addListing = () => {
    alert('Add Listing function not implemented');
  };

  const logout = () => {
    alert('Logout function not implemented');
  };

  return (
    <div id="dashboard" className="db-container">
      <div className="banner-out">
        <div className="banner">
          <h1 className="head-1">
            Farmers' Direct Sales <span style={{ color: 'rgb(50, 160, 50)' }}>Marketplace</span>
          </h1>
          <p className="para">
            Empowering farmers by connecting them directly with consumers, our marketplace eliminates middlemen,
            ensuring fair prices and quality produce.
          </p>
        </div>
      </div>

      <div className="add-cont">
        <h4 style={{ marginLeft: '47px', color: 'white' }}>Add New List:</h4>
        <div className="add-new-list">
          <input type="text" id="crop" placeholder="Crop Name" className="form-control ip-box" />
          <input type="number" id="price" placeholder="Price per kg" className="form-control ip-box" />
          <input type="number" id="quantity" placeholder="Available Quantity" className="form-control ip-box" />
          <button onClick={addListing} className="btn">
            Add List
          </button>
        </div>
      </div>

      <div className="eligible-credit">
        <h4>Eligible for Credit:</h4>
        <lottie-player
          src="https://lottie.host/66dfe7ce-7eb5-42d7-8eee-f75f2b6b67d9/kz8u7g4Oz7.json"
          background="#FFFFFF"
          speed="1"
          style={{ width: '200px', height: '200px' }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <p id="credit-value"></p>
      </div>

      <div className="list-order">
        <div className="list">
          <h4>Listings:</h4>
          <ul id="listings"></ul>
        </div>

        <div className="order">
          <h4>Orders Received:</h4>
          <ul id="orders"></ul>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={logout} className="btn btn-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

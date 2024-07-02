/*import React from 'react';

const Home = () => {
  return (
    <>
      <div className="card-box">
        <div className="inner-card-box">
          <div className="card">
            <div className="card-image">
              {/* You can add an image here if needed, like <img src="path/to/image.jpg" alt="description" /> /}
            </div>
            <div className="card-content">
              <h2>CropCare AI</h2>
              <p>Introducing CropCare AI: Your partner in crop health optimization and management.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="box-text">
      <div className="text-1">
        Agriculture
        <h1 style={{ color: 'white' }}>
          Enhancing Farming with <span style={{ color: 'rgb(14, 240, 14)' }}>CropCare AI</span>
        </h1>
        <p style={{ color: 'white' }}>
          Quickly identifies crop diseases from uploaded images and suggests remedies.
          <br />
          Empowering farmers with actionable solutions,
          <br />
          it ensures healthy yields.
        </p>
      </div>
      <a href="http://127.0.0.1:5000">
        <button className="btn">Click me</button>
      </a>
    </div>
  
    </>
  );
};

export default Home;

*/
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
const Home = () => {
  return (
    <>
     
    

    <div className="card-box">
      <div className="inner-card-box">
        <div className="card">
          <div className="card-image">
            <Player 
              src="https://lottie.host/bcedae99-1765-4784-88e9-e5e8a38be0df/NZfqiTKmOY.json"
              background="transparent" // Use "transparent" instead of "##fff"
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
              direction={1}
              mode="normal"
            />
          </div>
          <div className="card-content">
            <h2>CropCare AI</h2>
            <p>Introducing CropCare AI: Your partner in crop health optimization and management.</p>
          </div>
        </div>
      </div>

      <div className="box-text">
        <div className="text-1">
          Agriculture
          <h1 style={{ color: 'white' }}>
            Enhancing Farming with <span style={{ color: 'rgb(14, 240, 14)' }}>CropCare AI</span>
          </h1>
          <p style={{ color: 'white' }}>
            Quickly identifies crop diseases from uploaded images and suggests remedies. <br />
            Empowering farmers with actionable solutions, <br />
            it ensures healthy yields.
          </p>
        </div>
        <a href="http://127.0.0.1:5000">
          <button className="btn">Click me</button>
        </a>
      </div>
    </div>

    <div className="card-box">
      <div className="inner-card-box inner-box-2">
        <div className="box-text">
          <h1>
            Unlock Opportunities with <span style={{ color: 'rgb(14, 240, 14)' }}>AgricSchemes</span>
          </h1>
          <p>
            AgricSchemes Portal streamlines access to government agricultural schemes,
            empowering farmers with vital resources. From subsidies to grants,
            it optimizes farming operations for sustainable growth.
          </p>
          <a href="./governmentscheme.html">
            <button className="btn">Click me</button>
          </a>
        </div>

        <div className="card">
          <div className="card-image">
            <Player
              src="https://lottie.host/47540543-8849-4fab-94f7-e930f424d7ad/GMj5b2KwrJ.json"
              background="transparent"
              speed={1}
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            />
          </div>
          <div className="card-content">
            <h2>AgriSchemes Connect</h2>
            <p>
              Explore AgricSchemes: Your gateway to essential government
              agricultural programs and subsidies.
            </p>
          </div>
        </div>
      </div>
    </div>


    
    
    <div className="card-box">
      <div className="inner-card-box">
        <div className="card">
          <div className="card-image">
            <Player 
              src="https://lottie.host/5337bd7f-f7e7-4f5c-b446-0e3244963e0f/o0BPESNPdi.json"
              background="transparent" // Use "transparent" instead of "##FFFFFF"
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
              direction={1}
              mode="normal"
            />
          </div>
          <div className="card-content">
            <h2>FarmersFirst Market</h2>
            <p>Welcome to FarmersFirst Market: Your direct link to selling farm produce and accessing fair prices.</p>
          </div>
        </div>
      </div>

      <div className="box-text">
        <h1>
          Grower's Hub: <span style={{ color: 'rgb(14, 240, 14)' }}>FarmersFirst Market</span>
        </h1>
        <p>
          Connects growers directly, eliminating middlemen for fair prices and fresh produce access. <br />
          Transforming the marketplace, empowering growers and <br />
          buyers with transparency and efficiency.
        </p>
        <a href="./marketPlace.html">
          <button className="btn">Click me</button>
        </a>
      </div>
    </div>

      <div className="card-box">
        <div className="inner-card-box inner-box-2">
          <div className="box-text">
            <h1>Smart Farming Tool: <span style={{ color: 'rgb(14, 240, 14)' }}>Crop Recommendation Tool</span></h1>
            <p>Your Smart Farming Companion. Offering tailored crop advice, profit insights, and subsidy details, empowering informed decisions based on regions for optimal agricultural productivity and profitability.</p>
            <a href="http://127.0.0.1:5001"><button className="btn">Click me</button></a>
          </div>
          <div className="card">
            <div className="card-image">
              <Player
                src="https://lottie.host/16b8627d-522c-47f0-b4f1-7c6cc3f831df/EfZ2zrNDFq.json"
                background="transparent"
                speed={1}
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              />
            </div>
            <div className="card-content">
              <h2>Crop Recommendation Tool</h2>
              <p>Welcome to FarmersFirst Market: Your direct link to selling farm produce and accessing fair prices.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-box">
      <div className="inner-card-box">
        <div className="card">
          <div className="card-image">
            <Player 
              src="https://lottie.host/86e71321-0214-442e-946b-17c56757cf7c/daHn23II37.json"
              background="#FFF0D9" // Use "#FFF0D9" for background color
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
              direction={1}
              mode="normal"
            />
          </div>
          <div className="card-content">
            <h2>The Khet Crew</h2>
            <p>Your nearby workers hub for farm support based on your location</p>
          </div>
        </div>
      </div>

      <div className="box-text">
        <h1>
          Find Workers Fast: <span style={{ color: 'rgb(14, 240, 14)' }}>The Khet Crew</span>
        </h1>
        <p>
          Links farmers with local helpers for streamlined farm tasks. <br />
          With location-based matching, it ensures efficient labor sourcing within a specified location. <br />
          Simplify farm management with KhetCrew!
        </p>
        <a href="../html/framerworker.html">
          <button className="btn">Click me</button>
        </a>
      </div>
    </div>


    <div className="card-box">
      <div className="inner-card-box">
        <div className="card">
          <div className="card-image">
            <Player 
              src="https://lottie.host/d996da07-734a-40d1-8f56-0b2fe6d68190/pWygxhRe8Z.json"
              background="#FFFFFF" // Use "#FFFFFF" for background color
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
              direction={1}
              mode="normal"
            />
          </div>
          <div className="card-content">
            <h2>Kisan Samvad</h2>
            <p>Uniting farmers nationwide, fostering dialogue, and cultivating solutions for agricultural prosperity.</p>
          </div>
        </div>
      </div>

      <div className="box-text">
        <h1>
          Community page: <span style={{ color: 'rgb(14, 240, 14)' }}>Kisan Samvad</span>
        </h1>
        <p>
          Kisan Samvad: Platform to unite with farmers across the nation, <br />
          exchange ideas, troubleshoot challenges, and cultivate <br />
          solutions for a thriving agricultural community
        </p>
        <a href="./cp.html">
          <button className="btn">Click me</button>
        </a>
      </div>
    </div>

      <div className="card-box">
        <div className="inner-card-box inner-box-2">
          <div className="box-text">
            <h1>Modern Farming: <span style={{ color: 'rgb(14, 240, 14)' }}>GreenFarming Toolbox</span></h1>
            <p>GreenFarming Toolbox: Your comprehensive guide to sustainable farming practices, encompassing organic methods, modern innovations, and environmental stewardship.</p>
            <a href="./cp.html"><button className="btn">Click me</button></a>
          </div>
          <div className="card">
            <div className="card-image">
              <Player
                src="https://lottie.host/8299be5b-f609-4f7d-b093-05668e06ca74/eQNI7JFtSS.json"
                background="transparent"
                speed={1}
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              />
            </div>
            <div className="card-content">
              <h2>GreenFarming Toolbox</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    

      
    </>
  )
}

export default Home



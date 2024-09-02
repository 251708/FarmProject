import React, { useState } from 'react';
import Nav2 from './Nav2';
import './Mp.css';
//import './style.css';
//import 'bootstrap/dist/css/bootstrap.min.css'
function Mp() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const showLoginForm = () => {
    setIsLoginFormVisible(true);
  };

  const showSignupForm = () => {
    setIsLoginFormVisible(false);
  };

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signup email:', signupEmail);
    console.log('Signup password:', signupPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login email:', loginEmail);
    console.log('Login password:', loginPassword);
  };

  return (
    <>

   <Nav2 />
    <div className="login-div">
      <h1 style={{ color: 'white' }} id="heading">
        Farmers <span style={{ color: 'rgb(8, 253, 8)' }}>Login</span> Page
      </h1>
      <div id="login-container" className="login-form" style={{ display: isLoginFormVisible ? 'block' : 'none' }}>
        <h1>Farmer Login</h1>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="input"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="input"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <div className="btn-div">
          <button onClick={handleLogin} className="btn">
            Login
          </button>
        </div>
        <p style={{ color: 'white' }}>
          Don't have an account? <a href="#" onClick={showSignupForm} style={{ color: 'white', marginLeft: '10px' }}>Sign up here</a>
        </p>
      </div>

      <div id="signup-container" className="login-form" style={{ display: !isLoginFormVisible ? 'block' : 'none' }}>
        <h1>Farmer Signup</h1>
        <input
          type="email"
          id="signup-email"
          placeholder="Email"
          className="input"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
        />
        <input
          type="password"
          id="signup-password"
          placeholder="Password"
          className="input"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
        />
        <div className="btn-div">
          <button onClick={handleSignup} className="btn">
            Signup
          </button>
        </div>
        <p style={{ color: 'white' }}>
          Already have an account? <a href="#" onClick={showLoginForm} style={{ color: 'white', marginLeft: '10px' }}>Login here</a>
        </p>
      </div>
    </div>
    </>
  );
}

export default Mp;
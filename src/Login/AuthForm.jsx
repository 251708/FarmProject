/*import React, { useState } from 'react';


const AuthForm = ({ onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(true);

  const showSignupForm = (e) => {
    e.preventDefault();
    setIsLogin(false);
  };

  const showLoginForm = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <div className="login-div">
      <h1 style={{ color: 'white' }} id="heading">
        Farmers <span style={{ color: 'rgb(8, 253, 8)' }}>Login</span> Page
      </h1>
      {isLogin ? (
        <div id="login-container" className="login-form">
          <h1 style={{ color: 'white' }}>Farmer Login</h1>
          <input type="email" id="email" placeholder="Email" className="input" />
          <input type="password" id="password" placeholder="Password" className="input" />
          <div className="btn-div">
            <button onClick={onLogin} className="btn">
              Login
            </button>
          </div>
          <p style={{ color: 'white' }}>
            Don't have an account?
            <a href="#" onClick={showSignupForm} style={{ color: 'white', marginLeft: '10px' }}>
              Sign up here
            </a>
          </p>
        </div>
      ) : (
        <div id="signup-container" className="login-form">
          <h1>Farmer Signup</h1>
          <input type="email" id="signup-email" placeholder="Email" className="input" />
          <input type="password" id="signup-password" placeholder="Password" className="input" />
          <div className="btn-div">
            <button onClick={onSignup} className="btn">
              Signup
            </button>
          </div>
          <p>
            Already have an account?
            <a href="#" onClick={showLoginForm} style={{ color: 'white', marginLeft: '10px' }}>
              Login here
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
*/
import React from 'react'

const AuthForm = () => {
  return (
    <div>
      
    </div>
  )
}

export default AuthForm


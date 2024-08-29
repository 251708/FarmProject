import React, { useState } from 'react';
import Nav from './Nav';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';


const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Nav />
      {isAuthenticated ? <Dashboard /> : <AuthForm onLogin={handleLogin} onSignup={handleSignup} />}
    </div>
  );
};

export default Main;

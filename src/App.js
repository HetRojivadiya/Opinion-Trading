import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import AuthForm from './components/Authentication/AuthForm.js';
import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated && <Header />} 
      <HashRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <AuthForm onLogin={handleLogin} />} />
        <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
        {/* Add other routes here */}
      </Routes>
      </HashRouter>
      {isAuthenticated && <Footer />}
    </div>
  );
};

export default App;

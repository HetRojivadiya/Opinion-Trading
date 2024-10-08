import React from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import AuthForm from './components/Authentication/AuthForm.js';
import AboutPage from './components/HomePage/AboutPage.js';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    navigate('/home'); 
  };

  const isAuthPage = location.pathname === "/";


  return (
    <div className="App">
      {!isAuthPage && <Header />}
     
      <Routes>
        <Route path="/" element={<AuthForm onLogin={handleLogin} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
     
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default App;

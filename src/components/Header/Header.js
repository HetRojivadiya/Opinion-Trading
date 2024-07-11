import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <h1 className="text-3xl">Opinion Trading</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

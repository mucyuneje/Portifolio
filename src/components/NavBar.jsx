import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          MyPortfolio
        </div>
        <div className="space-x-4">
          <a href="#home" className="text-blue-300 hover:text-white">Home</a>
          <a href="#about" className="text-blue-300 hover:text-white">About</a>
          <a href="#projects" className="text-blue-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-blue-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

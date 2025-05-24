import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a className="text-2xl font-['Pacifico'] text-primary" href="#">
          John A.
        </a>
        <div className="hidden md:flex space-x-8">
          <a className="text-gray-800 hover:text-primary font-medium transition" href="#home">
            Home
          </a>
          <a className="text-gray-800 hover:text-primary font-medium transition" href="#about">
            About
          </a>
          <a className="text-gray-800 hover:text-primary font-medium transition" href="#skills">
            Skills
          </a>
          <a className="text-gray-800 hover:text-primary font-medium transition" href="#projects">
            Projects
          </a>
          <a className="text-gray-800 hover:text-primary font-medium transition" href="#experience">
            Experience
          </a>
          <a className="text-gray-800 hover:text-primary font-medium transition" href="#contact">
            Contact
          </a>
        </div>
        <button className="md:hidden flex items-center justify-center w-10 h-10">
          <i className="ri-menu-line ri-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

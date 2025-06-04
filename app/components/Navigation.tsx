'use client';
import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="text-2xl text-black font-bold font-['Pacifico'] text-primary" href="#">
          Zin Ko Naing
        </a>

        {/* Desktop Menu */}
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

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-800 hover:text-primary transition"
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line ri-xl`}></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4">
          <a className="block text-gray-800 hover:text-primary font-medium transition" href="#home">
            Home
          </a>
          <a
            className="block text-gray-800 hover:text-primary font-medium transition"
            href="#about"
          >
            About
          </a>
          <a
            className="block text-gray-800 hover:text-primary font-medium transition"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="block text-gray-800 hover:text-primary font-medium transition"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="block text-gray-800 hover:text-primary font-medium transition"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="block text-gray-800 hover:text-primary font-medium transition"
            href="#contact"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

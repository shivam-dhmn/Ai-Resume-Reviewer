"use client";

import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-white text-black hidden md:block">
        <nav className="flex items-center justify-between w-full px-6 py-4">
          <h1 className="logo text-xl font-bold cursor-pointer">ResumeAI</h1>
          <ul className="nav-links flex gap-8 text-gray-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="login-signup flex gap-4">
            <button className="login-btn text-blue-600 font-bold px-4 py-2 hover:text-blue-500 transition-colors duration-200">
              Login
            </button>
            <button className="signup-btn bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}

      <div className="md:hidden">
        <div className="md:hidden">
          <nav className="mobile-navbar flex justify-between items-center px-4 py-3 bg-white text-black">
            <h1 className="logo text-2xl font-bold">ResumeAI</h1>
            <div className="hamburger-menu">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                
                className="hamburger-btn text-black"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
        {isMenuOpen && (
          <div>
            <ul className="nav-links p-4 space-y-2 bg-cyan-100 text-black border-t border-gray-200 hover:bg-white transform transition-colors duration-200 rounded">
              {navItems.map((item, index) => (
                <li
                  key={index}
                >
                  <a
                    href={item.href}
                    className=" w-full block px-4 py-2  hover:bg-white  rounded transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;

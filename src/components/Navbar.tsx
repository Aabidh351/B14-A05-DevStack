import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="hidden md:flex items-center justify-between">

          <div className="flex items-center">
            <img src={logo} alt="Brand Logo" className="h-10 w-auto object-contain" />
          </div>

          <div className="flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-[#D91B7E]">
            Home
            </a>
            <a href="/technologies" className="text-gray-700 hover:text-[#D91B7E]">
              Technologies
            </a>
            <a href="/projects" className="text-gray-700 hover:text-[#D91B7E]">
              Projects
            </a>
            <a href="/about" className="text-gray-700 hover:text-[#D91B7E]">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-[#D91B7E]">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-gray-700 hover:text-[#D91B7E]">
              Sign In
            </button>
            <button className="px-5 py-2 text-white bg-[#D91B7E] rounded-3xl hover:bg-[#8d3de0]">
              Sign Up
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between">

            <div className="flex justify-start">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <img src={hamburger} alt="Menu"
                  className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center">
              <img src={logo} alt="Brand Logo" className="h-9 w-auto object-contain"/>
            </div>

            <div className="flex justify-end items-center gap-2">
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:text-[#D91B7E]">
                Sign In
              </button>

              <button className="px-3 py-1.5 text-sm text-white bg-[#D91B7E] rounded-md hover:bg-[#8D3DE0]">
                Sign Up
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
              <a href="/" className="text-gray-700 hover:text-[#D91B7E]">
                Home
              </a>
              <a href="/technologies" className="text-gray-700 hover:text-[#D91B7E]">
                Technologies
              </a>
              <a href="/projects" className="text-gray-700 hover:text-[#D91B7E]">
                Projects
              </a>
              <a href="/about" className="text-gray-700 hover:text-[#D91B7E]" >
                About
              </a>
              <a href="/contact" className="text-gray-700 hover:text-[#D91B7E]" >
                Contact
              </a>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
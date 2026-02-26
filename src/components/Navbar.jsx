/*import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white-900 p-4 text-white grid grid-cols-3 items-center fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg ">
      <Link to="/" className="justify-self-start font-bold text-xl"><span className='text-red-200'>spot</span><span className='text-blue-500'>Hub/&gt;</span></Link>
      <div className='justify-self-center bg-blue-900 rounded-full px-4 py-2 shadow-lg background-blur-lg'>
        <Link 
        to="/" 
        className="inline-block text-1xl mx-2 font-semibold text-white transition duration-300 hover:scale-110 hover:text-red-500"
        >
          Home
        </Link>

        <Link 
        to="/brand" 
        className="inline-block text-1xl mx-2 font-semibold text-white transition duration-300 hover:scale-110 hover:text-red-500"
        >
          Brand
        </Link>


        <Link 
        to="/design" 
        className="inline-block text-1xl mx-2 font-semibold text-white transition duration-300 hover:scale-110 hover:text-red-500"
        >
          Design
        </Link>

        <Link 
        to="/automate" 
        className="inline-block text-1xl mx-2 font-semibold text-white transition duration-300 hover:scale-110 hover:text-red-500"
        >
          Automate
        </Link>

        <Link 
        to="/build" 
        className="inline-block text-1xl mx-2 font-semibold text-white transition duration-300 hover:scale-110 hover:text-red-500"
        >
          Build
        </Link>


        <Link 
        to="/contact" 
        className="inline-block text-1xl mx-2 font-semibold text-white transition duration-300 hover:scale-110 hover:text-red-500"
        >
          Contact
        </Link>

      </div>
      <div className='justify-self-end'>🥹</div>
    </nav>
  );
};*/


import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
"relative text-sm lg:text-base mx-3 font-medium text-gray-300 transition duration-300 hover:text-blue-400";
  const NavLinks = ({ closeMenu }) => (
    <>
      <Link to="/" className={linkStyle} onClick={closeMenu}>
        <span className="relative group">
        Home
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link to="/brand" className={linkStyle} onClick={closeMenu}>
        <span className="relative group">
        Brand
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link to="/design" className={linkStyle} onClick={closeMenu}>
        <span className="relative group">
        Design
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link to="/automate" className={linkStyle} onClick={closeMenu}>
        <span className="relative group">
        Automate
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link to="/build" className={linkStyle} onClick={closeMenu}>
        <span className="relative group">
        Build
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link to="/contact" className={linkStyle} onClick={closeMenu}>
        <span className="relative group">
        Contact
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
    </>
  );

  /*const closeMenu = () => {
    setIsOpen(false);
  };*/

  return (
            <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-[#1F2937] px-6 py-3">
              {/* Wrap the content in a container that handles the spacing */}
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Logo (Left) */}
                <Link to="/" className="font-bold text-xl">
                  <span className="text-gray-200">spot</span>
                  <span className="text-blue-500 font-extrabold">Hub/&gt;</span>
                </Link>

                {/* Desktop Nav (Center) */}
                <div className="hidden md:flex bg-[#111827] border border-[#1F2937] rounded-full px-8 py-2 shadow-lg shadow-black/40">
                  <NavLinks />
                </div>

                {/* Right Section (Right) */}
                <div className="flex items-center gap-4">
                  {/* Emoji (desktop only) */}
                  <div className="hidden md:block">🥹</div>

                  {/* Hamburger (mobile only) */}
                  <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? "✖" : "🫳🏿"}
                  </button>
                </div>
              </div>

              {/* Mobile Menu (Stays outside the flex row so it drops down below) */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-6 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 text-center shadow-xl shadow-black/40">
                  <NavLinks closeMenu={() => setIsOpen(false)} />
                </div>
              </div>
            </nav>
  );
};



  
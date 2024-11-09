import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = ({ setOpen,setOpenLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#FFFFFF33]");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-gray-700");
      } else {
        setBgColor("bg-[#FFFFFF33]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${bgColor}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/logo.png" className="h-20" alt="Logo" />
        </a>
        
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm  text-white rounded-lg cursor-pointer dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Eng
            <img src="assets/down.svg" alt="" />
          </button>
          
          <div
            className="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu"
          >
          
          </div>
          

          <div className="hidden lg:flex space-x-2">
            <button className="px-2 py-2 text-sm font-medium text-white rounded-lg" onClick={() => setOpenLogin(true)}>Login</button>
            <button className="px-6 py-2 text-sm font-medium text-white bg-[#FA8B02] rounded-3xl" onClick={() => setOpen(true)}>Sign Up</button>
          </div>


          <button
            onClick={toggleMenu} 
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        

        <div className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"} w-full lg:flex md:w-auto md:order-1`} id="navbar-language">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  bg-gray-600 md:bg-transparent rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 ">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-[#FA8B02] rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/aboutus" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent  text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent  text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tour Packages</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent  text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
            </li>
            <li>
            <a href="#" className="block md:hidden py-2 px-3 text-white rounded md:bg-transparent " aria-current="page" onClick={() => setOpenLogin(true)}>Login</a>
            </li>
            <li>
            <a href="#" className="block  md:hidden py-2 px-3 text-white rounded md:bg-transparent " aria-current="page" onClick={() => setOpen(true)}>Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

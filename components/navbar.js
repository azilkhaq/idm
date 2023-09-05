import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-tua">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="images/IDM Logo.png" className="h-8 mr-3" alt="IDM Logo" />
        </a>
        <button
          onClick={toggleNavbar}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className={`w-5 h-5 ${isOpen ? 'hidden' : 'block'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:w-auto md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-blue-tua rounded-lg bg-blue-tua md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/#"
                passHref
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                passHref
                className="block py-2 pl-3 pr-4 text-white-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#service"
                passHref
                className="block py-2 pl-3 pr-4 text-white-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
               href="/#portofolio"
               passHref
                className="block py-2 pl-3 pr-4 text-white-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/#products"
                passHref
                className="block py-2 pl-3 pr-4 text-white-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

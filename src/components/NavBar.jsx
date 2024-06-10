import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);
  return (
    <>
      <header className="flex flex-wrap items-center px-4 py-4 bg-black shadow-md lg:px-16">
        {/* mobile */}
        <div className="flex items-center justify-between flex-1">
          <Link to="/" className="text-xl">
            Company
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="block pointer-cursor md:hidden">
          <button className="" onClick={toggle}>
            <svg
              className="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>

          {isMenuOpen ? (
            <ul className="flex-col pt-4 text-base text-white">
              <li>
                <Link className="block px-0 py-3 md:p-4" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="block px-0 py-3 md:p-4" to="/contact">
                  Treatments
                </Link>
              </li>
              <li>
                <Link className="block px-0 py-3 md:p-4" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="block px-0 py-3 mb-2 md:p-4 md:mb-0"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          ) : null}
        </label>

        {/* desktop */}
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <nav>
            <ul className="items-center justify-between pt-4 text-base text-white md:flex md:pt-0">
              <li>
                <Link className="block px-0 py-3 md:p-4" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="block px-0 py-3 md:p-4" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="block px-0 py-3 md:p-4" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="block px-0 py-3 mb-2 md:p-4 md:mb-0"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;

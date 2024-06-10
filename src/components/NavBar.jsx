import React, { useState } from "react";

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
          <a href="#" className="text-xl">
            Company
          </a>
        </div>

        <label for="menu-toggle" className="block pointer-cursor md:hidden">
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
            <ul className="flex-col pt-4 text-base text-white ">
              <li>
                <a className="block px-0 py-3 md:p-4" href="#">
                  AboutUs
                </a>
              </li>
              <li>
                <a className="block px-0 py-3 md:p-4" href="#">
                  Treatments
                </a>
              </li>
              <li>
                <a className="block px-0 py-3 md:p-4" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="block px-0 py-3 mb-2 md:p-4 md:mb-0" href="#">
                  Contact Us
                </a>
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
                <a className="block px-0 py-3 md:p-4" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="block px-0 py-3 md:p-4" href="#">
                  AboutUs
                </a>
              </li>

              <li>
                <a className="block px-0 py-3 md:p-4" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="block px-0 py-3 mb-2 md:p-4 md:mb-0" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* mobile Menu */}
        </div>
      </header>
    </>
  );
}

export default NavBar;

import React from "react";
import ImgHero from "../../image/hero.png";
import "tailwindcss/tailwind.css";
import "./Header.css";
function Header() {
  return (
    <>
      <section
        className="relative flex items-center justify-center h-screen text-white bg-center bg-cover hero"
        style={{ backgroundImage: `url(${ImgHero})` }}
      >
        <div className="container px-6 mx-auto text-center md:text-left md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-24 content animate-fadeIn md:mt-0">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              A Facilities Management Company For Every Type Of Business
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              By bringing on-board our top-class Facilities Management services,
              you can rest assured that everything is taken care of. From fire
              safety and IES compliance to general maintenance and repairs, our
              team of professionals can handle it all.
            </p>
            <a
              href="#"
              className="px-6 py-3 text-lg text-white transition-all duration-300 bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Free Consultation
            </a>
          </div>
          <div className="hidden md:block">
            {/* You can add another image or content here */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

import React from "react";
import img from "../../image/image.png"; // Replace with your image
import "./Experts.css"; // Custom CSS file for orientation-specific styles

function Experts() {
  return (
    <div className="py-20 pb-10 bg-black">
      <div className="container grid items-center grid-cols-1 mx-auto md:grid-cols-2 ">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-3/4 rounded-r-lg md:w-full"
            src={img}
            alt="Experts"
          />
        </div>
        <div className="px-6 mt-10 text-gray-200 md:mt-0 md:ml-10 md:text-left md:px-0">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl landscape:text-5xl">
            Efficiently Managing Your Facilities with Certified Expertise
          </h1>
          <p className="mb-4 text-lg md:text-xl landscape:text-2xl">
            We are passionate about providing high-quality support services and
            strive to create sustainable practices and partnerships through our
            work.
          </p>
          <p className="text-lg md:text-xl landscape:text-2xl">
            No matter the sector, size or budget, we can accommodate your
            management and maintenance requirements from top to bottom to
            deliver our high-level services and consolidate your outsourcing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experts;

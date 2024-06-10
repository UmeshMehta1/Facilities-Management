import React from "react";
import img1 from "./image/1.png";
import img2 from "./image/image copy 2.png";
import img3 from "./image/image copy 3.png";
import img4 from "./image/image copy 4.png";
import img5 from "./image/image copy 5.png";

function Services() {
  return (
    <>
      <section className="bg-teal-100 py-7">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-3xl font-bold text-teal-700">
            Efficiently Managing Your Facilities with Certified Expertise
          </h1>
          <h2 className="mb-4 text-xl font-semibold text-teal-600">
            Tailored Services to Suit You
          </h2>
          <p className="px-5 leading-7 text-gray-700 md:px-10">
            Here at Global Facilities, we provide a comprehensive Facilities
            Management solution for all your business needs. Whether you require
            everyday essential building services or one-of-a-kind sourcing, we
            can tailor a package to suit your individual requirements.
          </p>
        </div>
        <div className="container grid gap-6 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img1} alt="Fire Safety" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-teal-700">
                Fire Safety
              </div>
              <p className="text-base text-gray-700">
                Ensuring fire safety measures are put in place, prioritized and
                managed efficiently.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img2} alt="Security" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-teal-700">
                Security
              </div>
              <p className="text-base text-gray-700">
                Implementing comprehensive security solutions to keep your
                facilities and personnel safe.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img3} alt="Maintenance" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-teal-700">
                Maintenance
              </div>
              <p className="text-base text-gray-700">
                Proactive maintenance plans to keep your facilities functioning
                optimally.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img4} alt="Cleaning" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-teal-700">
                Cleaning
              </div>
              <p className="text-base text-gray-700">
                Comprehensive cleaning services to maintain a clean and hygienic
                environment.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img5} alt="Landscaping" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-teal-700">
                Landscaping
              </div>
              <p className="text-base text-gray-700">
                Professional landscaping services to keep your outdoor areas
                looking pristine.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

import React from "react";
import img1 from "./image/1.png";
import img2 from "./image/image copy 2.png";
import img3 from "./image/image copy 3.png";
import img4 from "./image/image copy 4.png";
import img5 from "./image/image copy 5.png";

function Services() {
  return (
    <>
      <section className="bg-white">
        <div className="py-12 text-center bg-gray-100">
          <h2 className="mb-5 text-sm font-bold text-gray-500">
            EFFICIENTLY MANAGING YOUR FACILITIES WITH CERTIFIED EXPERTISE
          </h2>
          <h1 className="mb-5 text-4xl font-bold text-gray-900">
            Tailored services to suit you
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-500">
            Here at Global Facilities, we provide a comprehensive Facilities
            Management solution for all your business needs. Whether you require
            everyday essential building services or one-of-a-kind sourcing, we
            can tailor a package to suit your individual requirements.
          </p>
          <button className="px-6 py-3 font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-600">
            Our Range Of Services
          </button>
        </div>

        <div className="container grid gap-6 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img1} alt="Fire Safety" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-teal-700">
                Fire Safety
              </div>
              <p className="text-base text-gray-900">
                Ensuring fire safety measures are put in place, prioritized and
                managed efficiently.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-600">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img2} alt="Security" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Security
              </div>
              <p className="text-base text-gray-700">
                Implementing comprehensive security solutions to keep your
                facilities and personnel safe.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-600">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img3} alt="Maintenance" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Maintenance
              </div>
              <p className="text-base text-gray-700">
                Proactive maintenance plans to keep your facilities functioning
                optimally.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-600">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img4} alt="Cleaning" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Cleaning
              </div>
              <p className="text-base text-gray-700">
                Comprehensive cleaning services to maintain a clean and hygienic
                environment.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-600">
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img5} alt="Landscaping" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Landscaping
              </div>
              <p className="text-base text-gray-900">
                Professional landscaping services to keep your outdoor areas
                looking pristine.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-600">
                Read More
              </button>
            </div>
          </div>

          <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
            <img className="w-full" src={img5} alt="Landscaping" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Landscaping
              </div>
              <p className="text-base text-gray-900">
                Professional landscaping services to keep your outdoor areas
                looking pristine.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <button className="px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-600">
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

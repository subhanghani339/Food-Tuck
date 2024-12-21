import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className='text-white text-right bg-red-200 mb-14 py-10 bg-[url("/images/home/poster.svg")] bg-cover bg-center'>
      <div className="container min-h-[400] flex flex-col justify-center">
        <h3 className="special-text text-2xl text-brand-500">
          Restaurant Active Process
        </h3>
        <h4 className="text-2xl md:text-4xl max-w-lg ml-auto mt-2 mb-5">
          <span className="text-brand-500">We</span> Document Every Food Bean
          Process untill it is saved
        </h4>

        <p className="max-w-2xl ml-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>

        <div className="mt-12 flex  gap-5 justify-end">
          <button className="bg-transparent border border-brand-500 rounded-full px-6 py-2">
            Read More
          </button>

          <button className="flex gap-2 items-center">
            <div className="bg-brand-500 w-10 h-10 rounded-full flex items-center justify-center">
              <CiPlay1 />
            </div>
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

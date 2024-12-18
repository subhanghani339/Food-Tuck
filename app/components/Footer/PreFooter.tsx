import React from "react";

const PreFooter = () => {
  return (
    <div className="container">
      <div className="flex justify-between gap-4 flex-wrap py-10 border-b border-brand-500 max-w-6xl mx-auto">
        <div>
          <h4 className="font-bold text-3xl">
            <span className="text-brand-500">St</span>ill You Need Our Support ?
          </h4>
          <p className="mt-2">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>

        <div className="flex flex-col md:flex-row md:w-max w-full rounded-md overflow-hidden bg-brand-500">
          <input 
          type="email" 
          placeholder="Enter Your Email" 
          className="bg-brand-500 placeholder:text-white p-4"
          />
          <button className="bg-white text-brand-500 p-4">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;

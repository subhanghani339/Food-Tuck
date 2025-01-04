// import React from "react";
// import Image from "next/image";
// import SolidButton from "../Buttons/SolidButton";
// import { FaCirclePlay } from "react-icons/fa6";

// const MainAbout = () => {
//   return (
//     <div className="container py-20 grid grid-cols-12 gap-20">
//       <div className="col-span-12 md:col-span-7">
//         <Image
//           src={"/images/about/about1.svg"}
//           alt="about image"
//           width={800}
//           height={1600}
//           priority
//         />
//       </div>

//       <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
//         <h1 className="special-text text-brand-500 font-bold">About Us ____</h1>
//         <h2 className="text-grey-100 font-bold text-3xl md:text-4xl mt-1 mb-4">
//           Food is an important <br className="hidden md:block" /> part of a
//           balanced Diet
//         </h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
//           pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
//           augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
//           vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
//         </p>
//         <div className="mt-4 flex gap-4">
//           <SolidButton text="Show More" className="text-white rounded-md" />
//           <button className="text-grey-100 bg-transparent flex gap-2 items-center">
//             <FaCirclePlay fontSize={"40px"} fill="#FF9F0D" /> Watch Video
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainAbout;


import React from "react";
import Image from "next/image";
import SolidButton from "../Buttons/SolidButton";
import { FaCirclePlay } from "react-icons/fa6";

const MainAbout = () => {
  return (
    <div className="container py-20 grid grid-cols-12 gap-20">
      <div className="col-span-12 md:col-span-7">
        <Image
          src={"/images/about/about1.svg"}
          alt="about image"
          width={800}
          height={1600}
          priority
        />
      </div>

      <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
        <h1 className="special-text text-brand-500 font-bold">About Us ____</h1>
        <h2 className="text-gray-100 font-bold text-3xl md:text-4xl mt-1 mb-4">
          Food is an important <br className="hidden md:block" /> part of a
          balanced Diet
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="mt-4 flex gap-4">
          <SolidButton text="Show More" className="text-white rounded-md" />
          <button className="text-gray-100 bg-transparent flex gap-2 items-center">
            <FaCirclePlay className="text-[#FF9F0D]" fontSize={"40px"} /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;

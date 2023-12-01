import React from "react";
import image from "../assets/succes.png";
import { IoCloseOutline } from "react-icons/io5";

function SuccessModel({showSuccess, setShowSuccess}) {
  return (
    <div
      className={`${showSuccess === true ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-screen bg-[#0000002a] backdrop-blur items-center !justify-center p-5 sm:p-8`}
    >
      <div className="relative bg-white p-7 pb-9 w-full sm:w-3/5 xl:w-3/12 flex items-center justify-center flex-col rounded-lg shadow z-40">
        <figure className="w-40">
          <img src={image} alt="" />
        </figure>
        <h2 className="text-primaryColor uppercase font-bold text-2xl tracking-wide">
         Congratulations!
        </h2>
        <p className="mt-2 text-center text-[14px] whitespace-normal">
        You have finally successfully completed 21 days of the 21 day challenge for yourself
        </p>
        <span className="absolute top-0 right-0 p-4">
          <IoCloseOutline onClick={() => setShowSuccess(false)} className="text-secondaryColor text-lg cursor-pointer " />
        </span>
      </div>
    </div>
  );
}

export default SuccessModel;

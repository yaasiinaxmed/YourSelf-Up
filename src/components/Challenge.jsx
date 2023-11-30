import React, { useEffect, useState } from "react";
import { BiSolidTrash } from "react-icons/bi";

import { useFirebase } from "../context/firebase";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Challenge({ challenge }) {

  return (
    <div
      className="w-full md:w-[280px] flex items-center justify-center flex-col gap-2 p-8 bg-white border-t-[3px] border-primaryColor rounded shadow-[0px_0px_5px_rgba(0,0,0,0.1)] transition-all duration-300 
          cursor-pointer hover:-translate-y-2 relative"
    >
      {/* content */}
      <Link
        to={`/Challenge/${challenge._id}`}
        className="flex items-center justify-center flex-col gap-2"
      >
        <span className="text-gray-500 text-lg">
         {challenge.tasks.length}
        </span>
        <h4 className="text-4xl text-primaryColor font-bold">Days</h4>
        <h3 className="text-secondaryColor text-lg font-medium">
          {challenge.title}
        </h3>
      </Link>
      {/* actions */}
      <div className="absolute bottom-0 left-0 w-full flex items-end justify-end p-4">
        <BiSolidTrash
          onClick={() => handleDelete(challenge.id)}
          className="text-primaryColor"
        />
      </div>
    </div>
  );
}

export default Challenge;

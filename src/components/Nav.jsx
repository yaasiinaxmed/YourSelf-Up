import React, { useEffect } from "react";
import logo from "../assets/favicon-icon.png";
import { IoMdLogOut, IoMdWarning } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import { useFirebase } from "../context/firebase";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { IoCloseOutline } from "react-icons/io5";
function Nav({ challenge, params }) {
  const { logOut } = useFirebase();

  useEffect(() => {
    if (challenge.id === params.id) {
      toast.custom((t) => (
        <div
          className={`bg-white px-6 py-4 shadow-md rounded-full ${
            t.visible ? "animate-enter" : "animate-leave"
          }  max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex items-center justify-between gap-4 ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex items-center gap-3">
          <span className="text-primaryColor">
            <IoMdWarning />
          </span>
          <span>{challenge.description}</span>
          </div>
          <IoCloseOutline
              className="text-secondaryColor text-xl cursor-pointer "
              onClick={() => toast.dismiss(t.id)}
            />
        </div>
      ));
    } else {
        return 
    }
  }, [challenge]);

  return (
    <div className="relative w-full py-8 sm:py-12 px-[6%] sm:px-[12%] bg-gradient-to-r from-secondaryColor to-primaryColor flex items-center justify-between rounded-br-[5rem]">

      {/* challenge info */}
      <div className="flex items-center gap-3">
        <figure className="w-16 rounded-full overflow-hidden">
          <img src={logo} alt="" className="w-full rounded-full" />
        </figure>
        <div className="text-white ">
          <h1 className="font-bold text-2xl">{challenge.title}</h1>
          <span>Your Challenge</span>
        </div>
      </div>
      {/* Go back arrow action */}
      <Link
        to="/Home"
        className="absolute top-2 sm:top-3 left-5 sm:left-8 text-white text-2xl cursor-pointer "
      >
        <MdOutlineArrowBack />
      </Link>
      {/* LogOut */}
      <div
        onClick={logOut}
        className="absolute top-3 right-8 text-white text-2xl cursor-pointer "
      >
        <IoMdLogOut />
      </div>
    </div>
  );
}

export default Nav;

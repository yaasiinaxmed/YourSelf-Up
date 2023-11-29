import React from "react";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="w-full flex items-center justify-around flex-col-reverse md:flex-row gap-4 lg:gap-0 ">
      {/* text hero */}
      <div
        id="effects"
        className="flex-1 lg:flex-auto flex flex-col gap-4 items-center md:items-start justify-center md:justify-start"
      >
        <figure className="w-[18rem] md:w-[22rem]">
          <img src={logo} alt="" className="w-full" />
        </figure>
        <p className="whitespace-normal text-center md:text-left max-[380px]:text-[1rem] text-xl md:text-3xl  leading-normal md:leading-[2.3rem] font-light text-gray-700">
          <b>Yourself up</b> is an App that will help you{" "}
          <br className="hidden lg:block" />
          stop bad habits and create new good and{" "}
          <br className="hidden lg:block" />
          effective habits that can lead you on the{" "}
          <br className="hidden lg:block" />
          road to <b>success!</b>
        </p>
      </div>

      {/* effect */}
      <div className="effect3">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5359 6C21.0755 3.33334 24.9245 3.33333 26.4641 6L39.4545 28.5C40.9941 31.1667 39.0696 34.5 35.9904 34.5H10.0096C6.93042 34.5 5.00592 31.1667 6.54552 28.5L19.5359 6Z"
            fill="#CF4358"
          />
          <path
            d="M27.5359 14C29.0755 11.3333 32.9245 11.3333 34.4641 14L47.4545 36.5C48.9941 39.1667 47.0696 42.5 43.9904 42.5H18.0096C14.9304 42.5 13.0059 39.1667 14.5455 36.5L27.5359 14Z"
            fill="#222C3A"
          />
        </svg>
      </div>

      {/* image hero */}
      <figure className="z-10">
        <img src={hero} alt="" />
      </figure>
    </div>
  );
}

export default Hero;

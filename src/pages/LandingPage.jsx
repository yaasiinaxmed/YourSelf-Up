import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ContinueWithGoogle from "../components/ContinueWithGoogle";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom"

function LandingPage() {
  const navigate = useNavigate()
  const token = Cookies.get("token")

  useEffect(() => {
    if(token) {
      navigate('/Home')
    }
  }, [token])
  
  return (
    <div className="w-full relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12">
      <img
        src="https://i.ibb.co/tDh2R6c/image-1.jpg"
        alt=""
        className="w-full h-full absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="absolute left-[calc(30%-5rem)] aspect-[1222/678] w-[36.125rem] -translate-x-1/4 rotate-[360deg] bg-gradient-to-tr from-primaryColor to-[#00a2ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 50.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 83.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 72.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {/* <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com//img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
      <div className="w-full h-full flex items-center justify-center flex-col px-[6%] sm:px-[12%] ">
        <Hero />
        <ContinueWithGoogle />
      </div>
    </div>
  );
}

export default LandingPage;

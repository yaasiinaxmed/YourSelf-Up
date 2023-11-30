import React, { useEffect, useState } from "react";
import Challenge from "./Challenge";


function Challenges({ challenges , setShowSuccess}) {

  return (
    <div className="px-[6%] sm:px-[12%] w-full flex flex-col gap-4 mt-4">
      <h2 className="font-medium text-lg text-secondaryColor">
        All Your Challenges
      </h2>
      {/* challenges */}
      <div className="flex flex-wrap gap-8">
        {challenges.map((challenge) => (
          <Challenge challenge={challenge} key={challenge._id} setShowSuccess={setShowSuccess}/>
        ))}
      </div>
    </div>
  );
}

export default Challenges;

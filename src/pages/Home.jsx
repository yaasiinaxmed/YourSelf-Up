import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import Challenges from "../components/Challenges";
import Empty from "../components/Empty";
import AddChallenge from "../components/AddChallenge";
import { useGetChallengesQuery } from "../store/api/ChallengeSlice";
import { useGetUserQuery } from "../store/api/UserSlice";

function Home() {
  const [showModel, setShowModel] = useState(false);

  const {data: challenges = []} = useGetChallengesQuery()
  const {data: user = {}} = useGetUserQuery()

  const [yourChallenges, setYourChallenges] = useState([])

  useEffect(() => {
    const filtaredChallenges = challenges.filter(
      (challenge) => challenge.user === user._id
    );
    
    setYourChallenges(filtaredChallenges);
    
  }, [challenges, yourChallenges]);

  useEffect(() => {
    document.title = `YourSelf up - Home | ${user?.name} `
  }, [])

  return (
    <div className="relative w-full h-screen flex flex-col pb-4">

      {/* navbar & user info */}
      <Navbar setShowModel={setShowModel} />

      {/* add challenge button responsive */}
      <button
        onClick={() => setShowModel(true)}
        className="z-30 shadow-xl flex sm:hidden fixed bottom-14 right-10 w-[60px] h-[60px] bg-secondaryColor rounded-full text-white items-center justify-center"
      >
        <AiOutlinePlus size={30} />
      </button>
      {/* Challenges */}
      {yourChallenges.length === 0 ? <Empty /> : <Challenges challenges={yourChallenges}/>}

      {/* Add challenge Model */}
      <AddChallenge showModel={showModel} setShowModel={setShowModel} />
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useFirebase } from "../context/firebase";
import { useParams } from "react-router-dom";
import Tasks from "../components/Tasks";
import toast from "react-hot-toast";
import SuccessModel from "../components/SuccessModel";
import { useGetChallengesQuery } from "../store/api/challengeSlice";
import { useGetUserQuery } from "../store/api/UserSlice";

function Challenge() {
  const { data: challenges = [], isLoading } = useGetChallengesQuery();
  const { data: user = {} } = useGetUserQuery();
  const params = useParams();
  const [currentChallenge, setCurrentChallenge] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const challenge = challenges.find(
      (challenge) => challenge?._id !== params.id
    );
    setCurrentChallenge(challenge);
  }, [challenges, params.id]);

  useEffect(() => {
    document.title = `YourSelf up - Challenge | ${user.name} `;
  }, []);

  return (
    <div className="flex flex-col pb-8">
      {/* navbar */}
      <Nav challenge={currentChallenge} params={params} />
      {/* tasks */}
      <div className="w-full flex flex-wrap gap-6 mt-6 px-[6%] sm:px-[12%]">
        {currentChallenge?.tasks?.map((task, index) => {
          return (
            <Tasks
              key={index}
              task={task}
              count={index}
              challenge={currentChallenge}
            />
          );
        })}
      </div>
      {/* Success Model */}
      <SuccessModel showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
    </div>
  );
}

export default Challenge;

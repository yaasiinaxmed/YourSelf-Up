import React, { useEffect, useState } from "react";
import { BiSolidTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDeleteChallengeMutation } from "../store/api/ChallengeSlice";

function Challenge({ challenge }) {

  const [deleteChalenge] = useDeleteChallengeMutation()
  const [doneTasks, setDoneTasks] = useState([])

  const handleDelete = (id) => {
    if(confirm("Are you sure you went to delete this challenge?")) {
      deleteChalenge(id).unwrap().then((result) => {
        toast.success(result.message)
      }).catch((error) => {
        console.log("error delete challenge:", error)
      })
    }
  }

  useEffect(() => {
    const filteredTasks = challenge?.tasks?.filter((task) => task?.isTrue === true)
    setDoneTasks(filteredTasks)
  }, [challenge])

  return (
    <div
      className="w-full md:w-[280px] flex items-center justify-center flex-col gap-2 p-8 bg-white border-t-[3px] border-primaryColor rounded shadow-[0px_0px_5px_rgba(0,0,0,0.1)] transition-all duration-300 
          cursor-pointer hover:-translate-y-2 relative"
    >
      {/* content */}
      <Link
        to={`/Challenge/${challenge?._id}`}
        className="flex items-center justify-center flex-col gap-2"
      >
        <span className="text-gray-500 text-lg">
         {doneTasks.length} / {challenge?.tasks.length}
        </span>
        <h4 className="text-4xl text-primaryColor font-bold">Days</h4>
        <h3 className="text-secondaryColor text-lg font-medium">
          {challenge?.title}
        </h3>
      </Link>
      {/* actions */}
      <div className="absolute bottom-0 left-0 w-full flex items-end justify-end p-4">
        <BiSolidTrash
          onClick={() => handleDelete(challenge?._id)}
          className="text-primaryColor"
        />
      </div>
    </div>
  );
}

export default Challenge;

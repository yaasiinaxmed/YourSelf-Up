import React from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { useUpdateIsFalseMutation, useUpdateIsTrueMutation } from "../store/api/ChallengeSlice";
import { useParams } from "react-router-dom";

const style = {
  bgHover: `hover:bg-[#222c3a2f]  hover:border-secondaryColor hover:text-secondaryColor text-secondaryColor`,
  bgSuccess: `!bg-[#34a8532f] hover:!bg-[#34a8532f]  !border-[#34A853] hover:border-[#34A853] !text-[#34A853] hover:text-[#34A853] `,
  bgFailed: `!bg-[#c11f4d27] hover:!bg-[#c11f4d27]   !border-primaryColor hover:!border-primaryColor !text-primaryColor hover:!text-primaryColor`,
};

function Tasks({ task, count }) {
  const [updateIsTrue] = useUpdateIsTrueMutation()
  const [updateIsFalse] = useUpdateIsFalseMutation()
  const {id} = useParams()

  // update isTrue
  const handleIsTrue = (task) => {
    updateIsTrue({challengeID: id, taskID: task._id, isTrue: task.isTrue})
  }

  const handleIsFalse = (task) => {
    updateIsFalse({challengeID: id, taskID: task._id, isFalse: task.isFalse}).unwrap()
  }

  return (
    <div
      className={`relative flex items-center group justify-center p-12 bg-white w-full sm:w-[180px] h-[120px] rounded
       border-2 transition-all duration-150 ${style.bgHover} ${
         task?.isTrue !== false ? style.bgSuccess : ""
       } ${task.isFalse !== false ? style.bgFailed : ""}  `}
    >
      <h2 className="text-2xl font-semibold  ">{count + 1}</h2>
      {/* actions */}
      <div
        className={`absolute top-0 right-0 w-full  group-hover:flex ${
          task.isTrue === true || task.isFalse === true ? "flex !justify-end " : "hidden"
        } items-center justify-between p-3 text-lg`}
      >
        <span
          onClick={() => handleIsFalse(task)}
          className={`cursor-pointer ${
            task.isTrue === false ? "block" : "hidden"
          }`}
        >
          <AiFillCloseCircle />
        </span>
        <span
          onClick={() => handleIsTrue(task)}
          className={`cursor-pointer ${
            task.isFalse === false ? "block" : "hidden"
          } `}
        >
          <AiFillCheckCircle />
        </span>
      </div>
    </div>
  );
}

export default Tasks;

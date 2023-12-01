import React, { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";
import { useCreateChallengeMutation } from "../store/api/ChallengeSlice";

function AddChallenge({ showModel, setShowModel }) {
  const [ addChallenge ] = useCreateChallengeMutation();

  const validationSchema = Yup.object({
    title: Yup.string().required("Enter Title Challenge"),
    description: Yup.string().required("Enter Note Challenge"),
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = (e, { resetForm }) => {    
    const title = e.title;
    const description = e.description;

    addChallenge({title, description})
      .then(() => {
        setShowModel(false);
        toast.success("Challenge was created!");
      })
      .catch((error) => {
        console.log(error)
      });

    resetForm();
  };

  return (
    <div
      className={`${
        showModel === true ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-screen bg-[#0000002a] backdrop-blur items-center justify-center p-8`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form 
        className="bg-white p-7 w-full sm:w-3/5 xl:w-3/12 flex flex-col rounded-lg shadow z-40">
          <div className="flex justify-between">
            <h2 className="font-medium text-secondaryColor text-lg">
              Create New Challenge
            </h2>
            <IoCloseOutline
              className="text-secondaryColor text-lg cursor-pointer "
              onClick={() => setShowModel(false)}
            />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Field
              type="text"
              placeholder="Title Challenge"
              name="title"
              className="w-full p-3 border rounded outline-none focus:border-primaryColor"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-xs text-primaryColor "
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Field
              as="textarea"
              placeholder="Write words that motivate you to achieve your goals"
              name="description"
              className="w-full h-[120px] p-3 border rounded outline-none focus:border-primaryColor resize-none"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-xs text-primaryColor "
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-3 bg-primaryColor transition-all duration-150 hover:bg-secondaryColor text-white rounded "
          >
            Create Challenge
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddChallenge;

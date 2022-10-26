import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import thankyou from "../../assets/thankyoumsg.json";

const CheckOut = () => {
  const checkOutCourse = useLoaderData();
  const { id, title, descriptions, price, rating, img } = checkOutCourse;
  return (
    <div className="p-5 min-h-screen mx-auto">
      <div className="w-full lg:w-[70%] mx-auto alert alert-success bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Congratulations!! you got premium access for{" "}
            <span className="text-3xl">{title}</span>
          </span>
        </div>
      </div>
      <div className=" mt-4">
        <Lottie style={{ height: 350 }} animationData={thankyou} loop={false} />
      </div>
      <div className="text-center mt-5">
        <Link to="/courses">
          {" "}
          <button className="btn btn-wide btn-outline">
            Back to the courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;

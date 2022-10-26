import React from "react";
import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import thankyou from "../../assets/thankyoumsg.json";

const CheckOut = () => {
  const checkOutCourse = useLoaderData();
  const { id, title, descriptions, price, rating, img } = checkOutCourse;
  return (
    <div className="p-5  mx-auto">
      <div className="">
        <Lottie animationData={thankyou} loop={true} />
      </div>
      <div className="alert alert-success shadow-lg">
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
            Your purchase course <span className="text-3xl">{title}</span> has
            been confirmed!
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

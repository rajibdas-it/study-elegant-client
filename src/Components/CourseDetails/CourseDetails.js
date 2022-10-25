import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, title, descriptions, price, rating, img } = courseDetails;
  return (
    <div className="w-[85%] mx-auto mt-20">
      <h1>Course Details Page of {title}</h1>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{descriptions}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <button className="btn btn-outline">Download</button>
    </div>
  );
};

export default CourseDetails;

import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, title, descriptions, price, rating, img } = courseDetails;
  return (
    <div>
      <h1>Course Details Page of {title}</h1>
      <button className="btn btn-outline">Download</button>
    </div>
  );
};

export default CourseDetails;

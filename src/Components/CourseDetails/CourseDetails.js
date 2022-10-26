import React from "react";
import { FaArrowAltCircleRight, FaCloudDownloadAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import CourseCover from "./CourseCover";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, title, shortDes, descriptions, price, rating, img, TopicCover } =
    courseDetails;
  return (
    <div className="w-[85%] mx-auto mt-20 mb-20">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{descriptions}</p>
          <div>
            <p className="font-bold underline">Things We Cover</p>
            {TopicCover.map((topic) => (
              <li>{topic}</li>
            ))}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${id}`}>
              <button className="btn btn-primary capitalize bg-gradient-to-tr from-purple-400 to-blue-400 text-white border-none hover:from-blue-400">
                <FaArrowAltCircleRight />
                Get Premium Access
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-outline mt-10">
          <FaCloudDownloadAlt /> Download
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;

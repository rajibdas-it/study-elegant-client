import React from "react";
import {
  FaArrowAltCircleRight,
  FaCloudDownloadAlt,
  FaStar,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, title, shortDes, descriptions, price, rating, img, TopicCover } =
    courseDetails;
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto mt-20 mb-20">
      <h1 className="text-center text-2xl font-semibold md:text-4xl mb-5 font-semibold">
        Details Page of{" "}
        <span className="text-2xl font-semibold md:text-4xl lg:font-bold">
          {title}
        </span>
      </h1>
      <div className="text-center">
        <button className="btn btn-outline mt-2 mb-5">
          <FaCloudDownloadAlt /> Download
        </button>
      </div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="">
            <p className="flex  items-center">
              Ratings: <FaStar className="text-orange-500"></FaStar>{" "}
              <span> {rating}</span>
            </p>

            <p></p>
          </div>
          <p className="font-bold underline">Course Descriptions:</p>
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
      {/* <div className="text-center">
        <button className="btn btn-outline mt-10">
          <FaCloudDownloadAlt /> Download
        </button>
      </div> */}
    </div>
  );
};

export default CourseDetails;

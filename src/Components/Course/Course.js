import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Course = ({ course }) => {
  console.log(course);
  const { id, title, shortDes, descriptions, price, rating, img } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{shortDes}</p>
        <div className="">
          <p>
            Price: <span>${price}</span>
          </p>
          <p className="flex  items-center">
            Ratings: <FaStar className="text-orange-500"></FaStar>{" "}
            <span> {rating}</span>
          </p>

          <p></p>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/course/${id}`}>
            <div className="card-actions">
              <button className="btn bg-gradient-to-tr from-purple-400 to-blue-400 text-white border-none hover:from-blue-400">
                Details
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;

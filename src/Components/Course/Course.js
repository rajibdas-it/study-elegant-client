import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, title, descriptions, price, rating, img } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{descriptions}</p>
        <div className="card-actions justify-end">
          <Link to={`/course/${id}`}>
            <button className="btn btn-info">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;

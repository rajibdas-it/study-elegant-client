import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ course }) => {
  const { id, title, descriptions, price, rating, img } = course;
  return (
    <div>
      <Link to={`/course/${id}`}>
        <button
          key={course.id}
          className="btn btn-outline btn-info btn-wide lg:w-[100%] mb-2"
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;

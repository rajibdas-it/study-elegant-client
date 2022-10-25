import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import { CourseContext } from "../../Layout/Main";
import Course from "../Course/Course";
import Sidebar from "./Sidebar";

const Courses = () => {
  const courses = useContext(CourseContext);
  // console.log(courses);

  // const courses = useLoaderData();
  // console.log(courses);
  return (
    <div className=" w-[90%] mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
      <div className="md:hidden lg:block lg:col-span-3">
        {courses.map((course) => (
          <Sidebar key={course.key} course={course}></Sidebar>
        ))}
      </div>
      <div className="col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

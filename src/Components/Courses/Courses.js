import React, { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
import { CourseContext } from "../../Layout/Main";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useContext(CourseContext);
  // console.log(courses);

  // const courses = useLoaderData();
  // console.log(courses);
  return (
    <div className=" w-[90%] mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;

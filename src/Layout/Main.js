import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export const CourseContext = createContext();

const Main = () => {
  const courses = useLoaderData();
  // console.log(courses);
  // const contextInfo = { courses };

  return (
    <div>
      <CourseContext.Provider value={courses}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </CourseContext.Provider>
    </div>
  );
};

export default Main;

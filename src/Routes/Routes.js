import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import PasswordReset from "../Components/Authentication/PasswordReset";
import Register from "../Components/Authentication/Register";
import Blogs from "../Components/Blogs/Blogs";
import Contract from "../Components/Contract/Contract";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://study-elegant-server.vercel.app/allcourses"),
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/courses", element: <Courses></Courses> },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://study-elegant-server.vercel.app/course/${params.id}`),
      },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/faq", element: <FAQ></FAQ> },
      { path: "/contract", element: <Contract></Contract> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/resetpassword", element: <PasswordReset></PasswordReset> },
    ],
  },
]);

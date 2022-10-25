import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const user = false;
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  // alert(`${theme} theme set`);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          <img className="w-full" src={logo} alt="" />
        </Link>
      </div>
      {/* <input
        onClick={toggleTheme}
        type="checkbox"
        className="toggle toggle-md mr-3"
      /> */}
      <div className="flex-none gap-2 justify-center items-center">
        <div>
          <ul className="hidden lg:flex gap-10 text-gray-500 ">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contract"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Contract
              </NavLink>
            </li>
            {!user && (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-black font-semibold"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-black font-semibold"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn btn-square btn-ghost">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contract"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black font-semibold"
                }
              >
                Contract
              </NavLink>
            </li>
            {!user && (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-black font-semibold"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-black font-semibold"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

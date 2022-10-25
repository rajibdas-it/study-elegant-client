import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2 justify-center items-center">
        <div>
          <ul className="hidden lg:flex gap-10 text-gray-500 ">
            <li>
              <Link to="/home">Home</Link>{" "}
            </li>
            <li>
              <Link to="/courses">Courses</Link>{" "}
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>{" "}
            </li>
            <li>
              <Link to="/faq">FAQ</Link>{" "}
            </li>
            <li>
              <Link to="/contract">Contract</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn btn-square btn-ghost">
            <div class="flex-none">
              <button class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-5 h-5 stroke-current"
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
              <Link to="/home">Home</Link>{" "}
            </li>
            <li>
              <Link to="/courses">Courses</Link>{" "}
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>{" "}
            </li>
            <li>
              <Link to="/faq">FAQ</Link>{" "}
            </li>
            <li>
              <Link to="/contract">Contract</Link>{" "}
            </li>
          </ul>
        </div>
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
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

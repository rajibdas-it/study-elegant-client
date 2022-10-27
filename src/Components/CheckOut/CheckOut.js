import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const checkOutCourse = useLoaderData();
  const { id, title, descriptions, price, rating, img } = checkOutCourse;
  const navigate = useNavigate();

  const handleCheckOut = () => {
    Swal.fire(
      "Congratulations!!",
      `You got premium access for ${title}`,
      "success"
    );
  };
  return (
    <div className="p-5 min-h-screen mx-auto">
      <h1 className="text-center text-4xl font-bold">Checkout</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="">
          <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form
              novalidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Personal Inormation</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="firstname" className="text-sm">
                      Full Name
                    </label>
                    <input
                      defaultValue={user?.uid ? user?.displayName : ""}
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3">
                    <label for="email" className="text-sm">
                      Email
                    </label>
                    <input
                      defaultValue={user?.uid ? user?.email : ""}
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label for="address" className="text-sm">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="state" className="text-sm">
                      State / Province
                    </label>
                    <input
                      id="state"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="zip" className="text-sm">
                      ZIP / Postal
                    </label>
                    <input
                      id="zip"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>

        {/* cart div */}
        <div>
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Your Shopping Cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={img}
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className=" font-semibold leading-snug">{title}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">$ {price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">$ {price}</span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCheckOut}
                className="px-6 py-2 btn btn-primary bg-gradient-to-tr from-purple-400 to-blue-400  border-none hover:from-blue-400"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/courses">
          {" "}
          <button className="btn btn-wide btn-outline">
            Back to the courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;

import React from "react";

const PricingCard = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4 text-gray-500">
          Our Pricing
        </h1>
        <h1 className="text-2xl font-bold">Choose The Plan That Suits You</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        <div className="card w-full bg-white text-primary-content">
          <div className="card-body hover:bg-gradient-to-r from-blue-300 to-indigo-300">
            <h2 className="card-title text-2xl font-bold text-center">Basic</h2>
            <p className="mt-3 leading-relaxed">
              <span className="font-bold">
                $<span className="text-5xl">9.99</span>
              </span>
              /month
            </p>

            <ul className="flex-1 mb-6 dark:text-gray-400">
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Number of screens you can watch on at the same time: 1.
                </span>
              </li>

              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Number of phones or tablets you can have{" "}
                  <span className="text-red-500">downloads</span> on 1.
                </span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Watch on your laptop, TV, phone and tablet</span>
              </li>
            </ul>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning justify-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-white text-primary-content">
          <div className="card-body hover:bg-gradient-to-r from-blue-300 to-indigo-300">
            <h2 className="card-title text-2xl font-bold text-center">
              Standard
            </h2>
            <p className="mt-3 leading-relaxed">
              <span className="font-bold">
                $<span className="text-5xl">15.99</span>
              </span>
              /half-yearly
            </p>

            <ul className="flex-1 mb-6 dark:text-gray-400">
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Number of screens you can watch on at the same time- 2.
                </span>
              </li>

              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Number of phones or tablets you can have{" "}
                  <span className="text-red-500">downloads</span> on: 2.
                </span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Watch on your laptop, TV, phone and tablet</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>HD available</span>
              </li>
            </ul>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning justify-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-white text-primary-content">
          <div className="card-body hover:bg-gradient-to-r from-blue-300 to-indigo-300">
            <h2 className="card-title text-2xl font-bold text-center">
              Premium
            </h2>
            <p className="mt-3 leading-relaxed">
              <span className="font-bold">
                $<span className="text-5xl">25.99</span>
              </span>
              /yearly
            </p>

            <ul className="flex-1 mb-6 dark:text-gray-400">
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Number of screens you can watch on at the same time- 4.
                </span>
              </li>

              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Number of phones or tablets you can have{" "}
                  <span className="text-red-500">downloads</span> on: 4.
                </span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Watch on your laptop, TV, phone and tablet</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>HD available</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Ultra HD available</span>
              </li>
            </ul>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning justify-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

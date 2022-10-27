<div className="w-full lg:w-[70%] mx-auto alert alert-success bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Congratulations!! you got premium access for{" "}
            <span className="text-3xl">{title}</span>
          </span>
        </div>
      </div>
      <div className=" mt-4">
        <Lottie style={{ height: 350 }} animationData={thankyou} loop={false} />
      </div>
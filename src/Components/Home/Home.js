import React from "react";
import Lottie from "lottie-react";
import one from "../../assets/others/11.json";
import two from "../../assets/others/3.json";
import three from "../../assets/others/5.json";
import four from "../../assets/others/7.json";
const Home = () => {
  return (
    <div className="mt-6 w-[80%] mx-auto">
      {/* banner section start */}
      <section>
        <div className="w-full mx-auto flex flex-col md:flex-row lg:flex-row justify-center items-center rounded-md">
          <div
            className="w-[40%] m-3"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1 className="text-3xl font-bold text-blue-500 italic text-center">
              Study Elegant
            </h1>
            <h1 className="text-2xl font-bold text-blue-500 italic text-center">
              EDUCATION SOLUTIONS
            </h1>
            <p className="text-gray-500 italic ml-8 text-center">
              Do different today and every day.
            </p>
          </div>
          <div
            className="w-[60%] m-3 sm:text-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Lottie animationData={three} loop={true} />
          </div>
        </div>
      </section>
      {/* banner section end */}

      {/* card section start */}
      <section></section>
      {/* card section end */}
      {/* slider section start */}
      <section></section>
      {/* slider section end */}
      {/* jumbortan section start */}
      <section></section>
      {/* jumbortan section end */}
    </div>
  );
};

export default Home;

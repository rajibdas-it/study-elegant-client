import React from "react";

const Jumborton = () => {
  return (
    <section className="p-6 mt-20 mb-20">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">1000+</p>
          <p className="text-sm sm:text-base">Clients</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">10K</p>
          <p className="text-sm sm:text-base">Followers on social media</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
          <p className="text-sm sm:text-base">Published books</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
          <p className="text-sm sm:text-base">TED talks</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">2</p>
          <p className="text-sm sm:text-base">Years of experience</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
          <p className="text-sm sm:text-base">Workshops</p>
        </div>
      </div>
    </section>
  );
};

export default Jumborton;

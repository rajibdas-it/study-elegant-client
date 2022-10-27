import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-screen w-[50%] mx-auto">
      <div className="container flex flex-col justify-center mx-auto ">
        <h2 className="text-2xl text-blue-400 font-semibold sm:text-4xl text-center mt-10 mb-5">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="w-full border rounded-lg shadow-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Is your design and website idea are unique?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              Yes i have tried my to best to made my website unique.
            </p>
          </details>
          <details className="w-full border rounded-lg shadow-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Will your navbar contain logo, website name, Courses, FAQ, Blogs,
              toggle theme (dark/ light), and User Profile Picture?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              Yes. Navbar of my website contain all of these. It show your
              profile picture when you are logon. Show your name when you hover
              mouse on your profile picture. But one thing toggle button added
              but it only notify you when you click on it but theme of my
              website never be changed.
            </p>
          </details>
          <details className="w-full border rounded-lg shadow-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              After clicking "Log in," will it redirect to a login page?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              Yes. when you click on Log in or any other public routes of
              website it will redirect you that page.
            </p>
          </details>
          <details className="w-full border rounded-lg shadow-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Is your website responsive?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              My website is totally responsive for mobile and large device.
            </p>
          </details>
          <details className="w-full border rounded-lg shadow-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Do you have checkout page on your website?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              Yes. This website has a checkout page and its totally private. You
              have to access it by provide correct user credential.
            </p>
          </details>
          <details className="w-full border rounded-lg shadow-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Is your website show 404 page when user provide unknown route?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              If you provide unknown url it will goes to 404 page.
            </p>
          </details>
          <details className="w-full border rounded-lg shadow-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Do you have Password reset system in your web apps?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
              Yes. User can recover their password when needed.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

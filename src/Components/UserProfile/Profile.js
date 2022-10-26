import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateUseProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullname.value;
    const photoURL = form.photoURL.value;
    const profile = {
      displayName: fullName,
      photoURL: photoURL,
    };

    console.log(profile);
    updateUserProfile(profile)
      .then(() => {
        toast.success("Profile Updated Successfully", { autoClose: 1500 });
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 1500 });
      });
  };

  // const handleRegister = (event) => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const email = form.email.value;

  //   passwordReset(email)
  //     .then((result) => {
  //       toast.success(
  //         "Password Reset Email has been sent to your email. Please Check your spam folder as well as.",
  //         { autoClose: 1500 }
  //       );
  //     })
  //     .catch((error) => {
  //       toast.error(error.message, { autoClose: 1500 });
  //     });
  // };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold italic text-blue-500">
              Profile of {user.displayName}
            </h1>
            <div className="mt-10 text-center">
              {user.emailVerified ? (
                <div class="badge badge-success gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  User Email Active
                </div>
              ) : (
                <div class="badge badge-warning gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  User Email Not Active yet.
                </div>
              )}
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleUpdateUseProfile}
              className="card-body w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  defaultValue={user.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="type your register email here..."
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info rounded shadow-lg hover:bg-gradient-to-r from-purple-500 to-blue-500">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

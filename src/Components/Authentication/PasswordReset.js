import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const PasswordReset = () => {
  const { passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;

    passwordReset(email)
      .then((result) => {
        toast.success(
          "Password Reset Email has been sent to your email. Please Check your spam folder as well as.",
          { autoClose: 1500 }
        );
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 2000 });
      });
  };

  return (
    <div className="mt-20">
      <div className="min-h-screen lg:w-[50%] mx-auto">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold italic text-blue-500">
              Forgot Password
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="type your register email here..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info rounded shadow-lg hover:bg-gradient-to-r from-purple-500 to-blue-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {
  const {
    createUser,
    googleSignIn,
    githubSignIn,
    updateUserProfile,
    userEmailVerify,
  } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    setErrorMsg("");

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const fullName = form.fullname.value;
    const photoURL = form.photoURL.value;
    if (password === confirmPassword) {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          form.reset();
          handleUpdateUseProfile(fullName, photoURL);
          handleEmailVerify();
          navigate("/");
          toast.success(
            "Account Created Successfully. Please check your email and Verify it.",
            { autoClose: 1500 }
          );
          // toast.success("Right Answer", { autoClose: 500 });
          // setMsg("Account Created Successfully. Please check your email.");
        })
        .catch((error) => {
          setErrorMsg(error.message);
          toast.error(error.message, { autoClose: 1500 });
        });
    } else {
      toast.error("Password and Confirm doesn't match", { autoClose: 1500 });
    }
    // console.log(email, password, confirmPassword);
  };

  // google signin handler code
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        // setErrorMsg(error.message);
        toast.error(error.message, { autoClose: 1500 });
      });
  };

  // github signin handler code
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        // setErrorMsg(error.message);
        toast.error(error.message, { autoClose: 1500 });
      });
  };

  const handleEmailVerify = () => {
    userEmailVerify()
      .then(() => {})
      .catch((error) => {
        toast.error(error.message, { autoClose: 1500 });
      });
  };
  const handleUpdateUseProfile = (fullName, photoURL) => {
    const profile = {
      displayName: fullName,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        toast.error(error.message, { autoClose: 1500 });
      });
  };

  return (
    <div>
      {/* <div className="hero bg-base-200"> */}
      <div className="min-h-screen lg:w-[50%] mx-auto">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold italic text-blue-500">
              Register now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* error msg display */}
            {/* {errorMsg && (
              <div className="alert alert-error shadow-lg">
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
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{errorMsg}</span>
                </div>
              </div>
            )} */}
            {/* error msg display */}
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info rounded shadow-lg hover:bg-gradient-to-r from-purple-500 to-blue-500">
                  Register
                </button>
              </div>
            </form>
            <div className="">
              <p className="px-3 text-sm text-center">
                Login with social accounts
              </p>
            </div>
            <div className="flex justify-center space-x-4 mb-2">
              <button
                onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="p-3 rounded shadow-lg hover:bg-gradient-to-r from-purple-500 to-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>

              <button
                onClick={handleGithubSignIn}
                aria-label="Log in with GitHub"
                className="p-3 rounded shadow-lg hover:bg-gradient-to-r from-purple-500 to-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 mb-5">
              Already have an account?
              <Link to="/login" rel="noopener noreferrer" className="underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

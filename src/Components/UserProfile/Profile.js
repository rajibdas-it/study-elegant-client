import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import Swal from "sweetalert2";
import noimg from "../../assets/noimg.webp";
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
        Swal.fire(
          "Congratulation!",
          "Update Information Successfully",
          "success"
        );

        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 1500 });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="avatar text-center">
            <div className="w-32 rounded">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src={noimg} alt="" />
              )}
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold italic text-blue-500">
              Profile of {user.displayName}
            </h1>
            <div className="mt-10 text-center">
              {user.emailVerified ? (
                <div className="alert alert-success shadow-lg">
                  <div>
                    <span>User Email Active</span>
                  </div>
                </div>
              ) : (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <span>User Email Not Active yet.</span>
                  </div>
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

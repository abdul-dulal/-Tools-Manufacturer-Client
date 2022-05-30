import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import profile from "../../../assets/images/myprofile.png";
import auth from "../../firebase.init";
const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const updateProfile = (event) => {
    event.preventDefault();

    const email = user?.email;
    const profile = {
      education: event.target.name.value,
      dist: event.target.dis.value,
      linkedin: event.target.linkedin.value,
      phone: event.target.phone.value,
    };

    event.target.reset();
    const updateProfile = { profile };
    fetch(`https://secret-brook-35937.herokuapp.com/profile/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div
        class="hero h-[400px]"
        style={{ background: `url(${profile})`, backgroundRepeat: "no-repeat" }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div class="hero h-[500px] bg-base-200">
        <div class="  w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 className="text-center text-2xl font-bold">
              Update <span className="text-orange-300">Profile</span>
            </h1>
            <form onSubmit={updateProfile}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Qualification "
                class="input input-bordered w-full max-w-xs my-3"
                required
              />
              <input
                type="text"
                name="dis"
                placeholder="Enter District "
                class="input input-bordered w-full max-w-xs"
                required
              />
              <input
                name="linkedin"
                class="textarea textarea-bordered   w-full max-w-xs mt-5"
                placeholder="Enter LinkedIn  url"
                required
              ></input>
              <input
                type="number"
                name="phone"
                placeholder="Phone number"
                class="input input-bordered w-full max-w-xs my-3"
                required
              />
              <input
                type="submit"
                value="Add Review"
                className="btn btn-success mt-5"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

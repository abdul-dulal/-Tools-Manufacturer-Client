import React, { useEffect } from "react";
import { toast } from "react-toastify";
import review from "../../../assets/images/page-header-bg.png";
const AddReview = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const message = event.target.message.value.slice(0, 100);
    const ratting = event.target.ratting.value;
    const name = event.target.name.value;
    const data = { name, img, message, ratting };

    event.target.reset();

    fetch("https://secret-brook-35937.herokuapp.com/review", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    toast.success("Review Added");
  };

  return (
    <div>
      <div
        style={{ background: `url(${review})` }}
        className="h-[300px] w-full"
      >
        <h1 className="text-2xl font-bold  text-white h-[300px] uppercase  flex items-center justify-center">
          say your <span className="text-orange-300 ml-2">opinion</span>
        </h1>
      </div>

      <div class="hero h-[500px] bg-base-200">
        <div class="  w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 className="text-center text-2xl font-bold">
              Add <span className="text-orange-300">Review</span>
            </h1>
            <form onSubmit={handleReview}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                class="input input-bordered w-full max-w-xs my-3"
                required
              />
              <input
                type="text"
                name="img"
                placeholder="image url"
                class="input input-bordered w-full max-w-xs"
                required
              />
              <textarea
                name="message"
                class="textarea textarea-bordered   w-full max-w-xs mt-5"
                placeholder="message"
                required
              ></textarea>
              <input
                type="number"
                name="ratting"
                placeholder="Add Ratting"
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

export default AddReview;

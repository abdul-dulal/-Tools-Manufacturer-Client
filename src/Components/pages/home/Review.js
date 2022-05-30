import React from "react";

const Review = ({ review }) => {
  const { img, message, ratting, name } = review;
  const number = parseFloat(ratting);

  return (
    <div className="">
      <div class="card w-max-lg bg-base-100 shadow-sm">
        <div class="avatar">
          <div class="w-32 rounded-full mx-auto block mt-7">
            <img src={img} alt="" />
          </div>
        </div>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{message}</p>
          <p>{number === 1 ? "⭐" : ""} </p>
          <p>{number === 2 ? "⭐⭐" : ""} </p>
          <p>{number === 3 ? "⭐⭐⭐" : ""} </p>
          <p>{number === 4 ? "⭐⭐⭐⭐" : ""} </p>
          <p>{number === 5 ? "⭐⭐⭐⭐⭐" : ""} </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
